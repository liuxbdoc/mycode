$(function(){
	var phone_patt=/^1[3,5,7,8][0-9]{9}$/;//手机号正则
	$("#phone").keyup(function(){
		var phone=$("#phone").val();
		if(phone_patt.test(phone)){
			$("#tijiao").css({background:'#f53037',color:'white',cursor:'pointer'});
			$("#tijiao").removeAttr('disabled');
		}else{
			$("#tijiao").css({background:'#9f9f9e',color:'#7b7b7b',cursor:'auto'});
			$("#tijiao").attr({disabled:'disabled'});
		}
	});
	$("#tijiao").click(function(){
		var phone=$("#phone").val();
		//POST 根据手机号取得代金券,
		//每个手机号只能获取一次
		$.post('',{phone:phone},function(data){
			
		},'json');
	});
});