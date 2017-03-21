$(document).ready(function() {
    var autoplaySlider = $('#lightSlider').lightSlider({
        auto:false,
        loop:false,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
