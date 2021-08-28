



$(document).ready(function(){


   // preloader start

   setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 1500);
  // preloader end

    // banner slider......
    $('.single-banner').slick({
        dots:true,
        prevArrow: '<span class="priv_arrow_ban"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="next_arrow_ban"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
        responsive: [{
          breakpoint: 559,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
      ]
    });
    // venobox.....
    $('.venobox').venobox({
        framewidth : '500px',                            
        frameheight: '400px',                            
    }); 
    // gallery....
    $('.gall-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="priv_arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="next_arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 559,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
  
    // team slider......
    $('.team-slide').slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 559,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
    // testimonial slider......
    $('.testimonial-slide').slick({ 
        prevArrow: '<span class="priv_arrow_test"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>',
        nextArrow:'<span class="next_arrow_test"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>',
        vertical:true,
        responsive: [{
          breakpoint: 559,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
      ]
    });
    // brand slider.....
    $('.brand-slide').slick({ 
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 559,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  });
    //   counterup....
    $('.counter').counterUp({
      time: 4000
  });


  // back to top btn script start
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var topBtn = document.getElementById("b-to-t");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.right = "45px";
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.right = "-100px";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top script end


 

  


 

  
