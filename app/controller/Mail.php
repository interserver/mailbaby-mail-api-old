<?php
namespace app\controller;

use support\Request;
use support\Db;
use support\bootstrap\Log;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use Respect\Validation\Validator as v;

class Mail
{
	public function index(Request $request)
	{
		$accountInfo = $GLOBALS['accountInfo'];
		$orders = Db::table('mail')
			->where('mail_custid', $accountInfo->account_id)
			->get();
		$return = [];
		foreach ($orders as $order)
			$return[] = [
				'id' => $order->mail_id,
				'status' => $order->mail_status,
			];
		return json($return);
	}
	
	public function send(Request $request, $id) {
		$accountInfo = $GLOBALS['accountInfo'];
		if (!v::intVal()->validate($id))
			return response('The specified ID was invalid.', 400);
		$order = Db::table('mail')
			->where('mail_custid', $accountInfo->account_id)
			->where('mail_id', $id)
			->where('mail_status', 'active')
			->get();
		if (is_null($order))
			return response('The mail order with the specified ID was not found or not active.', 404);
		$password = Db::table('history_log')
			->where('history_type', 'password')
			->where('history_section', 'mail')
			->where('history_new_value', $id)
			->where('mail_status', 'active')
			->orderBy('history_timestamp', 'desc')
			->first('history_old_value');
			
		$sent = false;
		$from = $request->post('from');
		$fromName = $request->post('fromName', '');
		$email = $request->post('email');
		$subject = $request->post('subject');
		$isHtml = strip_tags($email) != $email;
		$who = $request->post('who');
		if (!is_array($who))
			$who = [$who];
		$mailer = new PHPMailer(true);
		$mailer->CharSet = 'utf-8';
		$mailer->isSMTP();
		$mailer->Port = 25;
		$mailer->Host = SMTP_HOST;
		$mailer->SMTPAuth = true;
		$mailer->Username = $order->mail_username;
		$mailer->Password = $password;
		$mailer->Subject = $subject;
		$mailer->isHTML($isHtml);
		try {
			$mailer->setFrom($from, $fromName);
			$mailer->addReplyTo($from, $fromName);
			foreach ($who as $to)
				$mailer->addAddress($to);
			$mailer->Body = $email;
			$mailer->preSend();
			if (!$mailer->send()) {                                                 
				return json(['status' => 'error', 'text' => $mailer->ErrorInfo]);
			}
			return json(['status' =>'ok', 'text' => 'ok']);
		} catch (PHPMailer\PHPMailer\Exception $e) {
			return json(['status' => 'error', 'text' => $mailer->ErrorInfo]);
		}
		
	}

	public function log(Request $request, $id) {
		$accountInfo = $GLOBALS['accountInfo'];
		$order = Db::table('mail')
			->where('mail_custid', $accountInfo->account_id)
			->where('mail_id', $id)
			->where('mail_status', 'active')
			->get();
		if (is_null($order))
			return response('The mail order with the specified ID was not found or not active.', 404);
		
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
