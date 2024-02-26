// Assuming jQuery is included in your HTML

$(document).ready(function() {
  // Select the slideshow container
  var slideShow = $('.slideall');

  // Set up automatic slide transition
  slideShow.slick({
    dots: true, // Use dots for navigation (optional)
    infinite: true, // Loop through slides infinitely
    autoplay: true, // Start slideshow automatically
    autoplaySpeed: 3000, // Change slide every 3 seconds (adjust as desired)
    fade: true, // Use fade transition between slides (optional)
    arrows: false, // Remove navigation arrows as requested
    // Add other customization options as needed
  });

  // Pause/resume on hover (optional)
  slideShow.on('mouseenter mouseleave', function(event) {
    if (event.type === 'mouseenter') {
      slideShow.slick('slickPause');
    } else {
      slideShow.slick('slickPlay');
    }
  });
});
