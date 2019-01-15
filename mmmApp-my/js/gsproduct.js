$(function(){

    
    //1需求:发送ajax请求渲染店铺信息
    $.ajax({
        url:"http:/127.0.0.1:9090/api/getgsshop",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("shopTpl",info);
            $(".shop").html(htmlstr);
        }
    })
    
    //需求2:发送ajax获取区域的信息
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        type:"get",
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr=template("areaTpl",info);
            $(".area").html(htmlstr);
        }
    })


    //需求3:点击标题,切换下拉框的显示和隐藏
    $(".nav_ul .title").on("click",function(){
       
        $(this).siblings().find('.dropdown').removeClass('current');
        $(this).find('.dropdown').toggleClass("current");     

    })

  
    

   //点击第一个dropdown里的li,将文本赋值给title
   $(".shop").on("click","li",function(){
    var txt=$(this).text();  
    // console.log(txt);
   
    $(this).parent().prev("a").children("span").text(txt);

    //li下面的check显示
    $(this).siblings().find(".check").hide();
    $(this).find(".check").show();
   

})

    //点击第二个dropdown里的li,将文本截取前两位赋值给title
    $(".area").on("click","li",function(){
        var txt=$(this).text();  
        // console.log(txt);
        //截取前两位
        var txt1=txt.slice(0,2);
        // console.log(txt1);
        $(this).parent().prev("a").children("span").text(txt1);

        //li下面的check显示
        $(this).siblings().find(".check").hide();
        $(this).find(".check").show();
       

    })
    //点击第一个dropdown里的a
    //需求:获取shopid ,areaid 根据店铺的id和区域的id获取该店铺该区域的商品列表信息
    var shopid = 0;
    var areaid = 0;
    render();
    $(".shop").on("click","a",function(){
       shopid=$(this).data('shopid');
       console.log(shopid);
       render();
    })
     //点击第二个dropdown里的a
    $(".area").on("click","a",function(){
        areaid=$(this).attr("data-areaid");
        console.log(areaid);
        render();
    })
   
    function render(){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsproduct",
            type:"get",
            data:{
                shopid:shopid,
                areaid:areaid,
            },
            dataType:"json",
            success:function(info){
              console.log(info);
              var htmlstr=template("productTpl",info);
              $(".product-ul").html(htmlstr);
            }
        })
    }



})