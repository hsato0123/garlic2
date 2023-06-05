<?php	
	header('X-FRAME-OPTIONS:DENY');
	function h($str){
		return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
	}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
	<title>スカイブルーガーリックサーフ / Order / 必要事項の入力</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width">
	<meta name="description" content="オーダー必要事項の入力" />
	<meta name="keywords" content="クライミングホールド" />
	
	<link rel="stylesheet" href="../css/destyle.css">
	<link rel="stylesheet" href="../css/style2.css">
	<link rel="stylesheet" href="../css/order.css">
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
							<li><a href="#">Contact</a></li>
							<li><a href="../stock.php">Stock</a></li>
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
					<a href="#">Contact</a>
				</div>
			</div>
			
			<div class="navi01_1">
				<div class="navi01_1_1">
					<a href="../stock.php">Stock</a>
				</div>
			</div>
			
		</div>
	</div>
</header>

<div class="headline">
	<h1>Order</h1>
</div>

<div class="box02">
	<form id="form_area2" action="./postmail_order.cgi" method="post">
	<input type="hidden" name="need" value="name email ">
	<input type="hidden" name="sort" value="order name email gym メッセージ">
	
	<p>下の必要事項を入力の上、次へ（確認画面）を押してください。</p>

	<?php 
		$ITEM_IN_UNIT = 6;
		$num_of_units = count($_POST) / $ITEM_IN_UNIT; //ホールド数

		//オーダーページで削除するとユニットNoに欠番が発生するための対策
		$_POST_last_keys = explode('_',array_key_last($_POST));//最後のユニット番号
		$last_key_num = intval($_POST_last_keys[2]); //unit_price_#
	
		$total_price = 0; 
		echo 'テスト1<br>';
		//ユニットNoの欠番を詰める + $_POSTのサニタイズ
		$i = 0;
		$j = 0;
		while($i <= $last_key_num):
			if(!isset($_POST['shape_'.$i])):
				$i++;
				continue;
			endif;
			$posts[$j]['shape'] = h($_POST['shape_'.$i]);
			$posts[$j]['size'] = h($_POST['size_'.$i]);
			$posts[$j]['color'] = h($_POST['color_'.$i]);
			$posts[$j]['option'] = h($_POST['option_'.$i]);
			$posts[$j]['wood'] = h($_POST['wood_'.$i]);
			$posts[$j]['price'] = h($_POST['unit_price_'.$i]);
			$total_price += h($_POST['unit_price_'.$i]);
			$i++;
			$j++;
		endwhile;

	?>
	
	<input type ="hidden" name="order" value="<?php for ($i = 0; $i < $num_of_units; $i++):?>
	<?php echo strval($i+1).'個目'; ?>
	<?php echo 'Shape: '.$posts[$i]['shape']; ?>
	<?php echo 'Size: '.$posts[$i]['size']; ?>
	<?php	echo 'Color: '.$posts[$i]['color']; ?>
	<?php	echo 'Option: '.$posts[$i]['option']; ?>
	<?php	echo 'Wood: '.$posts[$i]['wood'];  ?>
	<?php	echo '&yen;'.number_format($posts[$i]['price']); ?>

	<?php endfor ?>
	<?php echo 'ホールド数: '.$num_of_units.'個'; ?>
	<?php echo '合計: '.'&yen;'.number_format($total_price); ?>
	">

	
	<h5>お名前</h5>
	<input type="text" name="name" size="40" required>
	
	<h5>ジム名</h5>
	<input type="text" name="gym" size="">
	
	<h5>メールアドレス</h5>
	<input type="text" name="email" size="" required>
	
	<h5>その他お問合せ</h5>
	<textarea name="メッセージ" rows="10" cols="10"></textarea>

	</form>

	<button type="submit" form="form_area2" id="next_btn2" class="order_sheet_btn_base next_btn_confirm">次へ（確認画面）</button>

</div>

<script src="../js/setting4.js"></script>

</body>
</html>
