$(function() {


//レイジーダウンロード

	$( "img.lazy" ).lazyload(
	{
	threshold: 200,			// 200pxの距離まで近づいたら表示する
	effect: "fadeIn",		// じわじわっと表示させる
	//effect_speed: 300 ,		 0.3秒かけて表示させる
	});

});

//ハンバーガーメニュー
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});




//プルダウンメニュー
//	$('.pull-down-list ul').hide();
//	$('.menu-icon').on('click', function() {
//		var $navList = $(this);
//		if($navList.hasClass("current")) {
//			$('.pull-down-list ul').slideUp(500,function(){
//				$navList.removeClass("current");
//			});
//		} else {
//			$('.pull-down-list ul').slideDown(500,function(){
//				$navList.addClass("current");
//			});
//		};
//		return false;
//	});