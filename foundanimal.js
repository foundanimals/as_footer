jQuery(document).ready(function(){
	jQuery("#nav li.level-top a.level-top").each(function(){
		var text = jQuery(this).text();
		if(text.match(/Dogs/i)){
			jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'Dogs', 'Dogs Category']);");
		}else if(text.match(/Cats/i)){
			jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'Cats', 'Cats Category']);");
		}else if(text.match(/Pet Identification/i)){
			jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'Pet ID', 'Pet Identification Category']);");
		}else if(text.match(/Pet Insurance/i)){
			jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'Pet Insurance', 'Pet Insurance Category']);");
		}else if(text.match(/Blog/i)){
			jQuery(this).attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'Blog', 'Blog Link']);");
		}
	});
	jQuery("div.header-panel ul.links li").each(function(){
		var text = jQuery(this).find("a").text();
		if(text.match(/My Account/i)){
			jQuery(this).find("a").attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'My_Account', 'My Account Link']);");
		}else if(text.match(/Wishlist/i)){
			jQuery(this).find("a").attr("onclick","_gaq.push(['_trackEvent', 'Top_Nav', 'Wishlist', 'My Wishlist Link']);");
		}
	});


	// init ORG FOOTER
    if (jQuery('#org-footer')){
      orgFooter();
    }
    /* ORG FOOTER */
	  function orgFooter(){
	    var app = jQuery('#org-footer');
	    var appState = 'default';
	    var logoID;

	    // bind actions to logo elements
	    app.find('.logo').each(function(){
	      jQuery(this).click(function(){
	        if (appState != 'default'){
	          return false;
	        }

	        appState = 'focus';
	        app.removeClass('default'); 
	        logoID = jQuery(this).attr('data-id');

	        jQuery(this).addClass('focus');
	        app.find('.logo').not('.logo[data-id="'+ logoID +'"]').addClass('blur');
	        app.find('.text[data-id="'+ logoID +'"]').addClass('focus');
	        app.find('#logo-glow').addClass('focus');
	        app.find('.close').addClass('focus');
	        return false;
	      });
	    });

	    // bind close action to button
	    app.find('.close').click(function(){
	      if (appState != 'default'){
	        app.addClass('default');
	        app.find('a, div').removeClass('focus');
	        app.find('a, div').removeClass('blur');
	        appState = 'default';
	        return false;
	      }
	      else {
	        return false;
	      }
	    });

	    // reset app if user clicks outside of container
	    jQuery(document).mouseup(function(e){
	      if (!app.is(e.target) && app.has(e.target).length === 0 && appState != 'default'){
	        app.find('.close').click();
	      }
	    });
	  } // ORG FOOTER

	  

});
// For use within iPad developer UIWebView
/*var ua = navigator.userAgent;
var isiPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
if(isiPad){
	jQuery(document).ready(function(){
		
		// Section Click prevent
		jQuery("#nav li.parent").each(function(){
			jQuery(this).find('a.parent').click(function () {
				return false; // Prevent default action (redirecting)
			});
			jQuery(this).find('a.parent').dblclick(function () {
				var href = jQuery(this).attr('href');
				window.location = href;
			});
		});
		
		// Section Dropdown open close
		jQuery("#nav li.parent").find('a.parent').click(function () {
						
			if(jQuery(this).parent('li').hasClass('level-top')){
				if(!jQuery(this).next("ul").hasClass('shown-sub')){
					jQuery("#nav li.parent ul").removeClass('shown-sub');
					jQuery(this).next("ul").addClass('shown-sub');
				}else{
					jQuery(this).next("ul").removeClass('shown-sub');
				}
			}else{
				if(!jQuery(this).next("ul").hasClass('shown-sub')){
					jQuery(this).parent('li').parent('ul').find('ul').removeClass('shown-sub');
					jQuery(this).next("ul").addClass('shown-sub');
				}else{
					jQuery(this).next("ul").removeClass('shown-sub');
				}
			}
		});
		
		// Section class change 
		jQuery("#nav li a").hover(function () {
			jQuery(this).addClass('over');
			jQuery(this).parent('li').addClass('over');
		},function(){
			jQuery(this).removeClass('over');
			jQuery(this).parent('li').removeClass('over');
		});
	});
}
*/