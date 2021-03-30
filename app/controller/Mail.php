<?php
namespace app\controller;

use support\Request;
use support\Db;

class Mail
{
	public function index(Request $request)
	{
		$login = $request->header('x-api-login');
		$pass = $request->header('x-api-pass');
		$key = $request->header('x-api-key');
		if (is_null($login) || (is_null($pass) || is_null($key))) {
			return response('API key is missing or invalid', 401);
		}
		if (!is_null($pass)) {
			$name = Db::table('accounts')
				->where('account_lid', $login)
				->where('account_passwd', md5($pass))
				->get();
		}
		if (!is_null($key)) {
			$name = Db::table('accounts')
				->leftJoin('account_security', 'account_security.account_id','=','accounts.account_id')
				->where('account_lid', $login)
				->where('account_sec_type', 'api_key')
				->where('account_sec_data', $key)
				->get();
		}
		return response('hello webman');
	}

	public function view(Request $request)
	{
		return view('index/view', ['name' => 'webman']);
	}

	public function json(Request $request)
	{
		return json(['code' => 0, 'msg' => 'ok']);
	}

	public function file(Request $request)
	{
		$file = $request->file('upload');
		if ($file && $file->isValid()) {
			$file->move(public_path().'/files/myfile.'.$file->getUploadExtension());
			return json(['code' => 0, 'msg' => 'upload success']);
		}
		return json(['code' => 1, 'msg' => 'file not found']);
	}
}  
