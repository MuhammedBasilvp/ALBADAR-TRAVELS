$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  $(function() {
    /* mobile menu */
    $('.mobile.ham_menu').on('click', function(){ $('.ham_menu_wrapper').addClass('open'); })
    $('.close_ham_menu').on('click', function(){ $('.ham_menu_wrapper').removeClass('open'); })

    /* Slick Carousel - use data-slick to config */
    $('.j2_slick_carousel').slick();

    /* product images */
    $('body.product .banner .thumb').on('click', function(){ $('body.product .banner .full_img img').attr('src', $($(this).children('img')[0]).attr('src')); })
});