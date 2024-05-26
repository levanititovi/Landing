
    $(function() {
        $(".project").on('click', function() { 
            $(this).parent().find('.details').slideDown();
        });

        $(".details").on('click', function() {
            $(this).closest('.details').slideUp();
        });
    
        
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          autoplay: {
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
         
          250: {
            slidesPerView: 2.2,
            spaceBetween: 200
          },
          
          480: {
            slidesPerView: 2.8,
            spaceBetween:200 
          },
          
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        },
        speed:1500,
        loop:true,
      });

      var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        
        autoplay: {
            
            disableOnInteraction: false,
          },
          autoplay: {
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
         
          250: {
            slidesPerView: 2.2,
            spaceBetween: 200
          },
          
          480: {
            slidesPerView: 2.8,
            spaceBetween:200 
          },
          
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        },
        speed:2500,
        loop:true,
      });
   