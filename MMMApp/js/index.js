$(function () {

  // 1-导航栏发送ajax请求
  var flag = true
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    dataType: 'json',
    success: function (info) {
      console.log(info)
      $('.row').html(template('nav_tmp', info))
      var more = $('.row li[data-id="7"]')
      more.on('click', function () {
        if (flag) {
          $('.row li[data-type="1"]').slideDown()
        } else {
          $('.row li[data-type="1"]').slideUp()
        }
        flag = !flag
      })
    }
  })

  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.mm_discount ul').html(template('product_tmp',info))
    }
  })



})