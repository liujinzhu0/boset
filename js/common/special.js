var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000, //可选选项，自动滑动
})

$("#show-info").on("click", "li", function() {
	var target = $(this).data("target");
	var domTag = $("#" + target);
	$(this).css("border-bottom", "3px solid #2b7bcd").siblings().css("border-bottom", "0");
	//当前的目标隐藏的时候
	if(domTag.is(":hidden")) {

		$(this).css("border-bottom", "3px solid #2b7bcd").siblings().css("border-bottom", "0");
		domTag.slideDown().css("z-index", "2")
		domTag.siblings().slideUp().css("z-index", "1")
		$("body").css("overflow", "hidden")

	} else {
		domTag.slideUp().css("z-index", "1")
		$(this).css("border-bottom", "0");
		$("body").css("overflow", "auto")
	}

})