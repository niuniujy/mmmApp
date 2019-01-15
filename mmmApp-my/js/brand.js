$(function(){
    //需求:获取地址栏的传参
    var key= getSearch("brandtitleid");
    console.log(key);

    //发送ajax请求根据品牌的标题id获取该品牌标题下的十大品牌列表 并渲染到十大品牌列表里面
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrand",
        type:"get",
        data:{
            brandtitleid:key,
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("brandTpl",info);
            $('.brand_ul').html(htmlstr);
            $(".brand_ul li .img_box").eq(0).css("backgroundColor", "#f10f0f");
            $(".brand_ul li .img_box").eq(1).css("backgroundColor", "#ff9315");
            $(".brand_ul li .img_box").eq(2).css("backgroundColor", "#8adf5b");

            
        }
    })

    //根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品 并渲染到该品牌的销量排行商品列表里面
    // brandtitleid：品牌标题id 
    //pagesize ：展示的数据量 默认为4个
    var firstproductid;
    var img;
    var text;
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandproductlist",
        type:"get",
        data:{
            brandtitleid:key,
            pagesize: 4
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("brandlistTpl",info);
            $(".product-ul").html(htmlstr);

            firstproductid= $(".product-ul li a").eq(0).attr("data-id");
            console.log(firstproductid);
            img = $(".list_content .brandlist:first-child img").attr("src");
            text = $(".list_content .brandlist:first-child .p1").text();
            console.log(img);
            console.log(text);

        }
    })

    // 根据商品id获取该商品的评论信息然后渲染到页面上
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        type:"get",
        data:{
            productid :1,
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            info.img=img;
            info.text=text;
            var htmlstr=template("commontTpl",info);
            $(".modal-box").html(htmlstr);

        }
    })

    //设置标题,发送ajax获取标题
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var str=info.result[key].brandTitle;
            var text=str.slice(0,4);
            info.text=text;
            var htmlstr=template("titleTpl",info);
            $(".title").html(htmlstr);
        }
    })

     


})