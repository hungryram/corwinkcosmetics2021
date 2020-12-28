$('.product-slide').slick({
    infinite: true,
    dots: false,
    adaptiveHeight: true,
    speed: 1000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='/assets/chevron-left.svg' width='20' title='previous'></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><img src='/assets/chevron-right.svg' width='20' title='next'></button>",
    });

    $('.other-products').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    $( function() {
      $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
      });
    });