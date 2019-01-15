
$(function(){

    // 需求1:一进入页面渲染导航栏
    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        type:"get",
        dataType:"json",
        success:function(info){
          console.log(info);
          var htmlstr=template("navTpl", info);
          $(".nav-ul").html(htmlstr);


                
            //需求2:点击更多,显示全部的导航
            $(".mm_nav").on("click",".nav-ul li:nth-child(8)",function(){
               console.log(1);
                $(".nav-ul li:nth-last-child(-n+4)").slideToggle();
            })
        }
    })


    //需求3:发送ajax请求渲染商品列表页
    $.ajax({
        url:"http:/127.0.0.1:9090/api/getmoneyctrl",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("saleTpl",info);
            $(".sale-ul").html(htmlstr);

        }
    })

    //点击商品跳转到moneyproduct.html?productid=22

    $(".sale-ul").on("click","#sale",function(){
        var productid=$(this).attr("data-id");
        location.href="moneyproduct.html?productid="+productid;

    })

})