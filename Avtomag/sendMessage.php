
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>С вами свяжутся</title>
<meta name="generator">
<style type="text/css">
body
{
   background: #22BFF7 url(img/zakaz.jpg) top -70% center no-repeat;
}
</style>
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
</body>
</html>






<?php

if(isset($_POST['submit'])){
$to = "AvtoZapchacti16@yandex.ru";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$first_name = $_POST['first_name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='http://zal-zap.mcdir.ru'>Вернуться на сайт.</a>";

}

?>


<?php
 /* Здесь проверяется существование переменных */
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['name'])) {$name = $_POST['name'];}
  if (isset($_POST['email'])) {$email = $_POST['email'];}
  if (isset($_POST['type'])) {$type = $_POST['type'];}

/* Сюда впишите свою эл. почту */
 $address = "AvtoZapchacti16@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тема: Заказ!\nТелефон: $phone\nИмя: $name\nE-mail: $email\nТариф: $type";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ с сайта'; //сабж
$email='<yourdomen.ru>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>





<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://zapchastizalesni.ru");}
window.setTimeout("changeurl();",3000);
</script>