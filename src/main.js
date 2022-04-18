$(function(){
  //op
  function animationStart() {
    $('#op').addClass('fin');
  }
  setTimeout(animationStart, 250);

  //op fadeout
  $('.opening').delay(9000).fadeOut('slow');

  //op skip
  $('.skip').on('click', function(){
    $('.opening').remove();
  });

  //scroll
  $('a[href^="#"]').click(function(){
    var speed = 1500;
    var adjust = 56;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({
      scrollTop:position
    }, speed, "swing");
    return false;
  });

  //navbar
  $(".nav-item").click(function(event){
    $(".navbar-collapse").collapse('hide');
  });
});

//twemoji
twemoji.parse(document.body);


//pagetop
$(function(){
  var topBtn=$('.move-top');
  topBtn.hide();
    
  //ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  
  // ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});

