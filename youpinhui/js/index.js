$(function() {
	/*手机二维码隐藏与显示*/
	$('#lastphone').on('mouseover', function() {
		$('#homeofphone').show();
	})
	$('#lastphone').on('mouseout', function() {
		$('#homeofphone').hide();
	})


	/*在售商品详情*/
	$('#onsell-class').on('mouseover', function() {
			$(this).css('overflow', 'visible')
			$('#onsell-class').on('mouseleave', function() {
				$(this).css('overflow', 'hidden')
			});
		})
		/*logo区域购物车*/
	$('#logo-goodcar').on('mouseover', function() {
		$('#the-car-of-goods').show();
	})
	$('#logo-goodcar').on('mouseout', function() {
		$('#the-car-of-goods').hide();
	})
	if (getCookie('num') != null) {
		var im = $("<img src=" + getCookie('url') + "/>")
		$('#the-car-of-goods p').text(getCookie('name') + getCookie('num') + getCookie('price'))
		$('#the-car-of-goods p').append(im);
	}
	/*轮播图*/
	var count = 0;
	var t = setInterval(function() {
		$(".banner-first:eq(" + count + ")").animate({
			left: "-1920px",
		}, 1000, function() {
			$('#banner-count li').css('background', 'grey')
			$('#banner-count li:eq(' + count + ')').css('background', 'red');
			$(this).css('left', '1920px')
			count++;
		})
		if (count >= 4) {
			$('.banner-first:eq(0)').animate({
				left: "-320px",
			}, 1000, function() {})
		} else {
			$('.banner-first:eq(' + parseInt(count + 1) + ')').animate({
				left: "-320px",
			}, 1000, function() {})
		}
		if (count > 4) {
			count = 0;
		}
	}, 2000)
	var k = count;
	$.each($('#banner-count li'), function(i, n) {
			$('#banner-count li:eq(' + i + ')').on('mouseover', function() {
				$('#banner-count li').css('background', 'grey');
				$(this).css('background', 'red');
				clearInterval(t);
				/*clearInterval(t1);
				clearInterval(t2)*/
				/*向左轮播*/
				if (k <= i) {
					var t1 = setInterval(function() {
						$(".banner-first:eq(" + k + ")").animate({
							left: "-1920px",
						}, 100, function() {
							$(this).css('left', '1920px')
						})
						$('#banner-count li').css('background', 'grey')
						$('#banner-count li:eq(' + parseInt(k + 1) + ')').css('background', 'red');
						if (k >= i - 1) {
							$('.banner-first:eq(' + i + ')').animate({
								left: "-320px",
							}, 100, function() {})
							clearInterval(t1)
						} else {
							$('.banner-first:eq(' + parseInt(k + 1) + ')').animate({
								left: "-320px",
							}, 100, function() {})
						}
						if (k >= 4) {
							k = 0;
						}
						k++;
					}, 100)
				}
				/*向右轮播*/
				if (k >= i) {
					var t2 = setInterval(function() {
						//						$(".banner-first:eq(" + k+ ")").before($(".banner-first:eq(" + parseInt(k-1)+ ")"))
						$(".banner-first:eq(" + parseInt(k - 1) + ")").css('left', '-1920px')
						$(".banner-first:eq(" + k + ")").animate({
							left: "1920px"
						}, 100, function() {})
						$('#banner-count li').css('background', 'grey');
						$('#banner-count li:eq(' + parseInt(k - 1) + ')').css('background', 'red');
						if (k <= i + 1) {
							$('.banner-first:eq(' + i + ')').animate({
								left: "-320px",
							}, 100, function() {})
							clearInterval(t2)
						} else {
							$('.banner-first:eq(' + parseInt(k - 1) + ')').animate({
								left: "-320px",
							}, 100, function() {})
						}
						if (k <= 0) {
							k = 0;
						}
						k--;
					}, 100)
				}
			})
		})
		/*按钮下一页*/
	$('#left').on('click', function() {
			$('#banner-count li').css('background', 'grey');
			$('#banner-count li:eq(' + parseInt(k + 1) + ')').css('background', 'red');
			clearInterval(t);
			if (k == 4) {
				$('.banner-first:eq(0)').css('left', '1920px')
			}
			$('.banner-first:eq(' + parseInt(k + 1) + ')').css('left', '1920px')
			$('.banner-first:eq(' + k + ')').animate({
				left: "-1920px"
			}, 1000, function() {})
			if (k >= 4) {
				$('.banner-first:eq(0)').animate({
					left: "-320px"
				}, 1000)

			} else {
				$('.banner-first:eq(' + parseInt(k + 1) + ')').animate({
					left: "-320px"
				}, 1000)
			}
			k++;
			if (k >= 5) {
				k = 0;
			}
		})
		/*按钮上一页*/
	$('#right').on('click', function() {
			$('#banner-count li').css('background', 'grey');
			$('#banner-count li:eq(' + parseInt(k - 1) + ')').css('background', 'red');
			clearInterval(t);
			if (k <= 0) {
				$('.banner-first:eq(4)').css('left', '-1920px')
			} else {
				$('.banner-first:eq(' + parseInt(k - 1) + ')').css('left', '-1920px')
			}
			$('.banner-first:eq(' + k + ')').animate({
				left: "1920px"
			}, 1000, function() {
				$('.banner-first:eq(' + parseInt(k + 1) + ')').css('left', '-1920px')
			})
			if (k <= 0) {
				$('.banner-first:eq(4)').animate({
					left: "-320px"
				}, 1000)
			} else {
				$('.banner-first:eq(' + parseInt(k - 1) + ')').animate({
					left: "-320px"
				}, 1000)
			}
			k--;
			if (k <= -1) {
				k = 4;
			}
		})
		/*显示隐藏左右分页按钮*/
	$('#banner-main').on('mouseover', function() {
		$('#left').css('display', 'block');
		$('#right').css('display', 'block');
	})
	$('#banner-main').on('mouseout', function() {
		$('#left').css('display', 'none');
		$('#right').css('display', 'none');
	})

	/*限时抢购*/
	var dat = {}
	var dat = {
		t: '2016,1,30'
	}
	endtime(dat)

	function endtime(dat) {
		var str = "";
		str = dat.t
		str = str.replace(/,/g, "/")
		var nnow = new Date(str)
		var _date = nnow.getTime()
			//		console.info(_date)
		var now = new Date();
		_now = now.getTime();
		var t = nnow - now;
		now.setTime(t);
		setInterval(function() {
			t = t - 1000;
			var hour = Math.floor(t / (60 * 60 * 1000))
			var minute = Math.floor((t - (hour * 60 * 60 * 1000)) / (60 * 1000))
			var second = Math.floor((t - (hour * 60 * 60 * 1000) - (minute * 60 * 1000)) / (1000))
			hour < 10 ? hour = '0' + hour : hour = hour;
			minute < 10 ? minute = '0' + minute : minute = minute;
			second < 10 ? second = '0' + second : second = second;
			//			console.info(hour,minute,second)
			$('.get-goods_ul-p p #timer').text(hour + ":" + minute + ":" + second)
		}, 1000)
	}
	/*公告轮播*/
	function advertplay(length, allul, att, value) {
		var i = 0;
		var t6 = setInterval(function() {
			/*判定条件使列表依次循环*/
			if (i = parseInt(length - 1)) {
				i = 0;
			}
			$(allul).animate({
					/*改变父元素的Margin值*/
					marginTop: value
				}, 2000, function() {
					/*将消失的元素添加到最后*/
					$(allul + ' li:eq(' + parseInt(i + length - 1) + ')').after($(allul + ' li:eq(' + i + ')'));
					$(allul).css(att, '0px');
					i++;
				})
				/*鼠标滑入停止*/
			$('#news-notice-tit ul li').on('mouseover', function() {
					clearInterval(t6)
				})
				/*鼠标滑出开启定时器*/
			$('#news-notice-tit ul').on('mouseleave', function() {
				advertplay('3', '#news-notice-tit ul', 'marginTop', '-40px');
			})
		}, 2000)
	}
	advertplay('3', '#news-notice-tit ul', 'marginTop', '-40px');


	/*回到顶部*/
	$('.side-totop').on('click', function() {
		var _top = document.body.scrollTop || document.documentElement.scrollTop;
		_top = 0;
	})

	/*弹出窗口隐藏*/
	$('#closethis').on('click', function() {
		$(".side-uers").css('overflow', 'hidden');
	})
	$(".side-uers").on('mouseover', function() {
		$(".side-uers").css('overflow', 'visible');
	})
	$(".side-uers").on('mouseout', function() {
			$(".side-uers").css('overflow', 'hidden');
		})
		/*公告效果*/
	$('#allpeople a').on('mouseover', function() {
		$(this).children('.firstgoods').css('color', 'red');
		$(this).children('img').css('border', 'red 1px solid');
	})
	$('#allpeople a').on('mouseout', function() {
			$(this).children('.firstgoods').css('color', 'black');
			$(this).children('img').css('border', '');
		})
		/*公告处消息轮播*/
		/*var t4=setInterval(function(){
			$('#news-notice-tit').animate({
				
			})
		},1000)*/
		/*底部段落隐藏显示*/
	var flag = false;
	$('#pulldown').on('click', function() {
		if (flag) {
			$('#footer-firend p').removeClass("add");
			$('#footer-firend').css('height', '22px');
			flag = false;
		} else {
			$('#footer-firend').css('height', '44px');
			$('#footer-firend p').addClass("add");
			flag = true;
		}
	})

})