<?php
namespace app\controller;

use support\Request;
use support\Db;
use support\bootstrap\Log;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

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
		$order = Db::table('mail')
			->where('mail_custid', $accountInfo->account_id)
			->where('mail_id', $id)
			->where('mail_status', 'active')
			->get();
		if (is_null($order))
			return response('The mail order with the specified ID was not found or not active.', 404);
		$sent = false;
		$from = $request->post('from');
		$fromName = $request->post('fromName', '');
		$email = $request->post('email');
		$subject = $request->post('subject');
		$isHtml = strip_tags($email) != $email;
		if (!is_array($who))
			$who = [$who];
		$mailer = new PHPMailer(true);
		$mailer->CharSet = 'utf-8';
		$mailer->isSMTP();
		$mailer->Port = 25;
		$mailer->Host = SMTP_HOST;
		$mailer->SMTPAuth = true;
		$mailer->Username = $order->mail_username;
		$mailer->Password = SMTP_PASS;
		$mailer->Subject = $subject;
		$mailer->isHTML($isHtml);
		try {
			$mailer->setFrom($from, $fromName);
			$mailer->addReplyTo($from, $fromName);
			foreach ($who as $to)
				$mailer->addAddress($to);
			$mailer->Body = $email;
			$mailer->preSend();
			if ($sent == false) {		
				if (!$mailer->send()) {                                                 
					error_log('Mailer Error: '.$mailer->ErrorInfo);
					return false;
				}
			}
		} catch (PHPMailer\PHPMailer\Exception $e) {
			return json(['status' => 'error', 'text' => $mailer->ErrorInfo]);
		}
		
	}

	public function log(Request $request, $id) {
		
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
