$(function(){
	$("#scrollIndicatorWrapper").click(function(){

		if($("#s_conf_submenu").hasClass("carshow")){
			$("#s_conf_submenu").removeClass("carshow");
			$("#s_conf").removeClass("carshow");
			$("#s_footer_mobile").removeClass("carshow");
			if($("#main").hasClass("mainWidth")){
				$("#main").removeClass("mainWidth");
				$("#main").addClass("mainMaxWidth");
			}else{
				$("#main").removeClass("mainMaxWidth");
				$("#main").addClass("mainWidth");
			}
			
		}else{
			$("#s_conf_submenu").addClass("carshow");
			$("#s_conf").addClass("carshow");
			$("#s_footer_mobile").addClass("carshow");
			$("#main").addClass("mainWidth");
		}
	})
})
