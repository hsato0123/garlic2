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

	<script src="js/jquery-3.6.0.min.js"></script>
	<script src="js/lazysizes.min.js"></script>
	<script src="js/setting3.js"></script>
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
					<a href="#">Holds</a>
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
			
		</div>
	</div>

</header>

<div class="headline">
	<h1>Stock</h1>
</div>

<div class="holds_description">
<p>2021年12月20日現在の在庫状況です。</p>

<p>在庫の状況は変更になる場合がありますので、ご購入を希望される場合は一度確認の連絡をお願いします。</p>

<p>確認の方法：</p>

<p>ステップ１：</p>
<p>希望ホールドの○をチェックし、ページ下部 Contact ボタンを押してください。

Contactページに移動しますので、その他の必要事項を記入して送信してください。

上記方法がうまくいかない場合はお手数ですが、メールで連絡ください。</p>
</div>



<form action="./postmail/contact_stock.php" method="post" class="" name="">

  <div class="box01 box-fadein lazyload">
	<div class="box01_01">
		<img class="s stock lazyload" data-src="./images/stock/<?php echo $stock_10261->getId();?>.jpg">
		<h3><?php echo $stock_10261->getName();?></h3>
		<h5><?php echo $stock_10261->getWood();?></h5>
		<h5><?php echo $stock_10261->getColor();?></h5>
		<h4><?php echo $stock_10261->getPrice();?></h4>
		<h6>id:<?php echo $stock_10261->getId();?></h6>
		<input type="checkbox" name="stock_<?php echo $stock_10261->getId();?>"
		 value="<?php echo $stock_10261->getId();?>" id="stock_<?php echo $stock_10261->getId();?>">
		<label for="stock_<?php echo $stock_10261->getId();?>" class="check_stock"></label>
	</div>
	
	<div class="box01_01">
		<img class="s stock lazyload" data-src="./images/stock/10275.jpg">
		<h3>30XXS</h3>
		<h5>ブビンガ</h5>
		<h5>ホワイト</h5>
		<h4>6,400円</h4>
		<h6>id:10275</h6>
		<input type="checkbox" name="stock_10275" value="10275" id="stock_10275">
		<label for="stock_10275" class="check_stock"></label>

	</div>
	

	<?php foreach ($stocks as $stock): ?>
	
      <div class="box01_01">
        <img class="s stock lazyload" data-src="./images/stock/<?php echo $stock->getId();?>.jpg">
		<h3><?php echo $stock->getName();?></h3>
		<h5><?php echo $stock->getWood();?></h5>
		<h5><?php echo $stock->getColor();?></h5>
		<h4><?php echo $stock->getPrice();?></h4>
		<h6>id:<?php echo $stock->getId();?></h6>
		<input type="checkbox" name="stock_<?php echo $stock->getId();?>"
		 value="<?php echo $stock->getId();?>" id="stock_<?php echo $stock->getId();?>">
		<label for="stock_<?php echo $stock->getId();?>" class="check_stock"></label>	
      </div>
          
    <?php endforeach ?>
        
  </div>
  	
  <input type="submit" value="Contact">
	
</form>



<div class="garlic_mail">
	<a href="mailto:skyblue@garlicsurf.com"><p>skyblue@garlicsurf.com</p></a>
</div>

</body>
</html>