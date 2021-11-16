<?php
namespace app\middleware;

use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;

class AccessControl implements MiddlewareInterface
{
	public function process(Request $request, callable $next) : Response
	{
		//$response = $request->method() == 'OPTIONS' ? response('') : $next($request);
		$response = $next($request);
		$response->withHeaders([
			'Accept' => '*',
			'Access-Control-Allow' => '*',
			'Access-Control-Allow-Origin' => '*',
			'Access-Control-Expose-Headers' => 'Content-Length,X-JSON',
			'Access-Control-Allow-Methods' => 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
			'Access-Control-Allow-Headers' => 'Content-Type,Authorization,Accept,Origin,Accept-Language,X-Authorization,X-Requested-With'
		]);

		return $response;
	}
}