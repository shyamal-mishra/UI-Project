(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    

    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Get the login form element
  // Function to open the login popup
  function openPopup() {
    $('#loginPopup').fadeIn();
}


// Function to close the login popup
function closePopup() {
    $('#loginPopup').fadeOut();
}

// Event listener to open the popup when the button is clicked
$('#registerButton').on('click', function(event) {
    event.preventDefault();
    openPopup();
});

// Event listener to close the popup when the close button is clicked
$('.close').on('click', closePopup);

// Event listener to handle form submission when submit button is clicked
$('#loginForm').on('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Here, you can add your code to handle form submission,
    // such as validating input values, sending data to server, etc.
    
    // For example, you can log the form data to console for testing
    var formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Close the popup after form submission
    closePopup();
});


new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      768: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  }).mount();


  function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.yourwebsite.com/trip-page', '_blank');
  }
  
  function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=https://www.yourwebsite.com/trip-page', '_blank');
  }
  
  function shareOnInstagram() {
    // Instagram doesn't provide direct sharing via URL, so you may need to use an external service or guide users on how to share.
    alert('Sharing on Instagram is not supported directly. You can guide users on how to share manually.');
  }
  

                
})(jQuery);

