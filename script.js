$(document).ready(function(){
    $('a[href^="#"]').click(function(){ //берем все ссылки атрибут href которых начинается с #
      if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000); // анимируем скролл к элементу
      }     
      return false;
    });
});
$(document).ready(function(){
    $('a[href^="#"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
      var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
      if($element.length == 1) { //на странице есть только 1 элемент с указанным якорем
         $('html, body').animate({ scrollTop: $element.offset().top }, 2000); // анимируем скролл к элементу
      }     
      return false;
    });
});
