//変数の設定
var $body = $('body');

//スクロール量を保存
var scrollTop;

//スクロールを固定
function bodyFixedOn() {
  scrollTop = $(window).scrollTop();
  
  $body.css({
    position: 'fixed',
    top: -scrollTop
  });
}

//スクロールの固定を解除
function bodyFixedOff() {
  $body.css({
    position: '',
    top: ''
  });
  
  $(window).scrollTop(scrollTop);
}

//モーダルのトリガーをクリックしたとき
$('#modal__show_22dot5').on('click', function() {
  bodyFixedOn();
});

//モーダルの閉じるボタンをクリックしたとき
$('#modal__close_22dot5').on('click', function() {
  bodyFixedOff();
});

//モーダルのオーバーレイをクリックしたとき
$('modal__background_22dot5').on('click', function() {
  bodyFixedOff();
});