<?php
  foreach ($_POST as $post):
    if($post === reset($_POST)){
      $stock_id = htmlspecialchars($post, ENT_QUOTES);
    }
    else{
      $stock_id = $stock_id.' '.htmlspecialchars($post, ENT_QUOTES);
    }
  endforeach
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$_POST読み込み</title>
</head>
<body>

<?php 

  echo count($_POST);
  echo "<br>";

  $n = count($_POST);
  $m = $n / 6;

  echo $m;
  echo "<br><br>";

  for ($i = 0; $i < $m; $i++){
    
    echo 'Size: '.$_POST['size_'.$i].'<br>';
    echo 'Shape: '.$_POST['shape_'.$i].'<br>';
    echo 'Color: '.$_POST['color_'.$i].'<br>';
    echo 'Wood: '.$_POST['wood_'.$i].'<br>';
    echo 'Option: '.$_POST['option_'.$i].'<br>';
    echo 'unit_price: '.$_POST['unit_price_'.$i].'<br>';
    echo "<br>";
  }
  
  echo "<br><br>";
     
foreach ($_POST as $post):
  $val = htmlspecialchars($post, ENT_QUOTES);
    echo $val;

    echo "<br>";
    endforeach
   
?>



</body>
</html>