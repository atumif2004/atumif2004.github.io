$(function() {
	$(".plass a").click(function(){
		$(this).parent().next().slideToggle("slow");
	});
	$('.glossary').click(function () {
		var x = this.offsetLeft;
		var y = this.offsetTop;
		var linkWidth = this.offsetWidth;
		
		
		var rel = null;
		if($(this).attr('rel')) {
			var termin = $(this).attr('rel');
		}
		else {
			var termin = $(this).text();
		}
		$.post('/glossary/ajaxglossary/', {termin:termin}, function(html) {
			$(".win").css({'left':(x+linkWidth-5)+'px','top':(y-30)+'px','display':'block'});
				$('#Window .glosText').html(html);
		});
	});
});
