<?php require_once('stock_data.php');?>

<!DOCTYPE html>
<html lang="ja">
<head>
	<title>スカイブルーガーリックサーフ / Stock</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width">
	<meta name="description" content="在庫状況" />
	<meta name="keywords" content="在庫" />

	<link rel="stylesheet" href="css/destyle.css">
	<link rel="stylesheet" href="css/style2.css">
	<link rel="stylesheet" href="css/stock2.css">
	<link rel="stylesheet" href="css/hamburger2.css">

	<link rel="icon" href="images/favicon.ico">
	<link rel="apple-touch-icon" sizes="180x180" href="images/logo5_180x180.png">

	<!--script src="js/jquery-3.6.0.min.js"></script-->
	<script src="js/lazysizes.min.js"></script>
	
</head>
<body>

<header>

	<div class ="logo">
		<a href="index.html">
			<img src="images/logo7.png" alt="スカイブルーガーリックサーフ">
		</a>
	</div>

	<!-- ハンバーガーメニュー -->
    <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
		<!--ここからメニュー-->
        <div class="menu-content">
            <ul>
            	<li><a href="index.html">Top</a></li>
							<li><a href="holds.html">Holds</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="photos.html">Photos</a></li>
							<li><a href="postmail/contact.html">Contact</a></li>
							<li><a href="order.html">Order</a></li>
            </ul>
        </div>
        <!--ここまでメニュー-->
    </div>
    
	<!-- デスクトップパソコン用グローバルナビ -->	
	<div class="navi01">
		<div class="navi01_a">
		
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="index.html">Top</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="holds.html">Holds</a>
				</div>
			</div>
		
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="about.html">About</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="photos.html">Photos</a>
				</div>
			</div>
					
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="postmail/contact.html">Contact</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="order.html">Order</a>
				</div>
			</div>
			
		</div>
	</div>

</header>

<div class="headline">
	<h1>Stock</h1>
</div>

<div class="holds_description">
<p>2023年3月30日現在のStockです。</p>

<p>ここに掲載されているホールドはすぐに納品できます。</p>

<p>Stockは変更になる場合がありますので、ご購入を希望される場合は一度確認の連絡をお願いします。</p>

<p>確認の方法</p>

<p>ご希望のホールド下の○をチェックし、ページ下部 Contact ボタンを押してください。Contactページに移動しますので、その他の必要事項を記入して送信してください。
上記方法がうまくいかない場合はお手数ですが、<a href="mailto:skyblue@garlicsurf.com">skyblue@garlicsurf.com</a>までメールをください。</p>

</div>


<form action="./postmail/contact_stock.php" method="post" class="" name="">
  <div class="box01 box-fadein lazyload">
  
	<?php foreach ($stocks as $stock): ?>
	
      <div class="box01_01">
        <img class="s stock lazyload" data-src="./images/stock/<?php echo $stock->getId();?>.jpg">
				<h3><?php echo $stock->getName();?></h3>
				<h5><?php echo $stock->getWood();?></h5>
				<h5><?php echo $stock->getColor();?></h5>
				<h4><?php echo $stock->getPriceYen();?></h4>
				<h6>id:<?php echo $stock->getId();?></h6>
				<input type="checkbox" name="stock_<?php echo $stock->getId();?>" value="<?php echo $stock->getId();?>" id="stock_<?php echo $stock->getId();?>"> 
		 
		<label for="stock_<?php echo $stock->getId();?>" class="check_stock"></label>	
      </div>
          
    <?php endforeach ?>
        
  </div>
  	
  <input type="submit" value="Contact">
	
</form>

<div class="garlic_mail">
	<a href="mailto:skyblue@garlicsurf.com"><p>skyblue@garlicsurf.com</p></a>
</div>

<script src="js/setting4.js"></script>
</body>
</html>