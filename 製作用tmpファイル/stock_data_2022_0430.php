<?php

class Stock {

  private $id;
  private $shape;
  private $size;
  private $option;
  private $wood;
  private $color;
  private $price;

  public function __construct($id, $shape, $option, $size, $wood, $color, $price) {
    $this->id = $id;
    $this->shape = $shape;
    $this->option = $option;
    $this->size = $size;
    $this->wood = $wood;
    $this->color = $color;
    $this->price = $price;
  }
   
  public function getId(){
    return $this->id;
   } 
    
  public function getShape(){
    return $this->shape;
   }
   
  public function getOption(){
    return $this->option;
   }
   
  public function getSize(){
    return $this->size;
   }
   
  //shape + option + size
  public function getName(){
    return $this->shape.$this->option.$this->size;
   }
   
  public function getWood(){
    return $this->wood;
   }
   
  public function getColor(){
    return $this->color;
   }
   
  public function getPriceYen(){
    return number_format($this->price).'円';
   }

    public function getPrice(){
    return $this->price;
   }

}


$stock_10261 = new Stock('10261','22.5','','XXS','アメリカンチェリー','ホワイト',6400);
$stock_10275 = new Stock('10275','30','','XXS','ブビンガ','ホワイト',6400);
$stock_10278 = new Stock('10278','36','','XXS','ゼブラウッド（板目）','ホワイト',6400);
$stock_10339 = new Stock('10339','36','','XXS','ゼブラウッド（杢目）','ブルー',6400);
$stock_10292 = new Stock('10292','45','','XXS','ホワイトオーク','ホワイト',6400);
$stock_10357 = new Stock('10357','45','','XXS','桐','ブルー',6400);
$stock_10291 = new Stock('10291','45','R','XXS','黒檀','ホワイト',8000);
$stock_10362 = new Stock('10362','22.5','','XS','ホワイトオーク','ブルー',7200);
$stock_10321 = new Stock('10321','30','','XS','マホガニー','ホワイト',7200);
$stock_10346 = new Stock('10346','30','','XS','フォックステイル','ホワイト',7200);
$stock_10318 = new Stock('10318','36','R','XS','フォックステイル','ホワイト',9000);
$stock_10350 = new Stock('10350','60','','XS','ゼブラウッド（柾目）','ブルー',7200);
$stock_10351 = new Stock('10351','60','','XS','ゼブラウッド（柾目）','ブルー',7200);
$stock_10352 = new Stock('10352','60','','XS','ゼブラウッド（柾目）','ブルー',7200);
$stock_10254 = new Stock('10254','22.5','','S','桐','ブルー',20000);
$stock_10255 = new Stock('10255','30','','S','ホワイトオーク','ブルー',20000);
$stock_10244 = new Stock('10244','36','','S','ゼブラウッド（柾目）','ブルー',20000);
$stock_10241 = new Stock('10241','45','','S','ブナ','ブルー',20000);
$stock_10245 = new Stock('10245','60','','S','ブビンガ','ブルー',20000);
$stock_10223 = new Stock('10223','30','','L','桐','ブルー',50000);
$stock_10220 = new Stock('10220','36','','XL','ハードメープル','ブルー',100000);

// $stocks_old = array($stock_10261, $stock_10275, $stock_10278, $stock_10339, $stock_10292, $stock_10357, $stock_10291, $stock_10362, $stock_10321, $stock_10346, $stock_10318, $stock_10350, $stock_10351, $stock_10352, $stock_10254, $stock_10255, $stock_10244, $stock_10241, $stock_10245, $stock_10223, $stock_10220);

$stocks = array(10261 => $stock_10261,
                10275 => $stock_10275,
                10278 => $stock_10278,
                10339 => $stock_10339,
                10292 => $stock_10292,
                10357 => $stock_10357,
                10291 => $stock_10291,
                10362 => $stock_10362,
                10321 => $stock_10321,
                10346 => $stock_10346,
                10318 => $stock_10318,
                10350 => $stock_10350,
                10351 => $stock_10351,
                10352 => $stock_10352,
                10254 => $stock_10254,
                10255 => $stock_10255,
                10244 => $stock_10244,
                10241 => $stock_10241,
                10245 => $stock_10245,
                10223 => $stock_10223,
                10220 => $stock_10220
);




?>