$(window).scroll(function (){
    $(".anime_wrap").each(function(){
      var offset    = $(this).offset().top;
      var scroll    = $(window).scrollTop();
      var wHeight   = $(window).height();

      if (scroll > offset - wHeight + wHeight/2){
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });
});

$(window).scroll(function (){
    $(".video").each(function(){
      var offset    = $(this).offset().top;
      var scroll    = $(window).scrollTop();
      var wHeight   = $(window).height();

      if (scroll > offset - wHeight + wHeight/2){
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });
  });