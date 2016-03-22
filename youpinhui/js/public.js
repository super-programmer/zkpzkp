function Tobig(big, samll, mark, _float, samllbc, bigbc) {
	samllbc.onmouseover = function() {
		mark.style.display = "block";
		_float.style.display = "block";
		bigbc.style.display = "block";
	}
	samllbc.onmouseout = function() {
		mark.style.display = "none";
		_float.style.display = "none";
		bigbc.style.display = "none";
	}
	mark.onmousemove = function(ev) {
		e = ev || event;
		var x = e.offsetX - _float.offsetWidth / 2 - mark.offsetLeft;
		var y = e.offsetY - _float.offsetHeight / 2 - mark.offsetTop;
		if (x <= 5) {
			x = 5;
		} else if (x >= samllbc.offsetWidth - _float.offsetWidth) {
			x = samllbc.offsetWidth - _float.offsetWidth;
		}
		if (y <= 5) {
			y = 5;
		} else if (y >= samllbc.offsetHeight - _float.offsetHeight) {
			y = samllbc.offsetHeight - _float.offsetHeight;
		}
		_float.style.left = x + "px";
		_float.style.top = y + "px";
		var l = samll.offsetHeight / big.offsetHeight;
		big.style.left = -x / l + "px";
		big.style.top = -y / l + "px";
	}
}
/*cookie操作*/
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
$(function() {
		/*购物车商品数量*/
		if (getCookie('num') != null) {
			$('.side-cart-pro').text(getCookie('num'));
			$('#logo-goodcar h6').text(getCookie('num'));
		}
		/*用户登录自动同步*/
		if (getCookie('userphone')!=null ) {
			$('#main-nav-ul li:nth-child(1) span a').text("你好 " + getCookie('userphone') + " 退出")
			$('#main-nav-ul li:nth-child(2) span a').text("我的账户").attr({
				"href": "personal-center.html"
			})
			$('#user-login-loginon strong').text(getCookie('userphone') + " 你好！")
		/*退出账号*/
		$('#main-nav-ul li:nth-child(1) span a').click(function(ev){
			var e=ev||event;
			e.preventDefault();
			e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true;
			delCookie('usephone');
		})
		$('.pre-con-main').eq(0).text(getCookie('userphone'))
		$('.pre-con-main').eq(5).text(getCookie('userphone'))
		}
		/*送货地址*/
		$('.addresssea').mouseover(function() {
			$('.alladdress').show(400)
		})
		$('.alladdress ._p').on('click', function() {
			$('.alladdress').hide(400)
		})
		$('.alladdresstit li:eq(0)').click(function() {
			$(this).siblings().css('border-bottom', '1px solid #ccc')
			$(this).css('border-bottom', '0')
			$('.alladdressprovince').show();
			$('.alladdressprovince').siblings().not('.alladdresstit,p').hide();
		})
		$('.alladdresstit li:eq(1)').click(function() {
			$(this).siblings().css('border-bottom', '1px solid #ccc')
			$(this).css('border-bottom', '0')
			$('.alladdresscity').show();
			$('.alladdresscity').siblings().not('.alladdresstit,p').hide();
		})
		$('.alladdresstit li:eq(2)').click(function() {
				$(this).siblings().css('border-bottom', '1px solid #ccc')
				$(this).css('border-bottom', '0')
				$('.alladdressarea').show();
				$('.alladdressarea').siblings().not('.alladdresstit,p').hide();
			})
		
			/*json操作地址*/
		$.getJSON('adress.json', function(js) {
				/*地区省市*/
				for (var i in js) {
					var li = $('<li>' + js[i].name + '</li>')
					$('.alladdressprovince').append(li)
				}
				/*地级市*/
				$('.alladdressprovince li').click(function() {
						/*清空内容*/
						$('.alladdresscity').empty();
						$('.alladdressprovince li').removeClass('libc')
						$(this).addClass('libc')
						$('.alladdresscity').show();
						$('.alladdresscity').siblings().not('.alladdresstit,p').hide();
						$('.alladdresstit li:eq(0) p').html($(this).text());
						for (var i in js) {
							if ($(this).text() == js[i].name) {
								for (var j in js[i].city) {
									/*将城市放入li中*/
									var li = $('<li>' + js[i].city[j].name + '</li>');
									$('.alladdresscity').append(li);
								}
								return;
							}
						}
					})
					/*县市级*/
				$('.alladdresscity').click(function(ev) {
						var e = ev || event;
						/*清空内容*/
						$('.alladdressarea').empty();
						for (var n in $('.alladdresscity li')) {
							if (e.target == $('.alladdresscity li:eq(' + n + ')')[0]) {
								$('.alladdresscity li').removeClass('libc')
								$('.alladdresscity li:eq(' + n + ')').addClass('libc')
								$('.alladdressarea').show();
								$('.alladdressarea').siblings().not('.alladdresstit,p').hide();
								$('.alladdresstit li:eq(1) p').html($('.alladdresscity li:eq(' + n + ')').text());
								for (var i in js) {
									for (var j in js[i].city) {
										if ($('.alladdresscity li:eq(' + n + ')').text() == js[i].city[j].name) {
											for (var k in js[i].city[j].rea) {
												var li = $('<li>' + js[i].city[j].rea[k] + '</li>');
												$('.alladdressarea').append(li)
											}
										}
									}
								}
							}
						}
					})
					/*地区选择*/
				$('.alladdressarea').click(function(ev) {
					var e = ev || event;
					for (var n in $('.alladdressarea li')) {
						if (e.target == $('.alladdressarea li:eq(' + n + ')')[0]) {
							$('.alladdressarea li').removeClass('libc')
							$('.alladdressarea li:eq(' + n + ')').addClass('libc')
							$('.alladdresstit li:eq(2) p').html($('.alladdressarea li:eq(' + n + ')').text());
							$('.addresssea .pcontent').html($('.alladdresstit li:eq(0) p').text() + $('.alladdresstit li:eq(1) p').text() + $('.alladdresstit li:eq(2) p').text() + '<span>▼</span>')
						}
					}
				})
			})
			/*购物车跳转*/
		$('.side-cart ._p').click(function() {
				window.location = "goodscar.html"
			})
			/*购物车我的订单加链接*/
		$('.indent').eq(0).attr({
			href: 'indent.html'
		});
	})

/*轮播图封装*/

function carousel(li, next, pre, con) {
	var t = '';
	var i = 0;
	/*轮播*/
	function play() {
		con.eq(i).fadeIn(400).siblings().fadeOut(400);
	}
	/*自动播放*/
	function autoplay() {
		t = setInterval(function() {
			if (i > con.length - 1) {
				i = 0;
			}
			li.eq(i).addClass('bc').siblings().removeClass('bc');
			play()
			i++;
		}, 3000)
	}
	autoplay();
	/*鼠标滑入*/
	li.mouseover(function() {
			clearInterval(t)
			i = $(this).index();
			$(this).addClass('bc').siblings().removeClass('bc');
			play();
		})
		/*鼠标滑出*/
	li.mouseout(function() {
			i = $(this).index();
			t = setInterval(function() {
				autoplay();
			})
		})
		/*上一页*/
	next.click(function() {
		if (i > con.length - 1) {
			i = 0;
		}
		li.eq(i).addClass('bc').siblings().removeClass('bc')
		play();
		i++;
	})
	next.mouseover(function() {
		clearInterval(t)
	})
	next.mouseout(function() {
			t = setInterval(function() {
				autoplay();
			})
		})
		/*下一页*/
	pre.click(function() {
		if (i < 0) {
			i = con.length - 1;
		}
		li.eq(i).addClass('bc').siblings().removeClass('bc')
		play();
		i--;
	})
	pre.mouseover(function() {
		clearInterval(t)
	})
	pre.mouseout(function() {
		t = setInterval(function() {
			autoplay();
		})
	})
}