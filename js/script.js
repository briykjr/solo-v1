// Preloader Disaprear
$(window).on('load', function () {
    $('.status').fadeOut();
    $('#preload').delay(500).fadeOut('slow');
    $(".navbar-brand").fadeIn();
});

//change Navbar when scrolling
$(function () {
    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            $("#backTop").fadeIn();
            // Show white nav
            $("nav").addClass("navbar-wh-bg");

            // Show dark logo
            $(".navbar-brand img").attr("src", "assets/logo/logo.png");

        } else {
            $("#backTop").fadeOut();
            // Hide white nav
            $("nav").removeClass("navbar-wh-bg");

            // Show logo
            $(".navbar-brand img").attr("src", "assets/logo/logo-wh.png");

        }
    }
});
//Smooth Scrolling
$( function() {
    $("a.smooth-scroll").on('click', function(e) {
        e.preventDefault();
        var sectionId = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(sectionId).offset().top - 75,
        }, 1000);
    });

});
//add owl carousel
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });
    $('#testimonials-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });
    $('#testimonials-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });
    $('#clients-wrapper').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });
   
});

// animate progress bar

$(function () {
    //waypoint plugin to trigger when scrolling
    $('#progress-status').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1500)
        });
        this.destroy(); // make it trigger for just once

    }, {
        offset: 'bottom-in-view'
    });

});
// add Reposive Tabs
$( function() {
    $('#services-tabs').responsiveTabs({
        animation: 'slide',
        animationQueue: 'accordion',
    });
});

//trigger filter
$(function() {
    var $grid = $('#isotope-container').isotope({
        // options
      });
      // filter items on button click
      $('#isotope-filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
      });
});
//trigger gallery
$(function() {
    $('.work-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
      });
});

//Triggr Counter
$(window).on('load', function () {

    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});


//Animation
$(function() {
    new WOW().init();
});