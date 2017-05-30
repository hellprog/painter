$(document).ready(function() {
  var counter=0;
  var createDiv= function(number) {
    for (var i = 0; i < Math.pow(number, 2); i++) {
      $('#draw').prepend('<div class="pix"></div>');
  };
  $('.pix').css("height", (400/number-2)+"px");
  $('.pix').css("width", (400/number-2)+"px");
};
  createDiv(16);
  $('button').click(function(){
    $('.pix').remove();
    var res=prompt("Введите размерность поля");
    createDiv(res);
    $('.pix').mouseenter(function(){
      $(this).addClass('transition');
  });
  });
  $('.pix').mouseenter(function(){
    $(this).addClass('transition');
});
});
