//ハンバーガーメニュー
//リンク先に移動したときにメニューのモーダルを消す
$(function() {
  $('.menu-content ul li a').on('click', function(event) {
    $('#menu-btn-check').prop('checked', false);
  });
});