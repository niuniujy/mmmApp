$(function(){
    
    // 需求:1.一进入页面渲染品牌标题

    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlstr=template("prandTpl",info);
            $(".prand_ul").html(htmlstr);
        }
    })

    //需求2:点击品牌标题跳转到brand.html?brandtitleid=0
    $(".prandlist").on("click","#title",function(){
        var brandtitleid=$(this).attr("data-id");
        location.href="brand.html?brandtitleid="+brandtitleid;
    })

})
