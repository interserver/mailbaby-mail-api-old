<?php
$cmds = [];
$onlyLangs = [];
//$onlyLangs = ['php','html2'];
echo "Grabbing the samples repo\n";
if (!file_exists(__DIR__.'/mailbaby-api-samples'))
	passthru('cd '.__DIR__.'; git clone git@github.com:interserver/mailbaby-api-samples.git; cp -f .git/hooks/commit-msg mailbaby-api-samples/.git/hooks');
else
	passthru('cd '.__DIR__.'/mailbaby-api-samples && git pull --all');
$buildOpenApi = true;
$buildOpenApi = false;
$buildSwagger = true;
$spec = 'https://raw.githubusercontent.com/interserver/mailbaby-api-spec/master/swagger.yaml';
echo "Generating a list of OpenAPI Generator clients we can generate\n";
$out = `npx @openapitools/openapi-generator-cli list`;
echo "Parsing OpenAPI Generator clients list\n";
preg_match_all('/^([^\s]+) generators:.*\n\n/msuU', $out, $matches);
$cats = [];
foreach ($matches[1] as $idx => $cat) {
	preg_match_all('/^\s+- (\S+)\s.*/muU', $matches[0][$idx], $catMatches);
	$cats[strtolower($cat)] = $catMatches[1];
}
if ($buildOpenApi === true) {
	echo "Generating OpenAPI Generator samples\n";
	foreach (['output', 'config'] as $dir)
		@mkdir(__DIR__.'/mailbaby-api-samples/openapi-'.$dir, 0777, true);
	foreach (['client', 'documentation'] as $type) {
		foreach ($cats[$type] as $idx => $lang) {
			if (count($onlyLangs) > 0 && !in_array($lang, $onlyLangs))
				continue;
			echo "[$idx] OpenAPI {$type} Generator Language: $lang\n";
			if (!file_exists(__DIR__.'/mailbaby-api-samples/openapi-config/'.$lang.'.yaml'))
				passthru('npx @openapitools/openapi-generator-cli config-help -g '.$lang.' -f yamlsample > mailbaby-api-samples/openapi-config/'.$lang.'.yaml');
			$cmd = 'cd '.__DIR__.'/mailbaby-api-samples && rm -rf openapi-'.$type.'/'.$lang.';mkdir -p openapi-'.$type.'/'.$lang.';npx @openapitools/openapi-generator-cli generate -i '.$spec.' -g '.$lang.' -o openapi-'.$type.'/'.$lang.'/ '.(file_exists(__DIR__.'/mailbaby-api-samples/openapi-config/'.$lang.'.yaml') ? '-c openapi-config/'.$lang.'.yaml' : '').' 2>&1 | tee openapi-output/'.$type.'-'.$lang.'.txt;';
			$cmds[] = $cmd;
			//echo $cmd.PHP_EOL;
			passthru($cmd);
		}
	}
}
if ($buildSwagger === true) {
	echo "Grabbing the Swagger Generator jar\n";
	passthru('cd '.__DIR__.' && wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.25/swagger-codegen-cli-3.0.25.jar -O swagger-codegen-cli.jar');
	echo "Generating and parsing a list of Swagger Generator clients we can generate\n";
	$langs = explode(', ', trim(exec('cd '.__DIR__.' && java -jar swagger-codegen-cli.jar langs | cut -d \[ -f2-|cut -d\] -f1')));
	echo "Generating Swagger Generator samples\n";
	foreach (['output', 'options', 'config'] as $dir)
		@mkdir(__DIR__.'/mailbaby-api-samples/swagger-'.$dir, 0777, true);
	foreach ($langs as $idx => $lang) {
		if (count($onlyLangs) > 0 && !in_array($lang, $onlyLangs))
			continue;
		$type = (in_array($lang, $cats['documentation']) ? 'documentation' : 'client');
		echo "[$idx] Swagger {$type} Generator Language: $lang\n";
		if (!file_exists(__DIR__.'/mailbaby-api-samples/swagger-options/'.$lang.'.json'))
			passthru('curl -s https://generator.swagger.io/api/gen/clients/'.$lang.' | jq -M . > mailbaby-api-samples/swagger-options/'.$lang.'.json');
		$cmd = 'cd '.__DIR__.'/mailbaby-api-samples && rm -rf swagger-'.$type.'/'.$lang.';mkdir -p swagger-'.$type.'/'.$lang.';java -jar '.__DIR__.'/swagger-codegen-cli.jar generate -l '.$lang.' -i '.$spec.' -o swagger-'.$type.'/'.$lang.'/ '.(file_exists(__DIR__.'/mailbaby-api-samples/swagger-config/'.$lang.'.json') ? '-c swagger-config/'.$lang.'.json' : '').' 2>&1 | tee swagger-output/'.$type.'-'.$lang.'.txt;';
		$cmds[] = $cmd;
		//echo $cmd.PHP_EOL;
		passthru($cmd);
	}
	
}
echo "Committing updated samples\n";
passthru('cd '.__DIR__.'/mailbaby-api-samples && git add -A && git commit -a -m "Updated API samples" && git push --all');
echo "Cleaning up\n";
if ($buildOpenApi === true)
	passthru('cd '.__DIR__.' && rm -f openapitools.json');
if ($buildSwagger === true)
	passthru('cd '.__DIR__.' && rm -f swagger-codegen-cli.jar');
//passthru('cd '.__DIR__.' && rm -rf mailbaby-api-samples');
//echo implode(PHP_EOL, $cmds).PHP_EOL;
echo "done!\n";
