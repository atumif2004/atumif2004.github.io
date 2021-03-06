<?php
//ini_set('display_errors', 'On');
//require_once('swiftmailer/swift_required.php');
//require_once('idn.php');

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	try {

		$name = trim($_REQUEST['name']);
		$phone = trim($_REQUEST['phone']);
		$email = trim($_REQUEST['email']);
		
		$site = $_SERVER['HTTP_HOST'];
		
		if($phone != '') {
			
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
			$message .= '</table>';	

			$headers  = "MIME-Version: 1.0\r\n";
			$headers .= "Content-type: text/html; charset=utf-8\r\n";
			$headers .= "From: " . implode(',', $from) . "\r\n";
			
			$result = mail(implode(',', $to), $subject, $message, $headers);
			
			if($result) {
				header('Location: thanks.html');
			}
			else {
				echo '<div>Ошибка при отправке заказа! Попробуйте позже.</div>';
			}
		}
	}
	catch(Exception $e) {
		echo '<div>Ошибка при отправке заказа! Попробуйте позже.</div>';
	}
}