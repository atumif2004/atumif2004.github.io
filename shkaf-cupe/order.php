<?php
 /* Здесь проверяется существование переменных */
  if (isset($_POST['subject'])) {$subject = $_POST['subject'];} 
  if (isset($_POST['name'])) {$name = $_POST['name'];}  
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}  
  if (isset($_POST['email'])) {$email = $_POST['email'];} 
  if (isset($_POST['type'])) {$type = $_POST['type'];} 
  if (isset($_POST['width'])) {$width = $_POST['width'];} 
  if (isset($_POST['height'])) {$height = $_POST['height'];}    
  if (isset($_POST['depth'])) {$depth = $_POST['depth'];} 
  if (isset($_POST['decor'])) {$decor = $_POST['decor'];}   
  
  

/* Сюда впишите свою эл. почту */
 $address = "atumif@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тема: Заявка.\nФорма отправки: $subject\nИмя: $name\nТелефон: $phone\nE-mail: $email\nType: $type\nWidth: $width\nHeight: $height\nDepth: $depth\nDecor: $decor";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ c лендинга Изготовление шкафов-купе.'; //сабж
$email='Заказ <landing>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
?>

<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <title>Заявка принята</title>
  <style>
    html {
      box-sizing: border-box;
      line-height: 1;
      font-family: "Segoe UI", Arial, Helvetica, sans-serif;
      scroll-behavior: smooth;
      font-size: 16px;
    }

    @media all and (max-width: 38rem) {
      html {
        font-size: 14px;
      }
    }

    *, *:before, *:after {
      box-sizing: inherit;
      font-family: inherit;
    }

    body {
      margin: 0;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      color: rgba(0, 0, 0, .7);
      background-color: #eef1f3;
    }

    .button {
      display: inline-block;
      background: transparent linear-gradient(to bottom, rgb(13, 181, 57) 0%, rgb(0, 144, 67) 100%) repeat scroll 0 0;
      border: none;
      box-shadow: 0 2px 1px 0 #155a35;
      outline: none;
      padding: .75rem 1.5rem;
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      font-family: inherit;
      font-size: .75rem;
      border-radius: .25rem;
      cursor: pointer;
      box-sizing: border-box;
      text-decoration: none;
    }

    .button:active {
      transform: translateY(1px);
      box-shadow: 0 1px 1px 0 #155a35;
    }

    .thankyou {
      text-align: center;
      background: url(img/operator.png) 4rem bottom no-repeat, url(img/city.jpg) center bottom no-repeat #fff;
      background-size: auto, 100%;
      width: 100%;
      padding: 2rem 1rem;
      min-height: 100vh;
    }

    .thankyou h1 {
      font-weight: 500;
      font-size: 2.5rem;
      color: #0aa150;
      margin: 0 0 2rem;
    }

    .thankyou img {
      max-width: 100%;
      margin: 1rem 0;
    }

    .thankyou .button {
      margin-top: 1rem;
    }
  </style>
</head>
<body>

<div class="thankyou">
  <h1>Спасибо, заявка принята!</h1>
  <p>Оператор свяжется с вами в ближайшее время.</p>
  <img src="img/divider.png">
  <p>Если вы допустили ошибку, вернитесь на страницу заказа и оставьте заявку еще раз.</p>
  <a href="index.htm" class="button">Вернуться</a>
</div>


</body>
</html>