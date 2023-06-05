<?php	require_once('../stock_data.php');?>

<!DOCTYPE html>
<html lang="ja">
<head>
	<title>スカイブルーガーリックサーフ / Contact Stock</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width">
	<meta name="description" content="お問い合わせフォーム" />
	<meta name="keywords" content="クライミングホールド" />
	
	<link rel="stylesheet" href="../css/destyle.css">
	<link rel="stylesheet" href="../css/style2.css">
	<link rel="stylesheet" href="../css/hamburger2.css">

	<link rel="icon" href="../images/favicon.ico">
	<link rel="apple-touch-icon" sizes="180x180" href="../images/logo5_180x180.png">
	
</head>
<body>

<header>

	<div class ="logo">
		<a href="../index.html">
			<img src="../images/logo7.png" alt="スカイブルーガーリックサーフ">
		</a>
	</div>

	<!-- ハンバーガーメニュー -->
    <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
		<!--ここからメニュー-->
        <div class="menu-content">
            <ul>
            	<li><a href="../index.html">Top</a></li>
            	<li><a href="../holds.html">Holds</a></li>
							<li><a href="../about.html">About</a></li>
							<li><a href="../photos.html">Photos</a></li>
							<li><a href="contact.html">Contact</a></li>
							<li><a href="../order.html">Order</a></li>
            </ul>
        </div>
        <!--ここまでメニュー-->
    </div>
    
	<!-- デスクトップパソコン用グローバルナビ -->	
	<div class="navi01">
		<div class="navi01_a">
		
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="../index.html">Top</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="../holds.html">Holds</a>
				</div>
			</div>
		
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="../about.html">About</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="../photos.html">Photos</a>
				</div>
			</div>
					
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="contact.html">Contact</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="../order.html">Order</a>
				</div>
			</div>
			
		</div>
	</div>
</header>

<div class="headline">$
	<h1>Stock - Contact</h1>
</div>

<div class="box02">
	<form action="./postmail_stock.cgi" method="post">
	<input type="hidden" name="need" value="name email ">
	<input type="hidden" name="sort" value="order name email gym メッセージ">
	
	<p>オーダーの内容を表示しています。問題なければ下記事項を記入の上送信してください</p>
	<h5>オーダー内容</h5>
	<?php 
		$total_price = 0;
		$orders = array();
	
		foreach($_POST as $post){
			$key = htmlspecialchars($post, ENT_QUOTES, 'UTF-8');
			$id = $stocks[$key]->getId();
			$name = $stocks[$key]->getName();
			$wood = $stocks[$key]->getWood();
			$color = $stocks[$key]->getColor();
			$price  = $stocks[$key]->getPriceYen();
			$total_price += $stocks[$key]->getPrice();
			$item = $name.' '.$wood.' '.$color.' '.$price;
			echo '<p>'.$item.'</p>';
			array_push($orders, $item);
		}

		echo '<p class="stock_contact_total_price">合計：'.number_format($total_price).'円</p>';
		array_push($orders, '合計：'.number_format($total_price).'円');

	?>
	<input type ="hidden" name="order" value="<?php foreach($orders as $order){echo $order.'&#13;';}?>">
	<h5>お名前</h5>
	<input type="text" name="name" size="40">
	
	<h5>ジム名</h5>
	<input type="text" name="gym" size="">
	
	<h5>メールアドレス</h5>
	<input type="text" name="email" size="">
	
	<h5>お問合せ内容</h5>
	<textarea name="メッセージ" rows="10" cols="40"></textarea>

	<input type="submit" value="送信">

	</form>

</div>

<script src="../js/setting4.js"></script>

</body>
</html>
