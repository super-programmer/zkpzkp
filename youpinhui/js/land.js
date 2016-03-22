$(function() {
	$('.landinput').each(function(i, n) {
		$('.landinput:eq(' + i + ')').on('blur', function() {
			if ($(this).val().length == 0) {
				$('.landpro:eq(' + i + ')').show();
				$('.landbc:eq(' + i + ')').removeClass('addbc');
			} else {
				$('.landpro:eq(' + i + ')').hide();
				$('.landbc:eq(' + i + ')').addClass('addbc');
			}
		})
	})
	/*获得cookie*/
	function getCookie(name) //取cookies函数 
	{
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) return unescape(arr[2]);
		return null;
	}
	/*登录成功*/
	var userphone=getCookie('userphone')
	var userpass=getCookie('userpass')
	if($('.remember-pass').prop("checked")==true){
		$('.landinput:eq(0)').val(userphone);
	}else{
		$('.landinput:eq(0)').val("");
	}
	
	/*登录按钮事件*/
	$('.landbutton').click(function(){
		if(userphone==$('.landinput:eq(0)').val() && userpass==$('.landinput:eq(1)').val()){
			$('#main-nav-ul li:nth-child(1) span a').text("你好 "+userphone)
			$('#user-login-loginon strong').text(userphone+" 你好！")
			window.location="personal-center.html";
		}
	})
})