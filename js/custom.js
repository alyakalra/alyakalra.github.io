$(document).ready(function(){
	$("p").hide();
	$(".giff").hide();

	$("#readless").click(function(){
		$("p").hide();
	});


	$("#readmore").click(function(){
	 	$("p").show();

	 });

	
	$(".gif").click(function(){
		$(this).attr("src","images/200.gif")
		$(".gif").click(function(){
		$(this).attr("src","images/giphy.gif")
	});

	});

	



});	

	

