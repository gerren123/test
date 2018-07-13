$(function() {
	$('.has_children').click(function(){
		$(this).addClass('heighlight').children('a').show('400').end().siblings().removeClass('heighlight').children('a').hide('500');
	});
})
