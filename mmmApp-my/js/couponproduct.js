$(function(){
  // 需求:获取地址栏传递过来的参数
 
        var key=getSearch("couponid");
        console.log(key);

  //发送ajax请求,根据优惠券标题id获取该标题对应的列表
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        type:"get",
        data:{
            couponid:key,   
        },
        dataType:"json",   
        success:function(info){
            console.log(info);
            var htmlstr=template("listTpl",info);
            $(".list_ul").html(htmlstr);



             //获取图片
             var id;
             var img;
              
           

            
            //点击商品显示模态框
            $(".list_content").on("click","#product",function(){
                $(".modal").show();
                id=$(this).attr("data-id");
                img=info.result[id].couponProductImg;  
                $(".pic a").html(img);
         
            
                
            //点击右箭头
            $(".arrow_right").on("click",function(){
            
                id++;
          
                img=info.result[id].couponProductImg;
                $(".pic a").html(img);
                      
            })

            //点击左箭头
            $(".arrow_left").on("click",function(){
                id--;
                if(id<0){
                    id=0;
                }
               
             
                img=info.result[id].couponProductImg;
                $(".pic a").html(img);              
            })
            })

           


        }
    })
  
   

})




