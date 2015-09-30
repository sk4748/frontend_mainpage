$(function() {
  var a = $('#top');
  var b = $('#information');
  var yokoneVR = $('.yokoneVR');
  var itext = $('.itext');
  //スクロールしたら文字が消えてVRが出るやつ
  yokoneVR.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > a.height() ) {
      // setTimeout(function(){
        console.log("A");
      itext.fadeOut();
      yokoneVR.fadeIn();
    // },3000);
    return false;
    } else {
      console.log("B");
        itext.fadeIn();
        yokoneVR.fadeOut();
    }
  });
  //クリックしたらスクロールするやつ
    $('a[href^=#]').click(function(){
        var speed = 500; //移動完了までの時間(sec)を指定
        var href= $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });


});
