$(document).ready(function(){
  
	
	$('input[name="user_phone"]').inputmask("+7 (999) 999 99 99");
});










// ------------------------------------------------------------------------

// init_mainmenu
$(init_mainmenu);
function init_mainmenu()
{
	$('#mainmenu a').on('click', function() {
		var id = $(this).attr('href');
		$(id).servsiteScroll({
			offset: 22,
		});
		return false;
	});
}

// ------------------------------------------------------------------------

// init_scroll
$(init_scroll);
function init_scroll()
{
	$('[data-scroll]').on('click', function() {
		var id = $(this).attr('data-scroll');
		$(id).servsiteScroll();
		return false;
	});
}

// ------------------------------------------------------------------------

// maskedinput


// ------------------------------------------------------------------------

$(init_photos);
function init_photos()
{
	$('.section2 .img a')
		.fancybox({margin: 50, padding: 2, loop: false});

	$('.section4 .items a')
		.attr('rel', 'gallery')
		.fancybox({margin: 50, padding: 2, loop: false});

		$('.section7 a')
		.attr('rel', 'gallery')
		.fancybox({margin: 50, padding: 2, loop: false});
}

// ------------------------------------------------------------------------

// init_popups
$(init_popups);
function init_popups()
{
	/* callback */

	$('.open-callback1').on('click', function() {
		$.fancybox({
			fitToView: false,
			margin: 0,
			padding: 0,
			type: 'inline',
			content: $('#callback1-popup'),
		});
		return false;
	});

	/* accessories balls */

	$('.accessories-balls [name="accessories-size"]').on('change', function() {
		var price = $(this).find(':selected').attr('data-price');
		var priceOld = $(this).find(':selected').attr('data-price-old');

		if (price)
			$('.accessories-balls .prices .price').show().find('.p').html(price);
		else
			$('.accessories-balls .prices .price').hide();

		if (priceOld)
			$('.accessories-balls .prices .price-old').show().find('.p').html(priceOld);
		else
			$('.accessories-balls .prices .price-old').hide();

		return false;
	}).trigger('change');

	$('.accessories-balls [name="color"]').on('change', function() {
		var img = $(this).find(':selected').attr('data-img');
		$('.accessories-balls .photo img').attr('src', img);
		return false;
	}).trigger('change');

	/* accessories light */

	$('.accessories-light [name="accessories-size"]').on('change', function() {
		var price = $(this).find(':selected').attr('data-price');
		var priceOld = $(this).find(':selected').attr('data-price-old');

		if (price)
			$('.accessories-light .prices .price').show().find('.p').html(price);
		else
			$('.accessories-light .prices .price').hide();

		if (priceOld)
			$('.accessories-light .prices .price-old').show().find('.p').html(priceOld);
		else
			$('.accessories-light .prices .price-old').hide();

		return false;
	}).trigger('change');

	/* order1 popup */

	var order1 = $('#order1-popup');

	order1.find('[name="accessories-size"]').on('change', function() {
		var price = $(this).find(':selected').attr('data-price');
		var priceOld = $(this).find(':selected').attr('data-price-old');

		if (price)
			order1.find('.block2 .prices .price').show().find('.p').html(price);
		else
			order1.find('.block2 .prices .price').hide();
		
		if (priceOld)
			order1.find('.block2 .prices .price-old').show().find('.p').html(priceOld);
		else
			order1.find('.block2 .prices .price-old').hide();

		return false;
	}).trigger('change');

	order1.find('[name="accessories-color"]').on('change', function() {
		var img = $(this).find(':selected').attr('data-img');
		order1.find('.block2 .img img').attr('src', img);
		return false;
	}).trigger('change');

	order1.find('[name="accessories"]').on('change', function() {
		var disabled = $(this).is(':checked');
		if (disabled)
		{
			order1.find('.block2 .left').addClass('hiding');
			order1.find('.accessories').addClass('hiding');
			order1.find('.accessories select').attr('disabled', 'disabled');
		}
		else
		{
			order1.find('.block2 .left').removeClass('hiding');
			order1.find('.accessories').removeClass('hiding');
			order1.find('.accessories select').removeAttr('disabled');
		}
		return false;
	}).trigger('change');

	$('.section2 .items .button').on('click', function() {

		var item = $(this).closest('.item');

		var size = item.attr('data-size');
		order1.find('[name="size"]').val(size);

		var img = item.find('.img a').html();
		order1.find('.block1 .img').html(img);

		var title = item.find('.title').html();
		order1.find('.popup-title').html(title);

		var prices = item.find('.prices').html();
		order1.find('.block1 .prices').html(prices);

		$.fancybox({
			fitToView: false,
			margin: 0,
			padding: 0,
			type: 'inline',
			content: order1,
		});

		return false;
	});

	/* all ajax forms */


}

// ------------------------------------------------------------------------

// init_comments
$(init_comments);
function init_comments()
{
	var resizer = function()
	{
		$('.section5 .items .text').servsiteSameHeight();
	}

	var timer = null;
	$(window).on('resize', function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(resizer, 500);
	});

	resizer();
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/* servsiteScroll */
(function($) {
	$.fn.servsiteScroll = function(options) {
		var options = $.extend({speed: 1000, index: 0, offset: 0}, options);
		this.eq(options.index).each(function() {
			var destination = $(this).offset().top - 10 - options.offset;
			$('html, body').animate({scrollTop: destination}, options.speed);
		});
		return this;
	};
})(jQuery);

// ------------------------------------------------------------------------

/* servsiteSameHeight */
(function($) {
	$.fn.servsiteSameHeight = function(){
		var max = 0;
		this.height('auto');
		this.each(function(){
			max = Math.max(max, $(this).height());
		});
		this.height(max);
		return this;
	};
})(jQuery);

// ------------------------------------------------------------------------

function cyclerstart(){var now=new Date();var cycler=new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59,99);var totalRemains=(cycler.getTime()-now.getTime());if(totalRemains>0)
{var RemainsSec=(parseInt(totalRemains/1000));var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));if(RemainsFullDays<10){RemainsFullDays="0"+RemainsFullDays};var secInLastDay=RemainsSec-RemainsFullDays*24*3600;var RemainsFullHours=(parseInt(secInLastDay/3600));if(RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};var secInLastHour=secInLastDay-RemainsFullHours*3600;var RemainsMinutes=(parseInt(secInLastHour/60));if(RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};var lastSec=secInLastHour-RemainsMinutes*60;if(lastSec<10){lastSec="0"+lastSec};var mcend=Date.parse(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0,0);var mcnow=now.getTime();var mc=((mcend-mcnow)/10).toFixed(0).substr(8);var cyclers=document.getElementsByClassName('cycler');var cyclerhours=document.getElementsByClassName('cyclerhours');var cyclerminutes=document.getElementsByClassName('cyclerminutes');var cyclerseconds=document.getElementsByClassName('cyclerseconds');var i;for(i=0;i<cyclers.length;i++){cyclerhours[i].innerHTML=RemainsFullHours;cyclerminutes[i].innerHTML=RemainsMinutes;cyclerseconds[i].innerHTML=lastSec;}
setTimeout("cyclerstart()",10);} else{}} cyclerstart();

// ------------------------------------------------------------------------

/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);


// ------------------------------------------------------------------------