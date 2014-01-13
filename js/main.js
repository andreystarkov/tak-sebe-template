

    $(function(){
        $('.go').click(function(){
                $('.pf-form-feedback', $(this).parent()).fadeToggle();
        });
    });

    $(window).load(function() {
        $('#slider').nivoSlider();
        $('.pf-slider').nivoSlider();
    });
