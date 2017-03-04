$(function(){

    //top部分切换下border
    $(".c_nav>a").mouseenter(function(){
        $(this).addClass("active");
        $(this).siblings("a").removeClass("active");
    })

    //页面卷去的高度大于top的高度banner 固定
    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        if(scroll>$(".top").height()){
            $(".banner").css({
                "position":"fixed",
                "top":0
            });
        }else{
            $(".banner").css({
                "position":"absolute",
            });
        }
    })


    //活动聚集部分 图片line效果
    var lineArr=["300px","129px","300px","129px"];
    function line(element){
        $(element).mouseenter(function(){
            $(this).children('.pic').children('div').each(function (index,ele) {
                var num=$(ele).index();
                num--
                if(num%2==0){
                    $(ele).stop().animate({'width':lineArr[num]},300)
                }else{
                    $(ele).stop().animate({'height':lineArr[num]},300)
                }
            })
        })
    }
    //调用
    line(".picture1");
    line(".picture2");
    line(".picture3");

    //清除line动画

    $('.picture').mouseleave(function () {
        $('.picture .line_t').stop().animate({"width":"0"});
        $('.picture .line_r').stop().animate({"height":"0"});
        $('.picture .line_b').stop().animate({"width":"0"});
        $('.picture .line_l').stop().animate({"height":"0"});
    })

    //开场动画
    window.onload = function(){
        $(".slogen1").animate({
            "opacity":1,
            'left': "50%",
            'top': "150px"
        },1500)
        $(".slogen2").animate({
            'left':'50%',
            'top':'256px',
            'opacity':1,
        },1300)
        $(".slogen3").animate({
            'left':'50%',
            'top':'475px',
            'opacity':1,
        },1100)
        $(".slogen4").animate({
            'left':'50%',
            'top':'145px',
            'opacity':1,
        },1200)
        $(".slogen5").animate({
            'left':'50%',
            'top':'76px',
            'opacity':1,
        },1000)
        $(".slogen6").animate({
            'left':'50%',
            'top':'255px',
            'opacity':1,
        },1000)
        $(".slogen7").animate({
            'left':'50%',
            'top':'205px',
            'opacity':1,
        },1000)


    }

    //down-ewm+slogan:
    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        if (scroll > 0) {

            $(".download").css({
                "margin-top": scroll * 0.25 + "px",
            })

        }
    });

    //流沙动画：
    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        if (scroll > 55) {
            $(".sandt").css({
                "position": "fixed",
                "margin-top": 0
            });
            $(".sandl").css({
                "margin-left": "-" + scroll * 0.02 + "px",
            })
            $(".sandr").css({
                "margin-right": "-" + scroll * 0.02 + "px",
            })
        } else {
            $(".sandt").css({
                "position": "absolute",
                "margin-top": "55px"
            });
            $(".sandl").css({
                "margin-left": 0,
            })
            $(".sandr").css({
                "margin-right": 0,
            })
        }
    })




})
