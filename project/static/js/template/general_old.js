if($.browser.mozilla||$.browser.opera ){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}
jQuery.event.remove( window, "load", jQuery.ready );
jQuery.event.add( window, "load", function(){ jQuery.ready(); } );
jQuery.extend({
	includeStates:{},
	include:function(url,callback,dependency){
		if ( typeof callback!='function'&&!dependency){
			dependency = callback;
			callback = null;
		}
		url = url.replace('\n', '');
		jQuery.includeStates[url] = false;
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = function () {
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.onreadystatechange = function () {
			if ( this.readyState != "complete" && this.readyState != "loaded" ) return;
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.src = url;
		if ( dependency ) {
			if ( dependency.constructor != Array )
				dependency = [dependency];
			setTimeout(function(){
				var valid = true;
				$.each(dependency, function(k, v){
					if (! v() ) {
						valid = false;
						return false;
					}
				})
				if ( valid )
					document.getElementsByTagName('head')[0].appendChild(script);
				else
					setTimeout(arguments.callee, 10);
			}, 10);
		}
		else
			document.getElementsByTagName('head')[0].appendChild(script);
		return function(){
			return jQuery.includeStates[url];
		}
	},
	readyOld: jQuery.ready,
	ready: function () {
		if (jQuery.isReady) return;
		imReady = true;
		$.each(jQuery.includeStates, function(url, state) {
			if (! state)
				return imReady = false;
		});
		if (imReady) {
			jQuery.readyOld.apply(jQuery, arguments);
		} else {
			setTimeout(arguments.callee, 10);
		}
	}
});
///// include js files ////////////
/*if ($('#slidingpanel').length) {
	$.include('panel/mColorPicker/mColorPicker.min.js');
	$.include('panel/js/custom_panel.js');
}*/
if ($('.gallery-list').length) {
	$.include('/static/js/template/jquery.quicksand.js');
}
if ($("a[data-rel^='prettyPhoto']").length) {
	$.include('/static/js/template/jquery.prettyPhoto.js');
}
$.include('/static/js/template/jquery.flexibleColumns.min.js');
$.include('/static/js/template/superfish.js');
$.include('/static/js/template/hoverIntent.js');

	if ($('#contact').length) {
		$.include('/static/js/template/jquery.jigowatt.js');
	} 
		
	// Sliders
	if ($('.anythingSlider').length) {
		$.include('/static/js/template/jquery.anythingslider.js');
		//$.include('/static/js/template/flashobject.js');
	}
	
	if ($('.nivo').length) {
		$.include('sliders/nivo-slider/jquery.nivo.slider.js');
	}

	$(document).ready(function(){
    // Superfish Menu Plugin
	jQuery('ul.sf-menu').superfish();
	
	// Table
	$('table.table-pricing tbody tr:odd').addClass('odd');
	
	// Tabs
	if($('.widget_tabbed').length) {
		$(".widget_tabbed").tabs();
	}
	// *************************************** Shortcodes ******************************************************//
	
	// jQuery Toggle

	$(".toggle_container").hide(); //Hide (Collapse) the toggle containers on load

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$(".trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});
    
	// jQuery Accordion

	//Set default open/close settings
	$('.acc_container').hide(); //Hide/close all containers
	$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container
	
	//On Click
	$('.acc_trigger').click(function(){
		if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
			$('.acc_trigger').removeClass('active').next().slideUp(); //Remove all "active" state and slide up the immediate next container
			$(this).toggleClass('active').next().slideDown(); //Add "active" state to clicked trigger and slide down the immediate next container
		}
		return false; //Prevent the browser jump to the link anchor
	});

	// jQuery Tabs

	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content


	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});


	// jQuery autoAlign	
	jQuery(".alt_columns3").autoHeight(".column");
		
	jQuery("#fsb").autoColumn(40, ".widget-container");
	jQuery("#fsb").autoHeight(".widget-container");
	
	jQuery(".columns").autoColumn(40, ".column");
	jQuery(".columns").autoHeight(".column");
	
	jQuery(".columns2").autoColumn(40, ".column");
	jQuery(".columns2").autoHeight(".column");
	
	jQuery(".columns3").autoColumn(40,".column");
	jQuery(".columns3").autoHeight(".column");
  
	jQuery(".columns4").autoColumn(40, ".column");
	jQuery(".columns4").autoHeight(".column");
	  
	jQuery(".columns5").autoColumn(40, ".column");
	jQuery(".columns5").autoHeight(".column");
	  
	jQuery(".columns6").autoColumn(40, ".column");
	jQuery(".columns6").autoHeight(".column");
	  
	jQuery(".columns7").autoColumn(40, ".column");
	jQuery(".columns7").autoHeight(".column");
	  
	jQuery(".columns8").autoColumn(40, ".column");
	jQuery(".columns8").autoHeight(".column");
	  
	jQuery(".columns9").autoColumn(40, ".column");
	jQuery(".columns9").autoHeight(".column");
	  
	jQuery(".columns10").autoColumn(40, ".column");
	jQuery(".columns10").autoHeight(".column");
	  
	jQuery(".columns11").autoColumn(40, ".column");
	jQuery(".columns11").autoHeight(".column");
	  
	jQuery(".columns12").autoColumn(40, ".column");
	jQuery(".columns12").autoHeight(".column");
	  
	jQuery(".columns13").autoColumn(40, ".column");
	jQuery(".columns13").autoHeight(".column");
	  
	jQuery(".columns14").autoColumn(40, ".column");
	jQuery(".columns14").autoHeight(".column");
	  
	jQuery(".columns15").autoColumn(40, ".column");
	jQuery(".columns15").autoHeight(".column");
	  
	jQuery(".columns16").autoColumn(40, ".column");
	jQuery(".columns16").autoHeight(".column");	
	

	// gallery
	$(".gl_col_2 .gallery-item::nth-child(2n)").addClass("nomargin");
	$(".gl_col_3 .gallery-item::nth-child(3n)").addClass("nomargin");
	$(".gl_col_4 .gallery-item::nth-child(4n)").addClass("nomargin");
	
	$("ul.full-post-item li").hover(function() {
		var fade = $(this, this);
			$(fade).addClass('active');
			$(this).find('.top').css('background','url(images/post_dark_top.png) repeat-x top');
			$(this).find('.bottom').css('background','url(images/post_dark_bottom.png) repeat-x bottom');
	}, function(){
		var fade = $(this, this);
			$(fade).removeClass('active');
			$(this).find('.top').css('background','url(images/post_white_top.png) repeat-x top');
			$(this).find('.bottom').css('background','url(images/post_white_bottom.png) repeat-x bottom');
	});
	
	$(".widget_flickr li::nth-child(2n)").css('margin','0 0 16px 0');
	
	// jQuery data-rel to rel
	if (jQuery("a[data-rel]").length) {
		jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).data('rel'));});
	}
	
	// PrettyPhoto
	function pp_lightbox() {	
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'normal', /* fast/slow/normal */
			opacity: 0.70, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* true/false */
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			overlay_gallery: true, /* display or hide the thumbnails on a lightbox when it opened */
			deeplinking: false,
			social_tools: false /* html or false to disable */
		});
	
	}
	if(jQuery().prettyPhoto) {
		pp_lightbox(); 
	}
	
	if ($('#imageSlider').length)  {
	// jQuery Nivo Slider
  	$(window).load(function() {
	$('#imageSlider').nivoSlider({ 
			effect:'random',
			animSpeed:300,
			pauseTime:5000, 
			pauseOnHover:true,
			captionOpacity: 0.8,
			directionNavHide:false 
		});
	});
	}


	// jQuery Anything Slider
	if ($("#slider3").length) {
		$('#slider3')
		  .anythingSlider({
		   width        : 960,
		   height       : 543,
		   startStopped : false,
		   delay		: 4000
		  });
	    }
	  
	  
   // jquery Quicksand
   function init() {
	$('.gallery-image').hover(function() {
		// on hovering over find the element we want to fade *up*
		var fade = $('.gallery-zoom', this);
		// if the element is currently being animated (to fadeOut)...
		if (fade.is('img')) {
			// ...stop the current animation, and fade it to 1 from current position
			fade.stop().fadeTo(500, 1);
		
		} else {
			fade.fadeIn(500);
		}
	}, function () {
		var fade = $('> .gallery-zoom', this);
		 
		if (fade.is('img')) {
			fade.stop().fadeTo(500, 0);
		} else {
			fade.fadeOut(500);
		}
	});
	}
	init();
	
	jQuery(document).ready(function($) {
		// bind radiobuttons in the form
		var $filterType = $('#filter a');

		// get the first collection
		var $list = $('.gallery-list');

		// clone applications to get a second collection
		var $data = $list.clone();

		$filterType.click(function(event) {

			if ($(this).attr('rel') == 'everyone') {
			  var $sortedData = $data.find('div.gallery-item');
			} else {
				var $sortedData = $data.find('.'+ $(this).attr('rel'));
			}

			$('#filter li a').removeClass('current_link');
			$(this).addClass('current_link');

			$list.quicksand($sortedData, {
			  attribute: 'id',
			  duration: 800,
			  easing: 'easeInOutQuad',
			  adjustHeight: 'auto',
			  useScaling: 'false'
			}, function() {
				jQuery(".pic").css({
						backgroundColor: "#fff",
						borderColor: "#D5D5D5"
					});
				jQuery(".pic").hover(function() {
					jQuery(this).stop().animate({
						backgroundColor: "#666",
						borderColor: "#333"
						}, 300);
					},function() {
					jQuery(this).stop().animate({
						backgroundColor: "#fff",
						borderColor: "#D5D5D5"
						}, 500);
				});
			init();
			pp_lightbox(); 
			});
			return false;
		});
	});
});
