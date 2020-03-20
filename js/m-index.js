$(function () {
    moveSlideM(".slide-pic",".slide-tp",".a","a-s",4000,7.5);

    $('.number').countUp();

    $("#index-xd-tab").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#index-xd-tab").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-xd-item").hide();
            $(".index-xd-item").eq(i).show();
        })
    })

    moveSlideM(".index-generalize-turn-main",".index-generalize-content",".js-circle-generalize","circle-s",4000,7.5);


    //旋转木马
    // 初始化
    var imgNum = $(".index-turn-item3").size();
    var item0 = $(".index-turn-item3").eq(0);
    var item1 = $(".index-turn-item3").eq(1);
    var item2 = $(".index-turn-item3").eq(2);
    item0.attr("class","index-turn-item0");
    item1.attr("class","index-turn-item1");
    item2.attr("class","index-turn-item2");

    //手机左右滑动翻页
    var startX,startY,moveX,moveY;
    var d = $(".index-art-meal-content").get(0);
    var boo = true;
    var indexScore = 1;
    function touchstart(e) {
        var target = e.targetTouches[0];
        startX = target.clientX;
        startY = target.clientY;
    }

    function touchmove(e) {
        var target = e.targetTouches[0];
        moveX = target.clientX;
        moveY = target.clientY;

        var x = moveX - startX,
            y = moveY - startY;

        // 如果x>0并且x轴上移动的距离大于y轴上移动的距离
        if(Math.abs(x) > Math.abs(y) && x > 0){    //右滑
            if(boo) {
                boo = false;
                if(indexScore==0){
                    indexScore = imgNum-1;
                }else{
                    indexScore--;
                }
                $(".m-circle").removeClass("m-circle-s");
                $(".m-circle").eq(indexScore).addClass("m-circle-s");
                if(imgNum>3){
                    $(".index-turn-item2").attr("class","index-turn-item3");
                    $(".index-turn-item1").attr("class","index-turn-item2");
                    $(".index-turn-item0").attr("class","index-turn-item1");
                    $(".index-turn-item3").eq($(".index-turn-item3").size()-1).attr("class","index-turn-item0");
                    $('.index-turn-item0').eq(0).insertAfter( $(".index-left-btn-s") );
                }else if(imgNum == 3){

                    $(".index-turn-item2").attr("class","index-turn-item0");
                    $(".index-turn-item1").attr("class","index-turn-item2");
                    $(".index-turn-item0").eq(0).attr("class","index-turn-item1");
                    $('.index-turn-item0').insertAfter( $(".index-left-btn-s") );

                }else{
                    console.log("图片数量不足3张,旋转轮播无法正常轮播");
                }



                setTimeout(function () {
                    boo = true;
                }, 500)
            }

        }
        else if(Math.abs(x) > Math.abs(y) && x < 0){   //左滑
            if(boo){
                boo = false;
                if(indexScore==imgNum-1){
                    indexScore = 0;
                }else{
                    indexScore++;
                }
                $(".m-circle").removeClass("m-circle-s");
                $(".m-circle").eq(indexScore).addClass("m-circle-s");
                if(imgNum>3){
                    $(".index-turn-item0").attr("class","index-turn-item3");
                    $(".index-turn-item1").attr("class","index-turn-item0");
                    $(".index-turn-item2").next().attr("class","index-turn-item2");
                    $(".index-turn-item2").eq(0).attr("class","index-turn-item1");
                    $('.index-turn-item3').eq(0).insertBefore( $(".index-right-btn-s") );
                }else if(imgNum == 3){
                    $(".index-turn-item0").attr("class","index-turn-item2");
                    $(".index-turn-item1").attr("class","index-turn-item0");
                    $(".index-turn-item2").eq(1).attr("class","index-turn-item1");
                    $(".index-turn-item2").insertBefore( $(".index-right-btn-s") );
                }else{
                    console.log("图片数量不足3张,旋转轮播无法正常轮播");
                }


                setTimeout(function () {
                    boo = true;
                },500)
            }


        }
    }
    // 轮番图手指左右滑动
    d.addEventListener('touchstart',touchstart);
    d.addEventListener('touchmove',touchmove);


    $("#index-build-content").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#index-build-content").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-build-item").hide();
            $(".index-build-item").eq(i).show();
        })
    })

    $("#tab-change").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#tab-change").find("li").removeClass("active");
            $(this).addClass("active");
            $(".js-eg").hide();
            $(".js-eg").eq(i).show();
        })
    })

    moveSlideM(".index-success-turn",".success-main-content",".js-circle-success","circle-s",4000,7.5);

    $("#m-page-tab").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#m-page-tab").find("li").removeClass("active");
            $(this).addClass("active");
            $(".news-main-hot").hide();
            $(".news-main-hot").eq(i).show();
        })
    })

})