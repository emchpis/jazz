$(function(){
    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
    $(window).scroll(function(){
        var scrT=$(window).scrollTop();
        var sec1=$('#sec1').offset().top;
        var sec2=$('#sec2').offset().top;
        var sec3=$('#sec3').offset().top;
        // console.log(sec3)
        
        $('section').each(function(i){
            var offset=$(this).offset().top;
            var next=$(this).next().offset().top;
            var nnext=$(this).next().next().offset().top;
            if(scrT+400>=offset && scrT<offset+700){
                $(this).find('.poster, .pic, .produce, .lp, .txt, .gridwrap').addClass('on')
               
            }
            if(scrT+400>=offset && scrT<=next){
                $('.gnb li').removeClass('on')
                $('.gnb li').eq(i).addClass('on')
            }
            $('.ticket').each(function(i){
                var top =$(this).offset().top
                if(scrT+500>=top){
                    $(this).find('li').each(function(i){
                    $(this).delay(i*200).animate({'opacity':'1','bottom':'50px'},'easeOutCubic');
                    })
                }
            })
        })
        $('#sec5>div').each(function(i){
            var offset=$(this).offset().top;
            if(scrT+400>=offset && scrT<offset+700){
                $(this).delay(i*200).animate({'opacity':'1','bottom':'50px'},'easeOutCubic')
            }
        })
        
    })
    $('.date li').click(function(){
        var i=$(this).index();
        $('.timetable > li').removeClass('on')
        $('.timetable > li').eq(i).addClass('on')
        $('.date > li').removeClass('on')
        $('.date > li').eq(i).addClass('on')
        
    })
   
    $('.gnb li').click(function(){
        $('.gnb li').removeClass('on')
        $(this).addClass('on')
        // console.log(x)
    })

    $('.da-thumbs li').click(function(){
        var i=$(this).index()
        $('.record li').stop().animate({'left':'-10%'},function(){
        $('.record li').removeClass('on')
            $('.record li').eq(i).addClass('on')
            $('.record li').eq(i).stop().animate({'left':'50%'},800,'easeOutCubic')
        })
        $('.txt li').hide()
        $('.txt li').eq(i).stop().fadeIn()
    })

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    $(".list li").click(function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue
        });
        $('.list li').removeClass('on')
        $(this).addClass('on')
    });
    $('.gridwrap').mCustomScrollbar({
        theme:"rounded-dots",
        axis:"y"
    });
    $('#sec5>div').on({
        mouseenter:function(){
            $(this).find('.more').addClass('on')
            $(this).find('h2').addClass('on')
            $(this).find('.news_list, .gallery').addClass('on')
        },
        mouseleave:function(){
            $('.more').removeClass('on')
            $('#sec5 .news_list, .gallery').removeClass('on')
            $('#sec5 h2').removeClass('on')
        }
    })
    $(".group1").colorbox({rel:'group1'});

})