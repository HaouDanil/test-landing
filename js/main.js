
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
});
