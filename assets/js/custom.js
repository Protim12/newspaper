'use strict';
    // $.noConflict();

function navContainer() {

    var $window = $(window);
    var $windowWidth = $window.width();

    if($windowWidth >= 1200) {
        $('.nav-list ul li').not(':lt(10)').appendTo('.more-list');
    }

    if($windowWidth >= 992 && $windowWidth <=1199) {
        $('.nav-list ul li').not(':lt(8)').appendTo('.more-list');
    }

    if($windowWidth >= 768 && $windowWidth <=992) {
        $('.nav-list ul li').not(':lt(5)').appendTo('.more-list');
    }

    if($windowWidth < 768) {
        $('.nav-list ul li').appendTo('.mobile-nav ul');
        $('.subscribe-btn').appendTo('.mobile-sub');
        $('.nav-search form').appendTo('.header-search');
    }
}

function removeLoop() {
    $(".individual-btn button i").removeClass("active-loop");
};

// function authorList() {
//     var authorListHeight = $(".author-fol-first").height();
//     if($(".author-fol-first li").outerHeight() > authorListHeight) {

//     }
// }

// function authorList() {
//     var authLastItem = $(".author-fol-first li").last();
//     if($(".author-fol-first").height() > $(".new-author-fol").height()) {
//         authLastItem.prependTo(".author-more-width");
//     }
//     // var authoWidth = 0;
//     // var morewidth = $('.author-more-width').width(true);
//     // $('.author-fol-first > li').each(function() {
//     //     authoWidth += $(this).width( true );
//     // });
    
//     // //var availablespace = $('nav').outerWidth(true) - morewidth;
//     // var availablespace = $('.author-fol').width() - morewidth;
  
//     // if (authoWidth > availablespace) {
//     //     var lastItem = $('.author-fol-first > li').last(); 
//     //     lastItem.outerWidth(true);
//     //     lastItem.prependTo($('.author-more-width'));
//     //     calcWidth();
//     // } else {
        
//     //     var firstMoreElement = $('.author-more-width li').first();
//     //     firstMoreElement.css({"padding-left":"0"});
//     //     if (authoWidth + firstMoreElement.data('width') < availablespace) {
//     //         firstMoreElement.insertBefore($('.author-fol-first li').last());
//     //     }
//     // }
// }

function videoContainer() {

    var $main_window = $(window);
    var $main_window_width = $main_window.width();

    if($main_window_width >= 992) {
        $(".video-main-list li").not(":lt(4), .more-vid-li").appendTo(".vid-more");
    }

    if($main_window_width <= 991) {
        $(".video-main-list li").not(":lt(2), .more-vid-li").appendTo(".vid-more");
    }

    if($main_window_width <= 500) {
        $(".video-main-list li").not(":lt(1), .more-vid-li").appendTo(".vid-more");
    }
}

// more category

function calcWidth() {
    var navwidth = 0;
    var morewidth = $('.more-cat-li').outerWidth(true);
    $('.item-main-list > li:not(.more-cat-li)').each(function() {
        navwidth += $(this).outerWidth( true );
    });
    
    var availablespace = $('.item-list-link').width() - morewidth;
    
    if (navwidth > availablespace) {
        var lastItem = $('.item-main-list > li:not(.more-cat-li)').last(); 
        lastItem.outerWidth(true);
        lastItem.prependTo($('.more-cat-li ul'));
        calcWidth();
    } else {
        
        var firstMoreElement = $('.item-main-list li.more-cat-li li').first();
        if (navwidth + firstMoreElement.data('width') < availablespace) {
            firstMoreElement.insertBefore($('.more-cat-li'));
        }
    }
}

    
$(document).ready(function() {

    $(".s-author-item").each(function() {
        var authLastItem = $(this).find(".author-fol-first li").last();
        var mainAuth = $(this).find(".author-more-width");
        if($(this).find(".author-fol-first").outerHeight() > $(this).find(".new-author-fol").height()) {
            authLastItem.prependTo(mainAuth);
        }
    });

    $(".si-holiday-box").addClass("no-bg");
    

    $(".header-search span").on("click", function() {
        $(".header-search input").toggleClass("active");
    });

    $(".nav-collapse-btn span").click(function() {
        $(".mobile-screen").addClass("active");
        $("html").addClass("modal-open");
    });

    $(".screen-close span").click(function() {
        $(".mobile-screen").removeClass("active");
        $("html").removeClass("modal-open");
    });

    navContainer();

    $(".more-act-link").click(function(e) {
        e.preventDefault();
        var thisItem = $(this);

        if(thisItem.parent().hasClass("sel")) {
            thisItem.parent().find(".more-list").removeClass("active");
            thisItem.parent(".more-act.sel").removeClass("sel");
        }

        else {
            thisItem.parent().find(".more-list").removeClass("active");
            thisItem.parent(".nav-list-item.sel").removeClass("sel");

            if(thisItem.next(".more-list").length) {
                thisItem.parent().addClass("sel");
                thisItem.next(".more-list").addClass("active");
            }
        }
    });

    $(document).mouseup(function(e){
        var selbody = $(".more-act.sel");
        
        if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
            selbody.removeClass("sel");
            $(".more-list").removeClass("active");
        }
    });

    // more-cat-li
        

    $(".more-cat-link").click(function(e) {
        e.preventDefault();
        var thisItem = $(this);

        if(thisItem.parent().hasClass("selo")) {
            thisItem.parent().find(".cat-more").removeClass("active");
            thisItem.parent(".more-cat-li.selo").removeClass("selo");
        }

        else {
            thisItem.parent().find(".cat-more").removeClass("active");
            thisItem.parent(".more-cat-li.selo").removeClass("selo");

            if(thisItem.next(".cat-more").length) {
                thisItem.parent().addClass("selo");
                thisItem.next(".cat-more").addClass("active");
            }
        }
    });

    $(document).mouseup(function(e){
        var selbody = $(".more-cat-li.selo");
        
        if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
            selbody.removeClass("selo");
            $(".cat-more").removeClass("active");
        }
    });



        

    $(window).on('resize load',function(){
        calcWidth();
        navContainer();
        videoContainer();
        // authorList()
    });

    $(".more-vid-link").click(function(e) {
        e.preventDefault();
        var thisItem = $(this);

        if(thisItem.parent().hasClass("selo")) {
            thisItem.parent().find(".vid-more").removeClass("active");
            thisItem.parent(".more-vid-li.selo").removeClass("selo");
        }

        else {
            thisItem.parent().find(".vid-more").removeClass("active");
            thisItem.parent(".more-vid-li.selo").removeClass("selo");

            if(thisItem.next(".vid-more").length) {
                thisItem.parent().addClass("selo");
                thisItem.next(".vid-more").addClass("active");
            }
        }
    });

    $(document).mouseup(function(e){
        var selbody = $(".more-vid-li.selo");
        
        if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
            selbody.removeClass("selo");
            $(".vid-more").removeClass("active");
        }
    });



    // vertical ellipsis

    var verticalTextInner = $(".vertical-text").height();
    $(".vertical-text-inner a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > verticalTextInner) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var verticalTextInner2 = $(".vertical-text-2").height();
    $(".vertical-text-inner-2-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > verticalTextInner2) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var verticalTextInner2 = $(".vertical-text-inner-2").height();
    $(".vertical-text-inner-2-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > verticalTextInner2) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var innerCapTitle = $(".inner-caption-title").height();
    $(".inner-caption-title h3").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > innerCapTitle) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var innerParaFull = $(".inner-caption-para").height();
    $(".inner-caption-para p").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > innerParaFull) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var titleEllipsis2 = $(".title-ellipsis-2").height();
    $(".title-ellipsis-2 h3").each(function() {
        var $innerText = $(this);
        while($innerText.outerHeight(true) > titleEllipsis2) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var itemInnerIndiTitle = $(".item-inner-indi-h").height();
    $(".item-h-a").each(function() {
        var $innerText = $(this);
        while($innerText.outerHeight(true)>itemInnerIndiTitle) {
            $innerText.text(function(index, text){
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var item_inner_individual_para = $(".item-inner-individual-para").height();
    $(".item-inner-individual-para p").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > item_inner_individual_para) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var blog_inner_individual_para = $(".blog-cap-det-para").height();
    $(".blog-cap-det-para p").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > blog_inner_individual_para) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var small_thumb_h = $(".small-thumb-h").height();
    $(".small-h-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > small_thumb_h) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var new_h = $(".new-h").height();
    $(".new-h-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > new_h) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var latest_h = $(".latest-h").height();
    $(".latest-h-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > latest_h) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var blog_h = $(".blog-h").height();
    $(".blog-h-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > blog_h) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    var foo_h = $(".foo-h").height();
    $(".foo-h-a").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > foo_h) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    // var inner_caption_para = $(".inner-caption-para").height();
    // $(".inner-caption-para p").each(function() {
    //     var $innerText = $(this);
        
    //     while($innerText.outerHeight(true) > inner_caption_para) {
    //         $innerText.text(function(index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    //     }
    // });

    // var item_inner_individual_para = $(".item-inner-individual-para").height();
    // $(".item-inner-individual-para p").each(function() {
    //     var $innerText = $(this);
        
    //     while($innerText.outerHeight(true) > item_inner_individual_para) {
    //         $innerText.text(function(index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    //     }
    // });

    // $(".vertical-text-inner a").bind('mouseenter', function() {
    //     var $this = $(this);
    //     if(this.outerHeight < this.scrollHeight){
    //         $this.attr('title', $this.text());
    //     }
    // })

    // // individual btn loop

    

    $(".individual-btn button").click(function() {
        $(this).find("span i").addClass("active-loop");
        setTimeout(removeLoop, 2000);
    });

    // // altest news

    var inner_caption_para_big = $(".inner-caption-para-big").height();
    $(".inner-caption-para-big p").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > inner_caption_para_big) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    // // indi-video-thumb-caption
    // var indi_video_thumb_caption_h = $(".indi-video-thumb-caption h3").height();
    // $(".indi-video-thumb-caption h3 a").each(function() {
    //     var $innerText = $(this);
        
    //     while($innerText.outerHeight(true) > indi_video_thumb_caption_h) {
    //         $innerText.text(function(index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    //     }
    // });

    // // footer indi-post-thumb-caption
    // var indi_post_thumb_caption_h = $(".indi-post-thumb-caption h3").height();
    // $(".indi-post-thumb-caption h3 a").each(function() {
    //     var $innerText = $(this);
        
    //     while($innerText.outerHeight(true) > indi_post_thumb_caption_h) {
    //         $innerText.text(function(index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    //     }
    // });

    // // // latest-news-caption
    // var latest_news_caption_h = $(".latest-news-caption h3").height();
    // $(".latest-news-caption h3 a").each(function() {
    //     var $innerText = $(this);
        
    //     while($innerText.outerHeight(true) > latest_news_caption_h) {
    //         $innerText.text(function(index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    //     }
    // });
    
    

    // video click

    $(".indi-video-iframe").css({"transform": "scale(0)", "opacity": "0",  "transition-delay": "0", "visibility": "hidden"});
    $(".play-btn i").on("click", function() {
        $(this).parent().parent().parent().parent().css({"opacity": "0", "transition": "all 0.3s"});
        $(this).parent().parent().parent().parent().next(".indi-video-iframe").css({"transform": "scale(1)", "opacity": "1", "transition": "all 0.3s", "transition-delay": "0.4", "visibility": "visible"});
        // $("#ifr").attr('src');
        // $("#ifr")[0].src += "&autoplay=1";
        // $("#ifr").src += '&autoplay=1';
    });

    // reply click

    $(".comment-fig-inside").hide();
    $(".comment-more p").click(function() {
        $(this).parent().parent().parent().parent().find(".comment-fig-inside").slideToggle();
        $(this).hide();
    });

    $(".comment-hide p").click(function() {
        $(this).parent().parent().slideToggle();
        $(this).parent().parent().siblings(".comment-fig-main").find(".comment-more p").show();
    });

    // video modal

    $(".video-click span").click(function() {
        $(".video-modal").addClass("video-modal-active");
        $("html").addClass("modal-open");
    });

    $(".video-modal-close span").click(function() {
        $(".video-modal").removeClass("video-modal-active");
        $("html").removeClass("modal-open");
    });

    // // forum para
    var forum_des_para = $(".forum-des-para").height();
    $(".forum-des-para p").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > forum_des_para) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    // var ex_text =$(".ex-text").width();
    // if($(".ex-text").text().length > ex_text) {
    //     $(".ex-text").text(function(index, text) {
    //         return text.replace(/\W*\s(\S)*$/, '...');
    //     })
    // }

    // blog para
    

    var blog_det_para = $(".blog-cap-det-para").height();
    $(".blog-cap-det-para p").each(function() {
        var $innerText = $(this);
        
        while($innerText.outerHeight(true) > blog_det_para) {
            $innerText.text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });

    // authorized-show-hide

    $(".hide-pass").hide();
    $(".show-pass").click(function() {
        $(this).hide();
        $(".hide-pass").show();
    });
    $(".hide-pass").click(function() {
        $(this).hide();
        $(".show-pass").show();
    });

    $(".autho-para-1 p a").click(function(e) {
        e.preventDefault();

        $(".autho-2").addClass("active");
        $(".autho-1").addClass("inactive");
    });

    $(".autho-para-2 p a").click(function(e) {
        e.preventDefault();

        $(".autho-2").removeClass("active");
        $(".autho-1").removeClass("inactive");
    });

    $(".authorized-close span i").click(function() {
        $(".authorized-full").removeClass("active");
        $(".autorized-container").removeClass("active");
        $("html").removeClass("modal-open");
        $(".autho-1").removeClass("inactive autho-1-current");
        $(".autho-2").removeClass("active");
    });

    $(".logautho a").click(function(e) {
        e.preventDefault();
        $(".autorized-container").addClass("active");
        $(".authorized-full").addClass("active");
        $("html").addClass("modal-open");
        $(".autho-1").addClass("autho-1-current");
        $(".autho-1").each(function() {
            if($(this).hasClass("autho-1-current")) {
                $(".autho-3").hide();
            }
        })
    });

    $(".regautho a").click(function(e) {
        e.preventDefault();
        $(".autho-3").show();
        $(".autorized-container").addClass("active");
        $(".authorized-full").addClass("active");
        $("html").addClass("modal-open");
        $(".autho-3").addClass("autho-3-new");
        $(".autho-3").removeClass("inactive");

        $(".autho-3").each(function() {

            if($(this).hasClass("autho-3-new")) {
                $(".autho-1").addClass("ac");
                $(".autho-2").addClass("ap");
                $(".autho-para-1 a").click(function(e){
                    e.preventDefault;
                    $(".autho-2").removeClass("ap");
                });
            }
        });
    });

    $(".autho-para-3 p a").click(function(e) {
        e.preventDefault();

        $(".autho-1").removeClass("ac");
        $(".autho-3").addClass("inactive");
    });

    // newsticker

    $(".newsticker-right").click(function() {
        var $active = $(".text-active");
        $active.removeClass("text-active").next().addClass("text-active");
        if($(".newsticker-slider-text.text-active").length == 0) {
            $(".newsticker-slider-text").eq(0).addClass("text-active").css('opacity', 0).animate({
                opacity: 1
            }, 300);
        }

        else {
            $active.next().addClass("text-active").css('opacity', 0).animate({
                opacity: 1
            }, 300);
        }
    });

    $(".newsticker-left").click(function() {
        var $active = $(".text-active");
        $active.removeClass("text-active").prev().addClass("text-active");
        if($(".newsticker-slider-text.text-active").length == 0) {
            $(".newsticker-slider-text").eq(-1).addClass("text-active").css('opacity', 0).animate({
                opacity: 1
            }, 300);
        }

        else {
            $active.prev().addClass("text-active").css('opacity', 0).animate({
                opacity: 1
            }, 300);
        }
    });

    function newstickerSlide() {

        var $active = $(".text-active");
        if($(".newsticker-slider-text.text-active").length == 0) {
            $(".newsticker-slider-text").eq(0).addClass("text-active").css('opacity', 0).animate({
                opacity: 1
            }, 300);
        }

        else {
            var $next = $active.removeClass("text-active").next().css('opacity', 0).animate({
                opacity: 1
            }, 300);

            if($next.length == 0) {
                $(".newsticker-slider-text").eq(0).addClass("text-active").css('opacity', 0).animate({
                    opacity: 1
                }, 300);
            }

            else {
                $next.addClass("text-active").css('opacity', 0).animate({
                    opacity: 1
                }, 300);
            }
        }
    }setInterval(newstickerSlide, 5000);
    

    // item-list-box-inner slider

    $(".item-list-box-inner").owlCarousel({
        autoplay:false,
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<span class='fas fa-chevron-left'></span>",
            "<span class='fas fa-chevron-right'></span>"
            ],
        dots: false,
        responsive: {

            0:{
                items: 2
            },

            600:{
                items: 3
            },

            768: {
                items: 4
            },
            
            1000:{
                items: 4
            }
        }

    });
});

$(window).on('load',function(){
    $('.preloader').fadeOut();

});