<?php
ob_start();


$res['FormResponse'] = array();

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	try {

		$name = trim($_REQUEST['name']);
		$phone = trim($_REQUEST['phone']);
		$email = trim($_REQUEST['email']);
		$address = trim($_REQUEST['address']);
		$tree = trim($_REQUEST['tree']);
		$height = trim($_REQUEST['height']);
		
		$site = $_SERVER['HTTP_HOST'];
		
		$from = array('noreply@' . $site);
		$to = file(__DIR__ . '/email.cnf');
		$to = array_map('trim', $to);
		$subject = 'Новый заказ с сайта ' . $site;
		$message = 'Поступил новый заказ с сайта ' . $site . ':
			<table>
				<tr>
					<td><b>Дата:</b></td>
					<td>' . date('d.m.Y H:i') . '</td>
				</tr>';
		if($name != '') {
			$message .= '<tr>
				<td><b>Имя:</b></td>
				<td>' . $name . '</td>
			</tr>';
		}
		if($phone != '') {
			$message .= '<tr>
				<td><b>Телефон:</b></td>
				<td>' . $phone . '</td>
			</tr>';
		}
		if($email != '') {
			$message .= '<tr>
				<td><b>E-mail:</b></td>
				<td>' . $email . '</td>
			</tr>';
		}
		if($address != '') {
			$message .= '<tr>
				<td><b>Адрес:</b></td>
				<td>' . $address . '</td>
			</tr>';
		}
		if($tree != '') {
			$message .= '<tr>
				<td><b>Елка:</b></td>
				<td>' . $tree . '</td>
			</tr>';
		}
		if($height != '') {
			$message .= '<tr>
				<td><b>Высота:</b></td>
				<td>' . $height . '</td>
			</tr>';
		}
		$message .= '</table>';	

		$headers  = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: " . implode(',', $from) . "\r\n";
		
		$result = mail(implode(',', $to), $subject, $message, $headers);
		
		if($result) {
			$res['FormResponse']['success'] = true;
			$res['FormResponse']['redirect'] = 'thanks.html';
		}
		else {
			$res['FormResponse']['success'] = false;
		}
	}
	catch(Exception $e) {
		$res['FormResponse']['success'] = false;
	}
}

ob_end_clean();

echo json_encode($res);