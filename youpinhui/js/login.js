$(function() {
	/*用户注册tab切换*/
	$('.ifshow').hide();
	$('.ifshow:eq(0)').show();
	$('#login-nav li:eq(0)').css({
		background: 'url(img/login/zc.GIF) no-repeat 0 -57px',
		color: '#fff'
	})
	$('#login-nav li').each(function(i, n) {
			$('#login-nav li:eq(' + i + ')').on('click', function() {
				//	console.info(i)
				/*隐藏tab菜单*/
				$('.ifshow').hide();
				/*显示对应的tab菜单*/
				$('.ifshow:eq(' + i + ')').show();
				/*所有tab菜单导航的字体色变为灰色*/
				$('#login-nav li').css({
						background: 'url(img/login/zc.GIF) no-repeat 0 -102px',
						color: '#777'
					})
					/*当前的tab菜单导航的字体色变为白色*/
				$(this).css({
					background: 'url(img/login/zc.GIF) no-repeat 0 -57px',
					color: '#fff'
				})
				$('#login-nav li:eq(0) span').css('background', 'background:url(img/login/zc.GIF) no-repeat 0 -212px')
				$('#login-nav li:eq(1) span').css('background', 'background:url(img/login/zc.GIF) no-repeat 0 -252px')
				$('#login-nav li:eq(2) span').css('background', 'background:url(img/login/zc.GIF) no-repeat 0 -304px')
				if (i == 0) {
					$('#login-nav li:eq(0) span').css('background', 'background:url(img/login/zc.GIF) no-repeat 0 -230px')
				}
				if (i == 1) {
					$('#login-nav li:eq(1) span').css('background', 'background:url(img/login/zc.GIF) no-repeat 0 -230px')
				}
				if (i == 2) {
					$('#login-nav li:eq(2) span').css('background', 'background:url(img/login/zc.GIF) no-repeat 0 -230px')
				}
			})
		})
		/*给输入框绑定事件*/
	var flag = true;
	$('.phonelogin-contentmain .phonelogin-contentmain2').each(function(j, n) {
			$('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').on('click', function() {
				$('.phonelogin-contentmain .phonelogin-contentmain2').css('border', '1px solid #a2a2a2');
				$('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').css('border', '1px solid #690');
				/*其他隐藏提示显示*/
				$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
				$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
				$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
				$('.phonelogin-contentmain-pro1:eq(' + j + ')').show();
				/*按钮变背景*/
			})
			$('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').on('blur', function() {
				/*手机号码验证*/
				if (j == 0 || j == 6) {
					/*是否为空*/
					if ($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val().length == 0) {
						//				console.info("为空")
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').show();
						flag = false;
						/*是否是正确的手机号*/
					} else if (/^((13[0-9]{1})|(15[0-9]{1})|(18[^4]{1})|(170))\d{8}$/.test($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val())) {
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
						/*是否是正确格式*/
					} else {
						flag = false;
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
					}
				}
				/*密码设置验证*/
				if (j == 1 || j == 4 || j == 7) {
					/*是否为空*/
					if ($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val().length == 0) {
						//				console.info("为空")
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').show();
						flag = false;
						/*密码是否符合规则*/
					} else if (/^[A-Za-z_]\w{4,10}$/.test($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val())) {
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
						/*是否是正确格式*/
					} else {
						flag = false;
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
					}
				}
				/*密码确认验证*/
				if (j == 2 || j == 5 || j == 8) {
					/*是否为空*/
					if ($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val().length == 0) {
						//				console.info("为空")
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').show();
						flag = false;
						/*是否输入一直*/
					} else if ($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val() == $('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + parseInt(j - 1) + ')').val()) {
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
						/*是否是正确格式*/
					} else {
						flag = false;
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
					}
				}
				if (j == 3) {
					/*是否为空*/
					if ($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val().length == 0) {
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').show();
						flag = false;
						/*邮箱地址是否正确*/
					} else if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($('.phonelogin-contentmain .phonelogin-contentmain2:eq(' + j + ')').val())) {
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
						/*是否是正确格式*/
					} else {
						flag = false;
						$('.phonelogin-contentmain-pro2:eq(' + j + ')').show();
						$('.phonelogin-contentmain-pro3:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro1:eq(' + j + ')').hide();
						$('.phonelogin-contentmain-pro:eq(' + j + ')').hide();
					}
				}
				/*小背景*/
				if ($('.phonelogin-contentmain-pro3:eq(' + j + ')').css('display') == 'block') {
					$('.phonelogin-contentpic:eq(' + j + ')').css('background', 'url(img/login/welland[1].gif) 0 -275px no-repeat')
				} else {
					if (j == 0 || j == 3 || j == 6) {
						$('.phonelogin-contentpic:eq(' + j + ')').css('background', 'url(img/login/welland[1].gif) 0 -229px no-repeat')
					} else {
						$('.phonelogin-contentpic:eq(' + j + ')').css('background', 'url(img/login/welland[1].gif) 0 -251px no-repeat')
					}
				}
			})

		})
		/*验证码*/
		/*定义一个数组存放对应的元素*/
	$('.tradecode').each(function(k, n) {
			$('.tradecode:eq(' + k + ')').on('click',function(event) {
					var e = event || window.event
					e.stopPropagation()
					e.preventDefault();
				/*利用函数随机生成数组下标*/
				var count = parseInt(Math.random() * 20);
				var count1 = parseInt(Math.random() * 20);
				var count2 = parseInt(Math.random() * 20);
				var count3 = parseInt(Math.random() * 20);
				var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l', 'm'];
				$('.number:eq(' + k + ')').text(arr[count] + arr[count1] + arr[count2] + arr[count3])
			})
		})
	
		/*cookie操作注册信息*/

	$('.phonelogin-sub-button').each(function(i, n) {
		$('.phonelogin-sub-button:eq(' + i + ')').on('click', function() {
			/*测试是否全部符合*/
			if (flag == true) {
				function SetCookie(name, value) //两个参数，一个是cookie的名子，一个是值 
				{
					var Days = 30; //此 cookie 将被保存 30 天 
					var exp = new Date(); //new Date("December 31, 9998"); 
					exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
					document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
				}

				function getCookie(name) //取cookies函数 
				{
					var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
					if (arr != null) return unescape(arr[2]);
					return null;
				}

				function delCookie(name) //删除cookie 
				{
					var exp = new Date();
					exp.setTime(exp.getTime() - 1);
					var cval = getCookie(name);
					if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
				}
//				alert($('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+1)+')').val())
				if(i==0){
				SetCookie('userphone',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+i+')').val());
				SetCookie('userpass',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+1)+')').val());
				SetCookie('userpasscheck',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+2)+')').val());
				window.location="personal-center.html"
				alert()
				}else if(i==1){
				SetCookie('usereamil',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+2)+')').val())
				SetCookie('usereamilpass',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+3)+')').val())
				SetCookie('usereamilpasscheck',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+4)+')').val())	
				window.location="personal-center.html"
				}else if(i==2){
				SetCookie('usertvphone',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+4)+')').val())
				SetCookie('usertvpass',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+5)+')').val())
				SetCookie('usertvpasscheck',$('.phonelogin-contentmain .phonelogin-contentmain2:eq('+parseInt(i+6)+')').val())	
				window.location="personal-center.html"
				}
			}
		})
	})











})