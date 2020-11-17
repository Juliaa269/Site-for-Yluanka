$(document).ready(function(){
    $('a[href^="#"]').click(function(){ //берем все ссылки атрибут href которых начинается с #
      if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000); // анимируем скролл к элементу
      }     
      return false;
    });
});
// $(document).ready(function(){
//     $('a[href^="#"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
//       let $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
//       if($element.length == 1) { //на странице есть только 1 элемент с указанным якорем
//          $('html, body').animate({ scrollTop: $element.offset().top }, 2000); // анимируем скролл к элементу
//       }     
//       return false;
//     });
// });

$(() => {
  function burgerMenu(selector) {
  let menu = $(selector);
  let button = $('.burger-menu_button');
  let links = $('.burger-menu_link');
  let overlay = $('.burger-overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');
    if(menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');
});
