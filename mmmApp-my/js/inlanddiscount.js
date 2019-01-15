// 需求:发送ajax请求获取数据
$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("productTpl",info);
            $(".product-ul").html(htmlstr);
        }
    })

    //需求2:给产品列表的a   注册点击事件,跳转到discount.html
    $(".sale_list").on("click","#product",function(){
        var productid=$(this).attr("data-id");
        location.href="discount.html?productid="+productid;

    })
})        