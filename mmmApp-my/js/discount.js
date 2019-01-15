$(function(){
 
    
    // 需求:获取地址栏的传参
    var key=getSearch("productid");
    console.log(key);

    //发送ajax,渲染页面
    $.ajax({
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
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

})

