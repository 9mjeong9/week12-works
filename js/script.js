
$(document).ready(function(){

	$(".button").on("click",function(){
		console.log($(this).attr("img_url"));
		$(".grid-img").attr("src",$(this).attr("img_url"))
		$(".second-select").css("display","block")
	})


	$(".button2").on("click",function(){
		console.log($(this).attr("img_url"));
		$(".grid-img2").attr("src",$(this).attr("img_url"))
		$(".first-select").css("display","none")
	})

})
