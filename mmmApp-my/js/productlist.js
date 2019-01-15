// 需求:获取传过来的地址栏的参数

// 1.获取categoryid
var key=getSearch("categoryid");
console.log(key);

// 2. 根据categoryid 发送请求, 获取数据, 完成渲染
var pageTotal;
var pageid=1;
render();
function render(){

    $.ajax({
        url:"http://127.0.0.1:9090/api/getproductlist",
        data:{
            categoryid:key,
            pageid:pageid,   
        },   
        dataType:"json",   
        success:function(info){
          console.log(info);
          var htmlstr=template("listTpl",info);
          $(".product-ul").html(htmlstr);
          //算出总共有几页
          pageTotal=Math.ceil(info.totalCount/info.pagesize);
          
        
          info.pageTotal=pageTotal;
          info.pageid=pageid;

          //设置分页的显示
          var pagestr=template("pageTpl",info);
          $("#dropdown").html(pagestr);
        }   
    })
}
//当点击上一页的时候,pageid--;
$("#prePage").on("click",function(){
     
    pageid--;

    if(pageid<1){
        pageid=1;
        return;
       
    }
    render();
  
})
  
//当点击下一页的时候,pageid++;
$("#nextPage").on("click",function(){
    
    pageid++;
   
    if(pageid>pageTotal){
       pageid=pageTotal;
       return;
       
    }
    render();
  
})

//根据数据categoryid,发送ajax请求,渲染标题
$.ajax({
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    type:"get",
    data:{
        categoryid:key,
    },
    dataType:"json",
    success:function(info){
        console.log(info);
        var htmlstr=template("titleTpl",info);
        $(".list_title").html(htmlstr);
    }   

})

//点击产品列表中的a,跳转到商品详情页
 
mui('.product-ul').on('tap','#product',function(){
   var productid=$(this).attr("data-id");
   location.href="bijia.html?categoryid="+key+"&productid="+productid+"";
  
})  

//给分页中间设置选择
$("#dropdown").on("change",function(){
    pageid=$(this).val();
    render();
})