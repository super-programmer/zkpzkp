$(function() {
	/*轮播图*/
	var con = $('.carr dd');
	var next = $('.hotsell-main-right');
	var pre = $('.hotsell-main-left');
	var li = $('.hotsell-btn>li');
	carousel(li, next, pre, con);
	/*头部li背景*/
	$('.per-information li').click(function() {
			$(this).addClass('on').siblings().removeClass('on')
		})
		/*tab切换*/
	$('.personal-safe').hide();
	$('.per-information li').mouseover(function() {
			var $index = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$('._list').eq($index).show().siblings('._list').hide()
		})
		/*三级联动*/
	$.ajax({
		type: "get",
		url: "adress.json",
		async: true,
		success: function(data) {
			/*获取省份*/
			$('.pre-con .province').empty();
			for (var i in data) {
				var op = $('<option>' + data[i].name + '</option>');
				$('.pre-con .province').append(op);
			}
			/*地区市*/
			$('.pre-con .province').click(function() {
				for (var i in data) {
				if($(this).val()==data[i].name){
						$('.pre-con .city').empty();
					for (var j in data[i].city) {
						var op=$('<option>' + data[i].city[j].name + '</option>');
						$('.pre-con .city').append(op);
						$('.pre-con .area').empty();
						for (var k in data[i].city[0].rea) {
							var op=$('<option>' + data[i].city[0].rea[k] + '</option>');
								$('.pre-con .area').append(op);
						}
					}
				}
				}
			})
			/*县*/
			$('.pre-con .city').click(function() {
				for (var i in data) {
				if($('.pre-con .province').val()==data[i].name){
					for (var j in data[i].city) {
						if($(this).val()==data[i].city[j].name){
								$('.pre-con .area').empty();
							for (var k in data[i].city[j].rea) {
								var op=$('<option>' + data[i].city[j].rea[k] + '</option>');
								$('.pre-con .area').append(op);
							}
						}
					}
				}
				}
			})
		}
	});
	/*手机号码更改*/
	$('.pre-con1 a').click(function(ev){
		var e=ev||event;
		e.preventDefault();
		e.stopPropagation ? e.stopPropagation() :e.cancelBubble=true;
		$('.pre-con1').hide();
		$('.pre-con2').show();
	})
})








