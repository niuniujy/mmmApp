$(function(){
    //1.获取地址栏上传递过来的productid;
    var key1=getSearch("productid");
    console.log(key1);
    //2.获取地址栏上传递过来的categoryid;
    var key2=getSearch("categoryid");
    console.log(key2);

    //3.根据商品id获取商品的详细信息然后渲染到页面上

    $.ajax({
        url:"http://127.0.0.1:9090/api/getproduct",
        type:"get",
        data:{
            productid:key1,
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("bijiaTpl",info);
            $(".bijia").html(htmlstr);
        }
    })
    //4.根据商品id获取评论的详细信息,渲染到页面上
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        type:"get",
        data:{
            productid:key1,
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("commontTpl",info);
            $(".commont-ul").html(htmlstr);
        }
    })

    //需求5:根据categoryid渲染路径导航上的分类:根据分类的id获取分类的名称
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorybyid",
        type:"get",
        data:{
            categoryid:key2,
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("categoryTpl",info);
            $(".list_title").html(htmlstr);
        }
    })
})