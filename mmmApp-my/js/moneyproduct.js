// 需求1:接收省钱控的商品列表,通过地址栏传递过来的参数
var key=getSearch("productid");
console.log(key);

$.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    type:"get",
    data:{
        productid :key,
    },
    dataType:"json",
    success:function(info){
        console.log(info);
        var htmlstr=template("productTpl",info);
        $(".mm_datails").html(htmlstr);
    }
})