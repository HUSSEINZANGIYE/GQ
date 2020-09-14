
<?php 
include"info.php";
//CODED BY Geladiator
?>

<!DOCTYPE html>
<html lang="en">
    <head>
    <style>img[alt="www.000webhost.com"]{display:none;}</style>
    <meta charset="utf-8">
    <?php echo $name?>
	<meta name="Geladiator" content="width=device-width">
	<title>Geladiator</title>
	<link rel="stylesheet" href="data/css/style.css">
	<link rel="stylesheet" type="text/css" href="data/css/style2.css">
	</head>
	<div id="particles-js"></div>
	<body class="paypage" id="body" onload="bodyloaded()">
	    <div class="payform">
	    <div class="avatar">
	        <div class="avatarstoke">
	            <img src="data/img/logo.gif">
	            </div>
	            </div>
	            <div class="titleinfo" style="margin: 30px 0 0 0;"></div>
	            <a href="select.php" class="btn-2"><h3>ساخت درگاه</h3></a>
	            <h2 class="Success">Subscribe to Chanel to support us</h2>
	            <a id="showDialog" href="https://t.me/Geladiator<?php echo $chanel?>" class="btn-3">
		<h3>کانال ما</h3></a>
	            
	<!---javascript--->
		<script>
		(function() {
			var dialog = document.getElementById('Dialog');
			document.getElementById('showDialog').onclick = function() {
				dialog.show();
			};
			document.getElementById('closeDialog').onclick = function() {
				dialog.close();
			};})();</script>
			<script>
		(function() {
			var dialog = document.getElementById('Dialog2');
			document.getElementById('showDialog2').onclick = function() {
				dialog.show();
			};
			document.getElementById('closeDialog2').onclick = function() {
				dialog.close();
			};})();</script>
			</body>
			</html>
