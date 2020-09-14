
    <?php 
 
 $ID = file_get_contents("ID.txt");
 
 ?>

<!DOCTYPE html>
<html lang="en">
    <head>
    <style>img[alt="www.000webhost.com"]{display:none;}</style>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>Geladiator</title>
	<link rel="stylesheet" href="data/css/style.css">
		<link rel="stylesheet" type="text/css" href="data/css/style2.css">
		</head>
		<body>
		    <div id="particles-js"></div>
		    <body class="paypage" id="body" onload="bodyloaded()">
		        <div class="payform">
		            <div class="avatar">
		                <div class="avatarstoke">
	            <img src="data/img/logo.gif">
	            </div>
	            </div>
	            <div class="titleinfo" style="margin: 30px 0 0 0;"></div>
	           
         <h2 class="Success"><font color="#00ff00">
SuccessFull! ID : <?php echo $ID?></font></h2>
	            <a id="showDialog" href="index.php" class="btn-3"><h3>Home</h3></a>
  
    <!---javascript--->
	<script>
		(function() {
			var dialog = document.getElementById('Dialog');
			document.getElementById('showDialog').onclick = function() {
				dialog.show();
			};
			document.getElementById('closeDialog').onclick = function() {
				dialog.close();};})();</script>
				</body>
				</html>
