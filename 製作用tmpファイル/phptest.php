<?php	
	// header('X-FRAME-OPTIONS:DENY');
	// function h($str){
	// 	return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
	// }
?>

<?php 
		$ITEM_IN_UNIT = 6;
		$num_of_units = count($_POST) / $ITEM_IN_UNIT; //ホールド数

		// オーダーページで削除するとユニットNoに欠番が発生するための対策
		// $_POST_last_keys = explode('_',array_key_last($_POST));//最後のユニット番号
		$last_key_num = intval($_POST_last_keys[2]); //unit_price_#
	
		$total_price = 0; 
		echo 'テスト1<br>';
		//ユニットNoの欠番を詰める + $_POSTのサニタイズ
		$i = 0;
		$j = 0;
		// while($i <= $last_key_num):
		// 	if(!isset($_POST['shape_'.$i])):
		// 		$i++;
		// 		continue;
		// 	endif;
		// 	$posts[$j]['shape'] = h($_POST['shape_'.$i]);
		// 	$posts[$j]['size'] = h($_POST['size_'.$i]);
		// 	$posts[$j]['color'] = h($_POST['color_'.$i]);
		// 	$posts[$j]['option'] = h($_POST['option_'.$i]);
		// 	$posts[$j]['wood'] = h($_POST['wood_'.$i]);
		// 	$posts[$j]['price'] = h($_POST['unit_price_'.$i]);
		// 	$total_price += h($_POST['unit_price_'.$i]);
		// 	$i++;
		// 	$j++;
		// endwhile;

	?>