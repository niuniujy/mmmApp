// 需求:一进入页面发送ajax请求渲染数据
$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getsitenav",
        type:"get",
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr=template("navTpl",info);
            $(".nav_ul").html(htmlstr);
        }
    })
})