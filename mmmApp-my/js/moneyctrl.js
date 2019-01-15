 $(function(){
     //需求1:一进入页面渲染第一页
     var pageid=0;
     var pageTotal;
     render();
     function render(){

         $.ajax({
             url:"http://127.0.0.1:9090/api/getmoneyctrl",
             type:"get",
             data:{
                pageid:pageid,
             },
             dataType:"json",
             success:function(info){
                 console.log(info);
                 pageTotal=Math.ceil(info.totalCount/info.pagesize);
                 info.pageTotal = pageTotal;
                 info.pageid = pageid;
                 var htmlstr=template("saleTpl",info);
                 $(".sale-ul").html(htmlstr);
    
                 //设置分页
                 //算出总共有几页


                    //设置分页的显示
                    var pagestr=template("pageTpl",info);
                    $("#dropdown").html(pagestr);
             }
    
         })
     }

        //2.当点击上一页的时候,pageid--;
    $("#prePage").on("click",function(){
        
        pageid--;
        if(pageid<0){
            pageid=0;
            return;      
        }
        render();
    
    })

    //3.当点击下一页的时候,pageid++;
    $("#nextPage").on("click",function(){
        
        pageid++;
        if(pageid>pageTotal){
        pageid = pageTotal;
        return;
        
        }
        render();
    
    })

    //4.点击商品,跳转到国内折扣的商品详情页
   $('.sale-ul').on('click','#moneyctrl',function(){
        var productid=$(this).attr("data-id");
        
        location.href="moneyproduct.html?productid="+productid;
    })
    
    // 中间选择事件
    $('#dropdown').on('change',function(){
        pageid = $(this).val();
        render();
    })
 })


