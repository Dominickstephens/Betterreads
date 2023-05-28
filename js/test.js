$(document).ready(function(){

  $('#itemslider').carousel({ interval: 3000 });

  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();

      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
});




function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".sample-section").offset().top;
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-section").css({ "margin-top": header_height });
  $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});
