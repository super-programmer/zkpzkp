$(function() {
	/*切换图片*/
	$('#picchengemain li').each(function(i, n) {
			$('#picchengemain li:eq(' + i + ') a').click(function(ev) {
				var e = ev || event;
				e.preventDefault();
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
				$('#picchengemain li:eq(' + i + ') a').addClass('bc')
				$('#picchengemain li:eq(' + i + ') a').parent().siblings().children().removeClass('bc')
				$('#picchenge img').attr({
					src: 'img/detail/big' + i + '.jpg'
				})
				$('#big img').attr({
					src: 'img/detail/big' + i + '.jpg'
				})
			})
		})
		/*左右按钮*/
	var i = 0;
	/*右边按钮*/
	$('.btnpicright').on('click', function() {
			if (i >= $('#picchengemain li').length) {
				i = 0;
			}
			$('#picchengemain li:eq(' + i + ') a').parent().siblings().children().removeClass('bc');
			$('#picchenge img').attr({
				src: 'img/detail/big' + i + '.jpg'
			});
			$('#big img').attr({
				src: 'img/detail/big' + i + '.jpg'
			});
			$('#picchengemain li:eq(' + i + ') a').addClass('bc');
			i++;
		})
		/*左边按钮*/
	$('.btnpicleft').on('click', function() {
			if (i < 0) {
				i = $('#picchengemain li').length - 1;
			}
			$('#picchengemain li:eq(' + i + ') a').parent().siblings().children().removeClass('bc');
			$('#picchenge img').attr({
				src: 'img/detail/big' + i + '.jpg'
			});
			$('#big img').attr({
				src: 'img/detail/big' + i + '.jpg'
			});
			$('#picchengemain li:eq(' + i + ') a').addClass('bc');
			i--;
		})
		/*放大镜*/
	var big = $('#big>img')[0]
	var bigbc = $('#big')[0]
	var samll = $('#picchenge>img')[0]
	var samllbc = $('#picchenge')[0]
	var mark = $('#mark')[0]
	var _float = $('#float')[0]
	Tobig(big, samll, mark, _float, samllbc, bigbc)

	
	/*商品数量计算*/
	$('.goodscount ul li').click(function(){
		/*获取相应的索引*/
		var $index=$(this).index()
		/*获取目前的数量*/
		var count=$('.goodscount ul li').eq(1).text();
		if($index==0){
			if(count==1){
				$('.goodscount span').show(400);
				setTimeout(function(){
				$('.goodscount span').hide(400);
				},3000)
				return;
			}
			count-=1
		}else{
			count=parseInt(count)+1
		}
		/*再把值给予用户*/
		$('.goodscount ul li').eq(1).text(count)
	})
	/*推荐商品*/
	$('#goodsadvertisementnav li').eq(0).addClass('cc')
	$('.goodsadvertisementmain').eq(1).hide();
	$('.goodsadvertisementmain').eq(2).hide();
	$('#goodsadvertisementnav li').mouseover(function(){
		var $index=$(this).index();
		$(this).addClass('cc').siblings().removeClass('cc');
		$('.goodsadvertisementmain').eq($index).show().siblings('.goodsadvertisementmain').hide();
	})
	/*猜你喜欢效果*/
	$('.cover').mouseover(function(){
		$(this).animate({
			height:"0",
		},2000,function(){
			$(this).animate({height:'184px'},5000)
		})
	})
	/*商品信息tab切换*/
	/*默认第一li(即商品信息显示)*/
	$('#goodsinformationleft-nav li').eq(0).addClass('goodsbj');
	/*默认第一个tab页显示*/
	$('#goodsinformationleft-main >li').eq(0).show().siblings().hide();
	/*单击事件*/
	$('#goodsinformationleft-nav li').click(function(){
		var $index=$(this).index();
		$(this).addClass('goodsbj').siblings().removeClass('goodsbj');
		$('#goodsinformationleft-main >li').eq($index).show().siblings().hide()
	});
	/*购物车*/
	$('.buyorno a').click(function(ev){
		var e=ev||event;
		e.preventDefault();
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true;
		$('#cover').show();
		$('.cover-main').show();
		/*cookie储存数据*/
		SetCookie('num',$('.goodscount li').eq(1).text());
		SetCookie('url',$('#picchenge img').attr('src'));
		SetCookie('name',$('.baseinformation h3').text());
		SetCookie('size',$('.goodssize li').eq(0).text());
		SetCookie('color',$('.goodscolor li').eq(0).text());
		SetCookie('price',$('.favroable-left1').text());
	})
	
})