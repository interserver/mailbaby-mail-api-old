<?php
echo "Grabbing the samples repo\n";
passthru('cd '.__DIR__.'; git clone git@github.com:interserver/mailbaby-api-samples.git; cp -f .git/hooks/commit-msg mailbaby-api-samples/.git/hooks');
echo "Generating a list of clients we can generate\n";
$out = `npx @openapitools/openapi-generator-cli list`;
echo "Parsing list\n";
preg_match_all('/^([^\s]+) generators:.*\n\n/msuU', $out, $matches);
$cats = [];
foreach ($matches[1] as $idx => $cat) {
	preg_match_all('/^\s+- (\S+)\s.*/muU', $matches[0][$idx], $catMatches);
	$cats[strtolower($cat)] = $catMatches[1];
}
echo "Generating samples\n";
@mkdir('mailbaby-api-samples/output', 0777, true);
foreach ($cats['client'] as $idx => $lang) {
	echo "[$idx] Language: $lang\n";
	@mkdir('mailbaby-api-samples/'.$lang, 0777, true);
	passthru('npx @openapitools/openapi-generator-cli generate -i public/openapi.yaml -g '.$lang.' -o mailbaby-api-samples/'.$lang.'/ 2>&1 | tee mailbaby-api-samples/output/'.$lang.'.txt');
}
echo "Committing updated samples and cleanign up\n";
passthru('cd '.__DIR__.'/mailbaby-api-samples && git add -A && git commit -a -m "Updated API samples" && cd '.__DIR__.' && rm -rf mailbaby-api-samples openapitools.json');
echo "done!\n";