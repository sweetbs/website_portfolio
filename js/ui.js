
$(function(){

	if( $("#body_container.main_page").length ){
		medicine.main.init();
	}

	if( $("#body_container.test_page").length ){
		medicine.test.init();
	}

});

var medicine = {}

medicine = {
	/* 404 error */
	notFound : function(){
		alert('이 페이지는 현재 작업중입니다.');
		return false;
	},
	/* 공통 모션 */
	motion : function(el, motionType){
		el.css({opacity:1}).addClass("animated " + motionType);
	}
}





/*
*	main
*/
medicine.main = {
	init : function(){
		this.popup();
	},
	popup : function(){
		var $popup = $(".popup_wrap");
		var $img = $popup.find("img");
		var $medicine = $(".content_wrap .medicine .layer");
		$medicine.on("click", function(){
			var idx = $medicine.index($(this));

			$popup.show();
			$img.hide();
			$img.eq(idx).show();
			return false;
		});
		$popup.find(".dimmed").on("click", function(){
			$popup.hide();
		});
	}
}





