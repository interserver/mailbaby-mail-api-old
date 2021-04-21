<?php
echo "Grabbing the samples repo\n";
passthru('cd '.__DIR__.'; git clone git@github.com:interserver/mailbaby-api-samples.git; cp -f .git/hooks/commit-msg mailbaby-api-samples/.git/hooks');
$buildOpenApi = false;
$buildSwagger = true;
if ($buildOpenApi === true) {
	echo "Generating a list of OpenAPI Generator clients we can generate\n";
	$out = `npx @openapitools/openapi-generator-cli list`;
	echo "Parsing OpenAPI Generator clients list\n";
	preg_match_all('/^([^\s]+) generators:.*\n\n/msuU', $out, $matches);
	$cats = [];
	foreach ($matches[1] as $idx => $cat) {
		preg_match_all('/^\s+- (\S+)\s.*/muU', $matches[0][$idx], $catMatches);
		$cats[strtolower($cat)] = $catMatches[1];
	}
	echo "Generating OpenAPI Generator samples\n";
	@mkdir('mailbaby-api-samples/openapi/output', 0777, true);
	foreach ($cats['client'] as $idx => $lang) {
		echo "[$idx] OpenAPI Generator Language: $lang\n";
		@mkdir('mailbaby-api-samples/openapi/'.$lang, 0777, true);
		passthru('npx @openapitools/openapi-generator-cli generate -i public/openapi.yaml -g '.$lang.' -o mailbaby-api-samples/openapi/'.$lang.'/ 2>&1 | tee mailbaby-api-samples/openapi/output/'.$lang.'.txt');
	}
}
if ($buildSwagger === true) {
	echo "Grabbing the Swagger Generator jar\n";
	passthru('cd '.__DIR__.' && wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.25/swagger-codegen-cli-3.0.25.jar -O swagger-codegen-cli.jar');
	echo "Generating and parsing a list of Swagger Generator clients we can generate\n";
	$langs = explode(', ', trim(exec('cd '.__DIR__.' && java -jar swagger-codegen-cli.jar langs | cut -d \[ -f2-|cut -d\] -f1')));
	echo "Generating Swagger Generator samples\n";
	@mkdir('mailbaby-api-samples/swagger/output', 0777, true);
	foreach ($langs as $idx => $lang) {
		echo "[$idx] Swagger Generator Language: $lang\n";
		@mkdir('mailbaby-api-samples/swagger/'.$lang, 0777, true);
		passthru('cd '.__DIR__.' && java -jar swagger-codegen-cli.jar generate -v -l '.$lang.' -i public/openapi.yaml -o mailbaby-api-samples/swagger/'.$lang.'/ 2>&1 | tee mailbaby-api-samples/swagger/output/'.$lang.'.txt');
	}
	passthru('cd '.__DIR__.' && rm -f swagger-codegen-cli.jar');
}
echo "Committing updated samples and cleanign up\n";
passthru('cd '.__DIR__.'/mailbaby-api-samples && git add -A && git commit -a -m "Updated API samples" && cd '.__DIR__.' && rm -rf mailbaby-api-samples openapitools.json');
echo "done!\n";
