
$(window).load(function() {
  $(".before-after").twentytwenty({
  before_label: 'Witout kitchenette', //set a custom before label
  after_label: 'With kitchenette'  //set a custom after label
  });
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass:'before-slider__dots',
    prevArrow:$(".arrow-left"),
    nextArrow:$(".arrow-right")
  });
  $('.navbar__menu-btn').on('click', function(){
    $('.menu').toggleClass('menu_active');
  });
  // Make setting for select 
  $('.select__checked').on('click', function(){
    $('.select__dropdown').toggleClass('select__dropdown_open')
  });
  $('.select__option').on('click', function(){
    let value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select__checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $("a[href^='#']").click(function(){
    let _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top -120 + "px"});
    return false;
  });
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
  //Show map only when user scrolled up to her
  let reviews = $('.reviews');
  let reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function(){
    let windowTop = $(this).scrollTop();
    if(windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6be7d7a1cb2b04a050e87108f0f9ff08906ee7ef7ff5b9f8aa451112bcdd0b3a&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind();
    }
  });
});
