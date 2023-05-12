$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').on('shown.tooltip', function() {
      $('.tooltip').addClass('animate__animated animate__bounce');
    })
  })

$('#owl-banner').owlCarousel({
  loop:true,
  margin:10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  animateOut: 'fadeIn',
  touchDrag  : false,
mouseDrag  : false,

  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
       
          items:1,
          nav:false
      },
      1000:{

        animateOut: 'fadeOut',
          items:1,
          nav:false,
      }
  }
})
$('#owl-one').owlCarousel({
  loop:true,
  margin:10,
  loop: true,
  responsiveClass:true,
  dots:false,
  responsive:{
      0:{
          items:2,
          nav:false
      },
      480:{
        items:2,
        nav:false
      },  
      600:{
          items:4,
          nav:false
      },
      1000:{
          items:6,
          nav:false,
      }
  }
})
$('#owl-three').owlCarousel({
  loop:true,
  margin:10,
  loop: true,
  responsiveClas:true,
  responsive:{
      0:{
          items:2,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:false,
      }
  }
})
$('#owl-eight').owlCarousel({
  loop:true,
  margin:20  ,
  loop: true,
  dots:false,
  nav:true,
  navText: [
    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
],
  responsiveClas:true,
  responsive:{
      0:{
          items:2,
          nav:true,

        },
      600:{
          items:3   ,
          nav:true,

      },
      1000:{
          items:4,
          nav:true,

      }
  }
})
$('#owl-five').owlCarousel({
  loop:true,
  margin:20  ,
  loop: true,
  dots:false,
  navText: [
    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
],
  nav:true,
  responsiveClas:true,
  responsive:{
      0:{
          items:2,
          nav:true,

        },
      600:{
          items:3,
          nav:true,

      },
      1000:{
          items:4,
          nav:true,

      }
  }
})


$(document).ready(function ($) {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    items: 3,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      680:{
          items:1,
          nav:false
      },
      900:{
          items:2,
          nav:false,
        
      },
      1100:{
          items:3,
          nav:false,
      }
  }
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".prev-btn").addClass("disabled");
  $(owl).on("translated.owl.carousel", function (event) {
    if ($(".owl-prev").hasClass("disabled")) {
      $(".prev-btn").addClass("disabled");
    } else {
      $(".prev-btn").removeClass("disabled");
    }
    if ($(".owl-next").hasClass("disabled")) {
      $(".next-btn").addClass("disabled");
    } else {
      $(".next-btn").removeClass("disabled");
    }
  });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';

var slides = sync1.owlCarousel({
	video:true,
  startPosition: 12,
  items:1,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:6000,
  autoplayHoverPause:false,
  nav: false,
  dots: true
}).on('changed.owl.carousel', syncPosition);

function syncPosition(el) {
  $owl_slider = $(this).data('owl.carousel');
  var loop = $owl_slider.options.loop;

  if(loop){
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    if(current < 0) {
        current = count;
    }
    if(current > count) {
        current = 0;
    }
  }else{
    var current = el.item.index;
  }

  var owl_thumbnail = sync2.data('owl.carousel');
  var itemClass = "." + owl_thumbnail.options.itemClass;


  var thumbnailCurrentItem = sync2
  .find(itemClass)
  .removeClass("synced")
  .eq(current);

  thumbnailCurrentItem.addClass('synced');

  if (!thumbnailCurrentItem.hasClass('active')) {
    var duration = 300;
    sync2.trigger('to.owl.carousel',[current, duration, true]);
  }   
}
var thumbs = sync2.owlCarousel({
  startPosition: 12,
  items:4,
  loop:false,
  margin:20,
  autoplay:false,
  nav: false,
  dots: false,
  onInitialized: function (e) {
    var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
    thumbnailCurrentItem.addClass('synced');
  },
})
.on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });
