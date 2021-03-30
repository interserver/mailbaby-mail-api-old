<?php
namespace app\middleware;

use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;
use support\Db;
//use support\bootstrap\Log;

class AuthCheck implements MiddlewareInterface
{
	public function process(Request $request, callable $next) : Response
	{
		$GLOBALS['accountInfo'] = null;
		$login = $request->header('x-api-login');
		$pass = $request->header('x-api-pass');
		$key = $request->header('x-api-key');
		if (is_null($login) || (is_null($pass) && is_null($key)))
			return response('API key is missing or invalid', 401);
		if (!is_null($pass))
			$accountInfo = Db::table('accounts')
				->where('account_lid', $login)
				->where('account_passwd', md5($pass))
				->first();
		elseif (!is_null($key))
			$accountInfo = Db::table('accounts')
				->leftJoin('account_security', 'account_security.account_id','=','accounts.account_id')
				->where('account_lid', $login)
				->where('account_sec_type', 'api_key')
				->where('account_sec_data', $key)
				->first();
		if (is_null($accountInfo))
			return response('API key is missing or invalid', 401);
		$GLOBALS['accountInfo'] = $accountInfo;			
		//Log::info('auth check response:'.var_export($accountInfo,true));
		return $next($request);
	}
}
