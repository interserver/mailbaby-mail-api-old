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

	/**
	* returns a json response
	*
	* @param array $body array of data to pass
	* @param int $status status code
	* @return \support\Response
	*/
	public function jsonResponse($body, $status = 200) {
		return support\Response($status, ['Content-Type' => 'application/json'], json_encode($body, JSON_UNESCAPED_UNICODE));
	}

	/**
	* returns a json error response
	*
	* @param string $message the error details
	* @param int $status the error code
	* @return \support\Response
	*/
	public function jsonErrorResponse($message, $status = 200) {
		return \support\Response($status, ['Content-Type' => 'application/json'], json_encode(['code' => $status, 'message' => $message], JSON_UNESCAPED_UNICODE));
	}

	public function index(Request $request)
	{
		$accountInfo = $request->accountInfo;
		$orders = Db::table('mail')
			->where('mail_custid', $accountInfo->account_id)
			->get();
		$return = [];
		foreach ($orders as $order) {
			$row = [
				'id' => $order->mail_id,
				'status' => $order->mail_status,
				'username' => $order->mail_username,
			];
			if ($order->mail_comment != '')
				$row['comment'] = $order->mail_comment;
			$return[] = $row;
		}
		return json($return);
	}

	public function view(Request $request, $id)
	{
		$accountInfo = $request->accountInfo;
		if (!v::intVal()->validate($id))
			return response('The specified ID was invalid.', 400);
		$order = Db::table('mail')
			->where('mail_custid', $accountInfo->account_id)
			->where('mail_id', $id)
			->first();
		$return = [
			'id' => $order->mail_id,
			'status' => $order->mail_status,
			'username' => $order->mail_username,
			'password' => $this->getMailPassword($request, $id),
		];
		if ($order->mail_comment != '')
			$row['comment'] = $order->mail_comment;
		return json($return);
	}

    public function send(Request $request) {
        $accountInfo = $request->accountInfo;
        $id = $request->post('id');
        if (!is_null($id)) {
            if (!v::intVal()->validate($id))
                return $this->jsonErrorResponse('The specified ID was invalid.', 400);
            $order = Db::table('mail')
                ->where('mail_custid', $accountInfo->account_id)
                ->where('mail_id', $id)
                ->where('mail_status', 'active')
                ->first();
            if (is_null($order))
                return $this->jsonErrorResponse('The mail order with the specified ID was not found or not active.', 404);
        } else {
            $order = Db::table('mail')
                ->where('mail_custid', $accountInfo->account_id)
                ->where('mail_status', 'active')
                ->first();
            if (is_null($order))
                return $this->jsonErrorResponse('No active mail order was found.', 404);
            $id = $order->mail_id;
        }
        $sent = false;
        $from = $request->post('from');
        $email = $request->post('body');
        $subject = $request->post('subject');
        $isHtml = strip_tags($email) != $email;
        $who = $request->post('to');
        if (!is_array($who))
            $who = [$who];
        $username = (string)$order->mail_username;
        $password = (string)$this->getMailPassword($request, $id);
        $mailer = new PHPMailer(true);
        $mailer->CharSet = 'utf-8';
        $mailer->isSMTP();
        $mailer->Port = 25;
        $mailer->Host = 'relay.mailbaby.net';
        $mailer->SMTPAuth = true;
        $mailer->Username = $username;
        $mailer->Password = $password;
        $mailer->Subject = $subject;
        $mailer->isHTML($isHtml);
        try {
            $mailer->setFrom($from);
            $mailer->addReplyTo($from);
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


    public function advsend(Request $request) {
        $accountInfo = $request->accountInfo;
        $data = json_decode($request->rawBody(), true);
        $id = isset($data['id']) ? $data['id'] : null;
        $id = $request->post('id');
        if (!is_null($id)) {
            if (!v::intVal()->validate($id))
                return $this->jsonErrorResponse('The specified ID was invalid.', 400);
            $order = Db::table('mail')
                ->where('mail_custid', $accountInfo->account_id)
                ->where('mail_id', $id)
                ->where('mail_status', 'active')
                ->first();
            if (is_null($order))
                return $this->jsonErrorResponse('The mail order with the specified ID was not found or not active.', 404);
        } else {
            $order = Db::table('mail')
                ->where('mail_custid', $accountInfo->account_id)
                ->where('mail_status', 'active')
                ->first();
            if (is_null($order))
                return $this->jsonErrorResponse('No active mail order was found.', 404);
            $id = $order->mail_id;
        }
        foreach (['from', 'to', 'subject', 'body'] as $field)
            if (!isset($data[$field]))
                return $this->jsonErrorResponse('Missing the required "'.$field.'" field', 404);


        $sent = false;
        $mailer = new PHPMailer(true);
        $mailer->CharSet = 'utf-8';
        $mailer->isSMTP();
        $mailer->Port = 25;
        $mailer->Host = 'relay.mailbaby.net';
        $mailer->SMTPAuth = true;
        $mailer->Username = (string)$order->mail_username;
        $mailer->Password = (string)$this->getMailPassword($request, $id);
        $mailer->Subject = $data['subject'];
        $mailer->isHTML(strip_tags($data['body']) != $data['body']);
        try {
            $mailer->setFrom($data['from']['email'], isset($data['from']['name']) ? $data['from']['name'] : '');
            foreach ($data['to'] as $contact)
                $mailer->addAddress($contact['email'], isset($contact['name']) ? $contact['name'] : '');
            foreach (['ReplyTo', 'CC', 'BCC'] as $type) {
                if (isset($data[strtolower($type)]))
                    foreach ($data[strtolower($type)] as $contact) {
                        $call = 'add'.$type;
                        $mailer->$call($contact['email'], isset($contact['name']) ? $contact['name'] : '');
                    }
            }
            $mailer->Body = $data['body'];
            $mailer->preSend();
            if (!$mailer->send()) {
                return json(['status' => 'error', 'text' => $mailer->ErrorInfo]);
            }
            return json(['status' =>'ok', 'text' => 'ok']);
        } catch (PHPMailer\PHPMailer\Exception $e) {
            return json(['status' => 'error', 'text' => $mailer->ErrorInfo]);
        }

    }

	public function log(Request $request) {
		$accountInfo = $request->accountInfo;
		$id = $request->post('id');
		if (!is_null($id)) {
			if (!v::intVal()->validate($id))
				return $this->jsonErrorResponse('The specified ID was invalid.', 400);
			$order = Db::table('mail')
				->where('mail_custid', $accountInfo->account_id)
				->where('mail_id', $id)
				->where('mail_status', 'active')
				->first();
			if (is_null($order))
				return $this->jsonErrorResponse('The mail order with the specified ID was not found or not active.', 404);
		} else {
			$order = Db::table('mail')
				->where('mail_custid', $accountInfo->account_id)
				->where('mail_status', 'active')
				->first();
			if (is_null($order))
				return $this->jsonErrorResponse('No active mail order was found.', 404);
			$id = $order->mail_id;
		}
	}

	public function viewtest(Request $request)
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

	/**
	* returns the current password for a mail account
	*
	* @param Request $request
	* @param int $id
	* @return null|string the current password or null on no matching password
	*/
	private function getMailPassword(Request $request, $id) {
		$password = Db::table('history_log')
			->where('history_type', 'password')
			->where('history_section', 'mail')
			->where('history_creator', $request->accountInfo->account_id)
			->where('history_new_value', $id)
			->orderBy('history_timestamp', 'desc')
			->first('history_old_value');
		return $password->history_old_value;
	}
}
