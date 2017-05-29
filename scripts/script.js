$(document).ready(function() {
  var createDiv= function(number) {
    for (var i = 0; i < Math.pow(number, 2); i++) {
      $('#draw').prepend('<div></div>');
  };
  $('#draw div').css("height", (400/number-3)+"px");
  $('#draw div').css("width", (400/number-3)+"px");
};
  createDiv(16);
  $('button').click(function(){
    $('#draw div').remove();
    var res=prompt("Введите размерность поля");
    createDiv(res);
  })
  $('#draw div').hover(function(){
    $(this).addClass('active');
  });
});
