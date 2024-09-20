
  $(document).ready(function(){
      $('.slider').slick({
          prevArrow: '<button type="button" class="slick-prev"><img src="img/왼쪽화살표.png" alt="Previous"></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="img/오른쪽화살표.png" alt="Next"></button>',
          centerMode: true,        
          centerPadding: '30%',    
          slidesToShow: 1,         
          autoplay: true,         
          autoplaySpeed: 2000,   
          dots: false,          
          arrows: true,        
          responsive: [
          {
            breakpoint: 768,    
            settings: {
              slidesToShow: 1,   
              centerPadding: '0' 
            }
          }
        ]
      });
    });

