<?php
$out = `npx @openapitools/openapi-generator-cli list`;
preg_match_all('/^([^\s]+) generators:.*\n\n/msuU', $out, $matches);
$cats = [];
foreach ($matches[1] as $idx => $cat) {
	preg_match_all('/^\s+- (\S+)\s.*/muU', $matches[0][$idx], $catMatches);
	$cats[strtolower($cat)] = $catMatches[1];
}
foreach ($cats['client'] as $idx => $lang) {
	echo "[$idx] Language: $lang\n";
	mkdir('samples/'.$lang, true);
	passthru('npx @openapitools/openapi-generator-cli generate -i public/openapi.yaml -g '.$lang.' -o samples/'.$lang.'/');
}
unlink('openapitools.json');
