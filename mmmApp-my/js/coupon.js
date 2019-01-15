 
$(function(){
// 需求1:一进入页面发送ajax请求
   $.ajax({
       url:"http://127.0.0.1:9090/api/getcoupon",
       type:"get",
       dataType:"json",
       success:function(info){
           console.log(info);
           var htmlstr=template("titleTpl",info);
           $(".title-ul").html(htmlstr);
       }
   })

//    需求2:点击a,跳转到couponproduct.html?couponid=2 

$(".mm_coupon").on("click","#title",function(){
    

    var couponid=$(this).attr("data-id");
    location.href="couponproduct.html?couponid="+couponid;
})


})