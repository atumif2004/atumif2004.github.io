/* Masked Input Version: 1.4.1 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});


 
    function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    }




$(document).ready(function () {

	$('#rating_1').rating({
		fx: 'full',
        image: '/img/stars.png',
        loader: '/img/ajax-loader.gif',
        width: 32,
		url: '/rating.php'
	});

  $( function() {
    $( ".topbox" ).tabs();
  } );

$('.nvlist').slick({
  slidesToShow: 4,
   arrows: true,
  slidesToScroll: 1,
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


$('.giprow').slick({
  slidesToShow: 2,
   arrows: true,
  slidesToScroll: 1,
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});





$('.showmore').on('click', function(){
		$(this).hide();
	$('.noshow').show();
   $('.giprow').slick('reinit'); 
});	


$('.selctorstyle').on('click', function(){
	var selectval = $(this).find(".selectradio").attr("dtype");
	$(this).parents('.zakazitem').find(".selectval").val(selectval);
	var thisbase =  $(this).parents('.zakazitem').find(".selectradio");
	$(thisbase).removeClass("selected");
	$(this).find(".selectradio").addClass("selected");
});	


$('.menuitem').on('click', function(){
	$('.menuitem').removeClass("active");
	$('.menuopen').removeClass("active");
	$('.menuopen').hide();
	$(this).addClass("active");
	var selectval = $(this).attr("openid");
	$('#i'+selectval).show();

});	



$('.photosec').slick({
  slidesToShow: 5,
   arrows: true,
  slidesToScroll: 1,
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
       responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: false,
      }
    },
    {
      breakpoint: 740,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.videro').slick({
  slidesToShow: 5,
   arrows: true,
  slidesToScroll: 1,
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
   autoplay: true,
  autoplaySpeed: 2500,
       responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
		arrows: false,
      }
    },
    {
      breakpoint: 740,
      settings: {
		  arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

	
	
   $('.poiskmobilebtn').click(function(){
     
		$(this).fadeOut(300);
		$(".callmobilebtn").fadeOut(300);
		$(".mainmenu .menubtn").fadeOut(300);
	});
	
	
	$(document).click( function(event){
		if (!$(event.target).closest('.poiskmobilebtn, .search').length) {
        $(".callmobilebtn").fadeIn(300);
		$('.mainmenu .menubtn').fadeIn(300);
		$('.poiskmobilebtn').fadeIn(300);
	event.stopPropagation();
    }
		
}); 
	





/** Preloader
 **************************************************************** **/




  $(function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  });


	$('.mainmenu').find('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
return false;
}); 

/*

	  $(function() {
    var icons = {
      header: "fa fa-chevron-down",
      activeHeader: "fa fa-chevron-up"
    };
	

	  $( ".openclose" ).accordion({
		  icons: icons,
  header: ".dropdown>a",
  heightStyle: "content",
  collapsible: true,
  active: false,
  navigation   : true
});

 $( ".openclose" ).find('.nowjust').next('.underlow').show();
 $( ".openclose" ).find('.nodropdown>.nowjust').parents('.dropdown').children('a').next('.underlow').show();
  $( ".openclose" ).find('.nodropdown>.nowjust').parents('.dropdown').children('a').trigger('click');
  $( ".openclose" ).find('.nowjust').trigger('click');

    });

 */
 



 
$('.slicker').slick({
  slidesToShow: 2,
   arrows: false,
  slidesToScroll: 2,
  dots: true,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
   autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
 
  ]
});



 $('.tovmainimg').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.tovimgs',
   adaptiveHeight: true
});

$('.tovimgs').slick({
  slidesToShow: 4,
   arrows: true,
  slidesToScroll: 1,
  asNavFor: '.tovmainimg',
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true
});


$(function(){
	var ink, d, x, y;
	$(".mainbtnin").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
});
	
	
 $('.catalogmanin').on('click', function(){
        $(".grey_bg").fadeIn(300);
		$(".catalogmanwrap > .catalog").fadeIn(300);
		$(".catalogmanwrap > .catalog .underlow").hide();
	});	
	
	$(function(){


function windowSize(){
    if ($(window).width() <= '960'){
$(".catalogmanwrap .catalog>ul>li.dropdown>a").on('click', function(){
	$(".catalogmanwrap").find('.underlow').hide();
	$(this).next('.underlow').show();
   return false;
 
});	
   
    } else {
		

    }
}
	$(window).on('load resize',windowSize);



	
		 
});
	
$('.menubtn .mainspan, .menuoverlay').on('click', function(){
		  
		if (!$('.menubtn').attr('data-toggled') || $('.menubtn').attr('data-toggled') == 'off'){
		$('.menubtn').addClass('superactive'); 
		$('.menubtn').attr('data-toggled','on');
			
		$(".menushow").fadeOut(100, function(){
			$(".menuclose").fadeIn(100);
			$(".menuoverlay").show();
		 });
		 $( ".mainmenu .wrapinmenu" ).addClass('shad');
  $( ".mainmenu .wrapinmenu" ).animate({

    left: "0px",
  }, 100, function() {
    // Animation complete.
  });

		
		}
			
		 else if ($('.menubtn').attr('data-toggled') == 'on'){ 
		 
		$('.menubtn').removeClass('superactive'); 
		$('.menubtn').attr('data-toggled','off');
		$(".menuclose").fadeOut(100, function(){
			$(".menushow").fadeIn(100);
			$(".menuoverlay").hide();
		 });
		 $( ".mainmenu .wrapinmenu" ).removeClass('shad');
	  $( ".mainmenu .wrapinmenu" ).animate({

    left: "-70%",
  }, 100, function() {
    // Animation complete.
  });
  
  
		}
	});

	
	

		$(".wrapcat.catid101").show();
		$('.inspan').on('click', function(){
			if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
			$(this).addClass('activename'); 
			$(this).attr('data-toggled','on');
			var nowid = $(this).attr('mid');
		
			$(".wrapcat").hide();
			$(".wrapcat."+nowid).show();
			$('.inspan').not(this).removeClass('activename'); 
			$('.inspan').not(this).attr('data-toggled','off');
		}

		});
	
	
	
	
	
  $( function() {
    $( "#tabs" ).tabs();
  } );
 
	  
    $('.datatextcopy').click(function(){
	var mydata = $(this).attr("mydata");

		if(typeof mydata !=="undefined"){
	$('#myzakaz').find('.mainformname').text(mydata);
	$('#myzakaz').find('.idform').val(mydata);
	} 
 
	
	
  });
	
 $('.vibor').click(function(){
	var phone = $(this).attr('phone');
	var place = $(this).attr('place');
	var street = $(this).attr('street');
	var placedes = $(this).attr('placedes');
	$('.changephone').text(phone);
	$('.changeplace').text(place);
	$('.changestreet').text(street);
	$('.changeplacedes').text(placedes);
	$('.changephone').attr('href', 'tel:'+phone);
	
			$.ajax({
            type: "POST", 
            url: "/micity.php", 
            data: {'phone':phone, 'place':place, 'street':street, 'placedes':placedes },
            success: function() {
	
           }, 
		   });
	
	
	
 });

  
  
  $( ".menucatana" ).accordion({
  header: ".dropdown>a",
  heightStyle: "content",
  collapsible: true,
  active: false
});
  
  
  
 $('.bgwrapbox').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.boxvwrap',
   adaptiveHeight: true
});

$('.boxvwrap').slick({
  slidesToShow: 3,
   arrows: true,
  slidesToScroll: 1,
  asNavFor: '.bgwrapbox',
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true
});
  

     
   $('a.currentpage').trigger( "click" );
	
	
	$('.dispas').on("click", function() {
		$('.dispas').removeClass('active_view');
		$(this).addClass('active_view');
	});	
	$('.dispas.view_as_grid').on("click", function() {
		$('.productbox').removeClass('inallrow');
			
			$.ajax({
            type: "POST", 
            url: "/listsave.php", 
            data: {'typelist':1},
            success: function() {
		
           }, 
		   });
	});	
		
	$('.dispas.view_as_list').on("click", function() {
		$('.productbox').addClass('inallrow');
			$.ajax({
            type: "POST", 
            url: "/listsave.php", 
            data: {'typelist':0},
            success: function() {
		
           }, 
		   });
	});			
	
	
$('.calkbox').on("click", function() {
	
	var send_form = $(this).parents('.sendform').serialize();
	var phone = $(this).parents('.calculator').find('.idphone').val();
	var phoneitem = $(this).parents('.calculator').find('.idphone');
	var prib = $(this).parents('.calculator').find('.prib').val();
	var pribitem = $(this).parents('.calculator').find('.prib');
	
	var colz = $(this).parents('.calculator').find('.colz').val();
	var colzitem = $(this).parents('.calculator').find('.colz');
	
	
	
	if(colz == 0 || phone == 0 || prib == 0){


	 if(phone == ''){
	$(phoneitem).css( "border-color", "#e74c3c" );
	$(phoneitem).click(function(){ $(this).css("border-color", "") });
	}
	
	if(prib == ''){
	$(pribitem).css( "border-color", "#e74c3c" );
	$(pribitem).click(function(){ $(this).css("border-color", "") });
	}

		if(colz == ''){
	$(colzitem).css( "border-color", "#e74c3c" );
	$(colzitem).click(function(){ $(this).css("border-color", "") });
	}
	
  }else{
	$(".reswrap").show();
	
	
	var amount = $(".amount").val();
	$('.amountval').html(amount);
	$(".dobox").hide();
	if(amount >= 20000 && amount <= 30000) {
		$(".do30").show();
	}
	
	if(amount >= 30000 && amount <= 70000) {
		$(".do70").show();
	}
	
	if(amount >= 70000 && amount <= 500000) {
		$(".do500000").show();
	}
	
	var colz = $(".colz").val();
	$('.colzval').html(colz);
	
	var perehod = Number(colz)*20;
	$('.perehod').html(perehod);


	var prib = $(".prib").val();
	$('.pribval').html(prib);
	
	var allprb =  Number(prib)*Number(colz);
	$('.allprb').html(allprb);
	
	var realprb = Number(allprb)-Number(amount);
	$('.realprb').html(realprb);
	
	
	$.ajax({
            type: "POST", 
            url: "/send.php", 
            data: send_form,
            success: function() {
		
           }, 
		   });
	
  }
	
});		

	
	
	
	
	
	
	
	  // hide #back-top first
    $("#back-top").hide();
 
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
 
        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
	

	$(window).scroll(function() {
		if ( $(window).scrollTop() > 120 ) {
			$(".headrow").addClass("fixed");
			$(".fixedoption").addClass("with_padding");
		} else {
			$(".headrow").removeClass("fixed");
			$(".fixedoption").removeClass("with_padding");
		}
	});
	
	
	
	
	
	
		   var myconainer = ".fancy";
	$(myconainer+" a").fancybox({ 
	closeBtn : true ,
	wrapCSS    : 'osnbg',
			helpers : {
		
			title  : { type : 'inside' },
			thumbs : {
				width  : 70,
				height : 70,
			},
			overlay: { locked: false 
			},

		},
				afterShow: function(){
 var customContent = "<div class='customHTML'></div>"
 $('.fancybox-inner').append(customContent);
}
		});
		
		
				   var myconainer = ".sifanc";
	$(myconainer+" a").fancybox({ 
	closeBtn : true ,
	wrapCSS    : 'osnbg',
			helpers : {
		
			title  : { type : 'inside' },
			thumbs : {
				width  : 70,
				height : 70,
			},
			overlay: { locked: false 
			},

		},
	
		});
	

	    $(document).on('change', '#prodsort', function() {
                    window.location = $("#prodsort option:selected").val();
      
    });

	
	
  $('.catalogmanwrap').hover(function(){
	$(".grey_bg").show();
  }, function() {
	$(".grey_bg").hide();
  });
	

	
	
	$('.idphone').mask('+7(999) 999-9999');

	
	
	
$("#ui-datepicker-div").addClass("ll-skin-melon");

  $(function() {
	  $.datepicker.setDefaults(
        $.extend($.datepicker.regional["ru"])
	);
	  
    $( "#datepicker" ).datepicker({ 
	dateFormat: "dd.mm.yy", 

	});
  });
  
  
 $('[data-toggle="tooltip"]').tooltip({placement: 'top'}); 

	function recalculate(){
    var sum = 0;
    $(".costitem:checked").each(function(){
      sum += parseInt($(this).attr("value"));
	  
	   var allsumdata = $(this).parents('.checkedtype').children('.atrrname').html();
	  
     
    });

	
      $("#allsumdata").append(allsumdata);
  $("#allsum").val(sum);
  $(".colrubs").html(sum);
}














 movingBlock = $('.cityitemwrap').hide();
		 $('.cityitem').on('click', function(e){
		  e.preventDefault();
		  movingBlock.slideToggle();
		  
     if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
		
		$(this).addClass('active'); 
		$(this).attr('data-toggled','on');
			
    }
	  else if ($(this).attr('data-toggled') == 'on'){
		$(this).removeClass('active'); 
		$(this).attr('data-toggled','off');
	
	}
	});







	  $(function() {
    var icons = {
      header: "fa fa-arrow-circle-o-down",
      activeHeader: "fa fa-arrow-circle-o-up"
    };
	
	
	$(function() {
    $( "#accordion" )
      .accordion({
		   icons: icons,
		   heightStyle: "content",
		    active: false,
		   collapsible: true,
        header: "> div.group > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
      });
  });
	
	});
	
	
	
	
	
	
  $('.cityoption').click(function(){
    if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
	$(this).attr('data-toggled','on');
	$('.optionwrap').fadeIn(300);
  }
    else if ($(this).attr('data-toggled') == 'on'){
	$(this).attr('data-toggled','off');
	$('.optionwrap').fadeOut(300);
  }
});
$('.fade').on('shown.bs.modal', function () {
  $('#myInput').focus()
});


  $('.basketinprice').click(function(){
	var realprice = $(this).parents(".prodsx").find(".realprice").val();
	var realid = $(this).parents(".prodsx").find(".realid").val();

	
 });
	

 // $('.basketinprice').on('click', function(){
		  
		 
     // if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
		// $(this).addClass('superactive'); 
		// $(this).attr('data-toggled','on');
	// $(this).parents('.prodsxin').find('.realprice').prop("checked", true);
	// $(this).parents('.prodsxin').find('.realid').prop("checked", true);	
	// recalculate();
		// return false;
		
    // }
	  // else if ($(this).attr('data-toggled') == 'on'){
		// $(this).removeClass('superactive'); 
		// $(this).attr('data-toggled','off');
		// $(this).parents('.prodsxin').find('.realprice').prop("checked", false);
	// $(this).parents('.prodsxin').find('.realid').prop("checked", false);	
		  // recalculate();
	// }
	// });


	// function recalculate(){
    // var sum = 0;
    // $(".realprice:checked").each(function(){
      // sum += parseInt($(this).attr("value"));


  // });
	
	

  // $("#cartcol").html(sum);
// }



$('.orderproduct').on('click', function(){
	var productid =  $(this).attr('productid');
	var productimg =  $(this).attr('productimg');
	var productname =  $(this).attr('productname');
	var productprice =  $(this).attr('productprice');
	$(".modalimg").attr('src', productimg);
	$(".modatovname").html(productname);
	$(".modatovprice span").html(productprice);
	
			$.ajax({
            type: "POST", 
            url: "/addproduct.php", 
            data: {'productid':productid},
			dataType: "html",
            success: function(resul) { 
				$(".restotal").html(resul);
				$("#tovaradd").modal('show');
           }, 
		   });
	
});	


$('.pluscol').on('click', function(){
	var cartitemid =  $(this).attr('cartitemid');
	var thiscol =  $(this).parents('.colproduct').find(".thiscol");
	var thisprice =  $(this).attr("cartitemprice");
	var summprice =  $(this).parents('.cartrow').find(".priceitemcart span");
			$.ajax({
            type: "POST", 
            url: "/pluscol.php", 
            data: {'cartitemid':cartitemid},
			dataType: "html",
            success: function(resul) { 
				 var data1 = $(resul).filter("div.data1").text();
				  var data2 = $(resul).filter("div.data2").text();
				$(".restotal").html(data2);
				$(thiscol).html(data1);
				$(summprice).html(data1*thisprice);
           }, 
		   });
	
});	


$('.minuscol').on('click', function(){
	var cartitemid =  $(this).attr('cartitemid');
	var thiscol =  $(this).parents('.colproduct').find(".thiscol");
	var thisprice =  $(this).attr("cartitemprice");
	var summprice =  $(this).parents('.cartrow').find(".priceitemcart span");
			$.ajax({
            type: "POST", 
            url: "/minuscol.php", 
            data: {'cartitemid':cartitemid},
			dataType: "html",
        success: function(resul) { 
				 var data1 = $(resul).filter("div.data1").text();
				  var data2 = $(resul).filter("div.data2").text();
				$(".restotal").html(data2);
				$(thiscol).html(data1);
				$(summprice).html(data1*thisprice);
           }, 
		   });
	
});	

$('.selctorstyle').on('click', function(){
	var selectval = $(this).find(".selectradio").attr("dtype");
	$(this).parents('.zakazitem').find(".selectval").val(selectval);
	var thisbase =  $(this).parents('.zakazitem').find(".selectradio");
	$(thisbase).removeClass("selected");
	$(this).find(".selectradio").addClass("selected");
});	

$('.deletcart').on('click', function(){
	var deletid =  $(this).attr('deletid');
	var hidedel =  $(this).parents('.cartrow');
	$("#preloader").show();
			$.ajax({
            type: "POST", 
            url: "/deletcart.php", 
            data: {'deletid':deletid},
			dataType: "html",
            success: function(resul) { 
				location.reload();
				$(hidedel).hide();
				
           }, 
		   });
	
});	


	
$('.todonext').on('click', function(){
	$("#tovaradd").modal('hide');
});

$('#sendtocart').on('click', function(){
	var realprice =  $(this).parents('#cartatr').find('.realprice').val();
	var product =  $(this).parents('#cartatr').find('.product').val();
	var id = $(this).parents('#cartatr').find('.id').val();
	var number = $(this).parents('#cartatr').find('.number').val();
	var prodsimg = $(this).parents('#cartatr').find('.prodsimg').val();
			$.ajax({
            type: "POST", 
            url: "/cartup.php", 
            data: {'realprice':realprice,'product':product,'id':id,'number':number,'prodsimg':prodsimg},
			dataType: "html",
            success: function(resul) { 
	
			window.location = "/cart.php";
			$(".cartcol").text(resul.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
			$(".sumhere").val(resul);
           }, 
		   });
	
});	







  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
		
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);
	$( ".itemincart" ).trigger( "change" );
  });



$(".itemincart").on("change paste keyup", function() {
	var realprice =  $(this).parents('.prnsum').find('.realprice').val();
	var product =  $(this).parents('.prnsum').find('.product').val();
	var id = $(this).parents('.prnsum').find('.id').val();
	var number = $(this).parents('.prnsum').find('.number').val();
	var prodsimg = $(this).parents('.prnsum').find('.prodsimg').val();
			$.ajax({
            type: "POST", 
            url: "/cartup.php", 
            data: {'realprice':realprice,'product':product,'id':id,'number':number,'prodsimg':prodsimg},
			dataType: "html",
            success: function(resul) { 
			$(".sumhere").val(resul);

			$(".cartcol").text(resul.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
			
           }, 
		   });
});


/* $('.prdel').on('click', function(){
	var deleted =  $(this).parents('.deletwrap').find('.deleted').val();
	var session =  $(this).parents('.deletwrap').find('.session').val();

			$.ajax({
            type: "POST", 
            url: "/cartup.php", 
            data: {'deleted':deleted},
			dataType: "html",
            success: function(resul) { 
			
			$("#cartcol").text(resul);
           }, 
		   });
	
});	 */	


	
	
	 $(".likemodal").on('click', function() {
	
	  $(".mainform").show();
	  $(".sucsess").hide();
	 
	     });
	
	
	  $(".buybtn").on('click', function(event) {
	var phone = $(this).parents('.sendform').find('.idphone').val();
	var phoneitem = $(this).parents('.sendform').find('.idphone');
	
	var gorod = $(this).parents('.sendform').find('.idgorod').val();
	var goroditem = $(this).parents('.sendform').find('.idgorod');
	var adres = $(this).parents('.sendform').find('.idadres').val();
	var adresitem = $(this).parents('.sendform').find('.idadres');
	
	var name = $(this).parents('.sendform').find('.idname').val();
	var nameitem = $(this).parents('.sendform').find('.idname');
	var mailtype = $(this).parents('.sendform').find('.mailtype').val();
	
	var mail = $(this).parents('.sendform').find('.idmail').val();
	var mailitem = $(this).parents('.sendform').find('.idmail');
	
	var comment = $(this).parents('.sendform').find('.idcomment').val();
	var commentitem = $(this).parents('.sendform').find('.idcomment');
	
	  if(phone == '' || mail == 0 || name == 0 || comment == 0){
		event.preventDefault();
	 if(phone == ''){
	$(phoneitem).css( "border-color", "#e74c3c" );
	$(phoneitem).click(function(){ $(this).css("border-color", "") });
	}

	 if(mail == 0){
	$(mailitem).css( "border-color", "#e74c3c" );
	$(mailitem).click(function(){ $(this).css("border-color", "") });
	}
	
		 if(name == 0){
	$(nameitem).css( "border-color", "#e74c3c" );
	$(nameitem).click(function(){ $(this).css("border-color", "") });
	}
	
	
	 if(comment == 0){
	$(commentitem).css( "border-color", "#e74c3c" );
	$(commentitem).click(function(){ $(this).css("border-color", "") });
	}
	
		 if(gorod == 0){
	$(goroditem).css( "border-color", "#e74c3c" );
	$(goroditem).click(function(){ $(this).css("border-color", "") });
	}
	
	
			 if(adres == 0){
	$(adresitem).css( "border-color", "#e74c3c" );
	$(adresitem).click(function(){ $(this).css("border-color", "") });
	}
	
  }
  else {
	  form.submit();
  }



	});
	

  $(".sendthis").on('click', function() {
	

	var send_form = $(this).parents('.sendform').serialize();
	var phone = $(this).parents('.sendform').find('.idphone').val();
	var phoneitem = $(this).parents('.sendform').find('.idphone');
	
	var name = $(this).parents('.sendform').find('.idname').val();
	var nameitem = $(this).parents('.sendform').find('.idname');
	var mailtype = $(this).parents('.sendform').find('.mailtype').val();
	
	var mail = $(this).parents('.sendform').find('.idmail').val();
	var mailitem = $(this).parents('.sendform').find('.idmail');
	
	var comment = $(this).parents('.sendform').find('.idcomment').val();
	var commentitem = $(this).parents('.sendform').find('.idcomment');
	
	
	var forhide	=	$(this).parents('.sendform').parents('.wrapmainform').find(".mainform");
	var forshow	=	$(this).parents('.sendform').parents('.wrapmainform').find(".sucsess");
		
  if(phone == '' || mail == 0 || name == 0 || comment == 0){
	 if(phone == ''){
	$(phoneitem).css( "border-color", "#e74c3c" );
	$(phoneitem).click(function(){ $(this).css("border-color", "") });
	}

	 if(mail == 0){
	$(mailitem).css( "border-color", "#e74c3c" );
	$(mailitem).click(function(){ $(this).css("border-color", "") });
	}
	
		 if(name == 0){
	$(nameitem).css( "border-color", "#e74c3c" );
	$(nameitem).click(function(){ $(this).css("border-color", "") });
	}
	
	
	 if(comment == 0){
	$(commentitem).css( "border-color", "#e74c3c" );
	$(commentitem).click(function(){ $(this).css("border-color", "") });
	}
	
	
  }else{
	  
				$(forhide).hide();
				$(forshow).show();
			$.ajax({
            type: "POST", 
            url: "/send.php", 
            data: send_form,
            success: function(result) {
	        yaCounter46606698.reachGoal('order');
			gtag('event', 'zakaz', { 'event_category': 'zayavka', 'event_action': 'forma', });
				
			if(mailtype == 'buy') {
				
				$(".classcart").html(result);
			}
			
			if(mailtype == 'buy') {
				
				$(".classcart").html(result);
			}
			
           }, 
		   });
	   }
    });
	
	
	
	
	
	  $(".sendcart").on('click', function() {
	
	
	var send_form = $('#sendform :input').serialize();
	var phone = $(this).parents('#sendform').find('.idphone').val();
	var phoneitem = $(this).parents('#sendform').find('.idphone');
	
	var name = $(this).parents('#sendform').find('.idname').val();
	var nameitem = $(this).parents('#sendform').find('.idname');
	
	
	var mail = $(this).parents('#sendform').find('.idmail').val();
	var mailitem = $(this).parents('#sendform').find('.idmail');
	
	var comment = $(this).parents('#sendform').find('.idcomment').val();
	var commentitem = $(this).parents('#sendform').find('.idcomment');
	
	
	var forhide	=	$(this).parents('#sendform').parents('.wrapmainform').children(".mainform");
	var forshow	=	$(this).parents('#sendform').parents('.wrapmainform').children(".sucsess");
		
  if(phone == '' || mail == 0 || name == 0 || comment == 0){
	 if(phone == ''){
	$(phoneitem).css( "border-color", "#e74c3c" );
	$(phoneitem).click(function(){ $(this).css("border-color", "") });
	}

	 if(mail == 0){
	$(mailitem).css( "border-color", "#e74c3c" );
	$(mailitem).click(function(){ $(this).css("border-color", "") });
	}
	
		 if(name == 0){
	$(nameitem).css( "border-color", "#e74c3c" );
	$(nameitem).click(function(){ $(this).css("border-color", "") });
	}
	
	
	 if(comment == 0){
	$(commentitem).css( "border-color", "#e74c3c" );
	$(commentitem).click(function(){ $(this).css("border-color", "") });
	}
	
	
  }else{
			$.ajax({
            type: "POST", 
            url: "/send.php", 
            data: send_form,
            success: function() {
				$("#sendform").hide();
				window.location = "/cartwas.php";
           }, 
		   });
	   }
    });
	
	
	
		
		
		

	

 $(".mainmenu li").each(function(){
    var list = $(this).find('li');
   
    if(list.length > 0){
      $($(this).find('a')[0]).attr("data-toggle", "dropdown");
    }
  })


  $('.filtercatwrap').click(function(){
    if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
	$(this).attr('data-toggled','on');
	$('.wipad').fadeIn(300);
	$(this).addClass('activethis');
	
  }
    else if ($(this).attr('data-toggled') == 'on'){
	$(this).attr('data-toggled','off');
	$('.wipad').fadeOut(300);
	$(this).removeClass('activethis');
  }
});



  
    $('.cinarbtn').click(function(){
	var mydata = $(this).attr("mydata");
	var mydoctor = $(this).attr("mydoctor");

		if(typeof mydata !=="undefined"){
	
	$('.myvacdata').attr("value", mydata);
	
	$('.dynamicformname').html(mydata);
	} 
	
	
	
	if(typeof mydoctor !=="undefined"){
	$('.myvacdata').val(mydoctor);
	$('.dynamicformname').html(mydoctor);
	} 
	
	
	
  });
  
  
  
  

 

 

 
 
	
   var myconainer = ".tovwrap";
	$(myconainer+" a").fancybox({ 
	closeBtn : true ,
	wrapCSS    : 'withoutbg',
			helpers : {
		
			title  : { type : 'inside' },
			thumbs : {
				width  : 50,
				height : 50,
			},
			overlay: { locked: false 
			},
		
		}
		});

		


  
var thisHash = window.location.hash;
$(document).ready(function() {
    $('.thumbs').fancybox({
        prevEffect: 'fade',
        nextEffect: 'fade',
        closeBtn: true,
        arrows: true,
        nextClick: true,
        padding: 15,
        helpers: {
            thumbs: {
                width: 80,
                height: 80
            }
        },
        beforeShow: function() {
            var id = this.element.attr("id")
            if (id) {
                window.location.hash = id;
            }
        },
        beforeClose: function() {
            window.location.hash = "";
        }
    });

    if (thisHash) {
        $(thisHash).trigger('click');
    }
});
    
     $("a#cityopen").click(function() {
		 $('#idcityopen').attr('data-toggled','on');
		   $(".optionwrap").fadeIn(300);
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
   

 $('.tovmainimg').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.tovimgs',
   adaptiveHeight: true
});

$('.slickbomb').slick({
  slidesToShow: 3,
   arrows: true,
  slidesToScroll: 1,
  dots: false,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  $(function() {
    $(".tablab" ).accordion({
		active: false,
		 collapsible: true,
      heightStyle: "content"
    });
  });


$('.seolcros').slick({
  slidesToShow: 4,
   arrows: false,
  slidesToScroll: 1,
  dots: true,
  vertical: false,
  infinite: true,
  centerMode: false,
  focusOnSelect: true,
  adaptiveHeight: true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



});