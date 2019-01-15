// 需求:一进入页面渲染标题
$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        type:"get",
        dataType:"json",
        success:function(info){
          console.log(info);
          var htmlstr=template("titleTpl",info);
          $(".mui-table-view").html(htmlstr);
          

        }
    })

    //需求2:根据标题的id,渲染标题的下拉页
    //1.点击a标签,获取a上面储存的id
   
     mui('.mui-content').on('tap','.title',function(){
        //点击执行的方法
       
        var titleid=$(this).attr("data-id");
         
        $.ajax({
             url:"http://127.0.0.1:9090/api/getcategory",
             type:"get",
             data:{
                 titleid:titleid, 
             },
             dataType:"json",
             success:function(info){
                 console.log(info);
                 var htmlstr=template("getcategoryTpl",info);
                 $(".category-ul").html(htmlstr);
             }
         })
    });

    //需求3:给分类的a注册点击事件,将自身的id拼接在地址栏上
    mui('.mui-content').on('tap','#category',function(){

         var categoryid=$(this).attr("data-id");
         console.log(categoryid);

         location.href="productlist.html?categoryid="+categoryid;

       
    })
})