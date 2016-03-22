$(function(){
	var table=$("<table class='goodscarmain-tab'></table>");
	var tr=$("<tr><td><input type='checkbox'/><img src="+getCookie('url')+"></td>"
	+"<td>"+"<span>"+getCookie('name')+"</span>"+'<br><br>'+getCookie('color')+getCookie('size')+"</td>"
	+"<td>有货</td>"
	+"<td>"+getCookie('price')+"</td>"
	+"<td>"+getCookie('num')+"</td>"
	+"<td>￥"+parseInt(getCookie('price').split('￥')[1])*parseInt(getCookie('num'))+"</td>"
	+"<td><input type='button' value='删除'/></td>"
	+"</tr>");
	table.append(tr);
	$('.goodscarmain').append(table);
	$('.acount-total-area span').text(getCookie('num'));
	$('.price-area').text("￥"+parseInt(getCookie('price').split('￥')[1])*parseInt(getCookie('num')));
})