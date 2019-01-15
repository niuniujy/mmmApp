
$(function(){
    // 需求:一进入页面渲染导航栏
    var titleid;
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("navTpl",info);
            $(".nav_ul").html(htmlstr);
    
            // 导航栏渲染后立即渲染全部的页面
             //获取全部页面的id
             titleid=$(".nav_left li:first-child a").attr("data-id");
             render();
             $(".nav_left li:first-child a").addClass("current");

            //动态设置ul的宽度
            var lis=$(".nav_left .nav_ul li");
           
            var liWidth=0;
            lis.each(function(i ,v){
                liWidth+=$(v).innerWidth();
            })
           
            console.log( $(".nav_left .nav_ul").width(liWidth+1));
            
            //进行iscoll初始化
            var myScroll = new IScroll('.nav_left',{
                scrollY: false,scrollX: true
            });
            
   
        }
    })    

    function render(){
            
        $.ajax({
            url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
            type:"get",
            data:{
                titleid:titleid,
            },
            dataType:"json",
            success:function(info){
                console.log(info);
                var htmlstr=template("productTpl",info);
                $(".list_content").html(htmlstr);


            }
        })
    }   

   
    //根据导航的id,渲染商品列表
     //点击a,加上current类
     $(".nav_left").on("click","a",function(){

        $(".nav_left a").removeClass("current");
        $(this).addClass("current");
        
        titleid=$(this).attr("data-id");

        render();
      

    })


})