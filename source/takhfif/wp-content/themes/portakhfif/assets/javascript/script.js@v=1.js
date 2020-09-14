var defaultSettings = 'fa';
(function( $ ){
	
  $.fn.persiaNumber = function(settings) {
	  if(typeof(settings) == 'string' && settings.length > 0)
		  defaultSettings = settings;
	  var range = 1728;
	  if(settings == 'ar'){
		  range = 1584;
	  }
	  window.persiaNumberedDOM = this;
	  convert(this, range);
	  $(document).ajaxComplete(function(){
		  var thisObj = window.persiaNumberedDOM;
		  convert(thisObj, range);
	  });
	function convert(obj, range){
		  obj.find("*").andSelf().contents().each(function() {
			    if (this.nodeType === 3 && this.parentNode.localName != "style" && this.parentNode.localName != "script") {
				    this.nodeValue = this.nodeValue.replace(this.nodeValue.match(/[0-9]*\.[0-9]+/), function(txt){
					    return txt.replace(/\./,',');
					});		    	
			        this.nodeValue = this.nodeValue.replace(/\d/g, function(v) {
			            return String.fromCharCode(v.charCodeAt(0) + range);
			        });
			    }
			});		
	}  
};
})( jQuery );
origParseInt = parseInt;
parseInt = function(str) {
		str = str && str.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1728)}).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1584)}).replace(/[\u066B]/g, '.');
	return origParseInt(str);	
	};
origParseFloat = parseFloat;
parseFloat = function(str) {
		str = str && str.toString().replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1728)}).replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function(v){return String.fromCharCode(v.charCodeAt(0) - 1584)}).replace(/[\u066B]/g, '.');
	return origParseFloat(str);	
	};	



$(document).ready(function($) {

	/** DISCOUNT CODE COPY **/
    $('#copyBtn').click(function() {
        var message = '<div class="copiedMessage"><div class="copiedTxt"><span>کپی شد!</span><div class="arrowUp"></div></div></div>';
        $(message).hide().appendTo(".offCodeBox").fadeIn(100);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#offCode').html()).select();
        document.execCommand("copy");
        $temp.remove();
        setTimeout(function() {
            $('.copiedMessage').remove();
        }, 3000);
    });


    $('.offBoxCode').click(function() {
        var message = '<div class="offBoxCopiedMessage">کپی شد!</div>';
        $(message).hide().appendTo($(this)).fadeIn(500);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).find('span').html()).select();
        document.execCommand("copy");
        $temp.remove();
        setTimeout(function() {
            $('.offBoxCopiedMessage').remove();
        }, 3000);
    });


    $(".OffCodePrint").click(function(){
        var siteName = "<div class='printTitle'>بُن و پُن</div>";
        var siteLink = "<div class='printLink'>www.bonopon.com</div>";
        $('#single .container').prepend(siteName,siteLink);
        window.print();
        $('.printTitle,.printLink').remove();
    });
    $('.persianumber').persiaNumber();

    /*-------Iran Map -----*/
    $("#iranmap svg g path").hover(function() {
        var pname = $(this).data("value");
        if (pname) {
            $("#iranmap .show-title").html(pname).css({
                display: "block"
            })
        }
    }, function() {
        $("#iranmap .show-title").html("").css({
            display: "none"
        })
    });

    $("#iranmap").mousemove(function(d) {
        var c = 0;
        var h = 0;
        if (!d) {
            var d = window.event
        }
        if (d.pageX || d.pageY) {
            c = d.pageX;
            h = d.pageY
        } else {
            if (d.clientX || d.clientY) {
                c = d.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                h = d.clientY + document.body.scrollTop + document.documentElement.scrollTop
            }
        }
        if ($("#iranmap .show-title").html()) {
            var f = $(this).offset();
            var b = (c - f.left + 25) + "px";
            var g = (h - f.top - 5) + "px";
            $("#iranmap .show-title").css({
                left: b,
                top: g
            })
        }
    });



    $("#iranmap svg g path").click(function() {
        var province = $(this).attr('class');
        var url = $("#iranmap .list").find('li' +'.'+province).find('a').attr('href');
        window.location.href = url;
    });
    $('#iranmap .list li.mapprovince ul li').click(function() {
        var e = $(this).attr("class");
        $("path").removeClass("hover");
        $("path."+e).trigger("click");
    });
    
    $('.mobile-menu-button').click(function() {
        $('.mobile-menu-frame').show();
    });
    $('.mobile-category-button').click(function() {
        $('.mobile-category-frame').show();
    });
    $('.mobile-menu-close').click(function() {
        $(this).parent().hide();
    });


    $("#addToFavorite").click(function () {
        var discount_id = $(this).attr('data-discount-id');
        if (typeof discount_id === 'undefined') {
            $(".popup").fadeIn();
            return;
        }

        $(".OffCodeLike .deactivated").hide();
        $(".OffCodeLike .activated").hide(0, function () {
            $(".OffCodeLike .favourite-loading").fadeIn();
        });

        $.post("../https@bonopon.com/save_in_favorite/default.htm", {discount_id: discount_id}, function(result) {
            if (result === "yes") {
                $(".OffCodeLike .favourite-loading").fadeOut(0.3, function () {
                    $(".OffCodeLike .activated").fadeIn();
                });
            }
            else {
                $(".OffCodeLike .favourite-loading").fadeOut(0.3, function () {
                    $(".OffCodeLike .deactivated").fadeIn();
                });
            }
        });
    });

    /* brands */
    $(".seeBrandsBtn").click(function(){
        $('.popup').show();
    });
    /* pop up */
    $(".popup-close").click(function(){
        $(this).parent().parent().hide();
    });


    $('.copy-single-link').click(function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('.link-address').html()).select();
        document.execCommand("copy");
        $temp.remove();
        $('.link-address').css('background-color','#dedede');
        setTimeout(function(){
            $('.link-address').removeAttr('style');
        },1500 );
    });

});



