// Modal script

    // Get the modal
    var modal_t = document.getElementById("temp_modal");
    var modal_h = document.getElementById("humid_modal");
    var modal_c = document.getElementById("co2_modal");
    var modal_l = document.getElementById("light_modal");
    var modal_w = document.getElementById("water_modal");
    var modal_f = document.getElementById("fert_modal");

    // Get the button that opens the modal
    var btn_t = document.getElementById("temp");
    var btn_h = document.getElementById("humid");
    var btn_c = document.getElementById("co2");
    var btn_l = document.getElementById("light");
    var btn_w = document.getElementById("water");
    var btn_f = document.getElementById("fert");

    // Get the <span> element that closes the modal
    var span_t = document.getElementById("span_t");
    var span_h = document.getElementById("span_h");
    var span_c = document.getElementById("span_c");
    var span_l = document.getElementById("span_l");
    var span_w = document.getElementById("span_w");
    var span_f = document.getElementById("span_f");

    // When the user clicks the button, open the modal 
    btn_t.onclick = function () {
        modal_t.style.display = "block";
    }
    btn_h.onclick = function () {
        modal_h.style.display = "block";
    }
    btn_c.onclick = function () {
        modal_c.style.display = "block";
    }
    btn_l.onclick = function () {
        modal_l.style.display = "block";
    }
    btn_w.onclick = function () {
        modal_w.style.display = "block";
    }
    btn_f.onclick = function () {
        modal_f.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span_t.onclick = function () {
        modal_t.style.display = "none";
    }
    span_h.onclick = function () {
        modal_h.style.display = "none";
    }
    span_c.onclick = function () {
        modal_c.style.display = "none";
    }
    span_l.onclick = function () {
        modal_l.style.display = "none";
    }
    span_w.onclick = function () {
        modal_w.style.display = "none";
    }
    span_f.onclick = function () {
        modal_f.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal_t) {
            modal_t.style.display = "none";
        }
        if (event.target == modal_h) {
            modal_h.style.display = "none";
        }
        if (event.target == modal_c) {
            modal_c.style.display = "none";
        }
        if (event.target == modal_l) {
            modal_l.style.display = "none";
        }
        if (event.target == modal_w) {
            modal_w.style.display = "none";
        }
        if (event.target == modal_f) {
            modal_f.style.display = "none";
        }
    }



// Modal SUBMIT button animation script 

    document.getElementById("submit_t").innerHTML = "Submit";
    document.getElementById("submit_h").innerHTML = "Submit";
    document.getElementById("submit_c").innerHTML = "Submit";
    document.getElementById("submit_l").innerHTML = "Submit";
    document.getElementById("submit_w").innerHTML = "Submit";
    document.getElementById("submit_f").innerHTML = "Submit";
    $("button").on("click", function () {
        $(this).html('✓');
        $(this).css('background-color', '#10d421'); //#4CD698


        setTimeout(function () {
            $("button").html('Submit');
            $("button").css('background-color', 'black'); //#40B4DE
        }, 1500)
    });



// script for on/off button inside modal 

    $('.cb-value').click(function () {
        var mainParent = $(this).parent('.toggle-btn');
        if ($(mainParent).find('input.cb-value').is(':checked')) {
            $(mainParent).addClass('active');
        } else {
            $(mainParent).removeClass('active');
        }
    })




// script to toggle between red blue white (3 way light input) 

    function filterme(value) {
        value = parseInt(value); // Convert to an integer
        var r = document.getElementById("red");
        var b = document.getElementById("blue");
        var w = document.getElementById("white");
        if (value == 1) {
            $('#custom-toggle').removeClass('tgl-def', 'tgl-off').addClass('tgl-on');
            r.style.display = "none";
            b.style.display = "block";
            w.style.display = "none";
        } if (value == 2) {
            $('#custom-toggle').removeClass('tgl-off', 'tgl-on').addClass('tgl-def');
            r.style.display = "none";
            b.style.display = "none";
            w.style.display = "block";
        } if (value == 3) {
            $('#custom-toggle').removeClass('tgl-def', 'tgl-on').addClass('tgl-off');
            r.style.display = "block";
            b.style.display = "none";
            w.style.display = "none";
        }
    }

    //additional script to move only 1 position left or right
    $('#custom-toggle').data({
        was: $('#custom-toggle').val()
    }).on('input', function () {
        var data = $(this).data();
        $(this).data({
            was: this.value = +data.was + (this.value > data.was || -1)
        });
    });




// Modal Radial slider script 

    //For full documentation on round slider visit 
    //https://roundsliderui.com/

    //card 1 round slider Temperature
    $("#slider_t").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        min: 7,
        max: 40,

        rangeColor: "#f6685e",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_t"
    });
    function round_t(args) {
        return args.value + "°C";
    }

    $("#slider_tin").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        radius: 66,
        width: 5,
        showTooltip: false,

        min: 7,
        max: 40,
        disabled: true,
        rangeColor: "#f54236",

    });

    //card 2 round slider Humidity
    $("#slider_h").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        rangeColor: "#0e99da",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_h"
    });
    function round_h(args) {
        return args.value + "%";
    }

    $("#slider_hin").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        radius: 66,
        width: 5,
        showTooltip: false,
        disabled: true,
        rangeColor: "#0a5b80",

    });

    //card 3 round slider CO2
    $("#slider_c").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        max: 1000,

        rangeColor: "#73888c",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_c"
    });
    function round_c(args) {
        return args.value + "ppm";
    }

    $("#slider_cin").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        radius: 66,
        width: 5,
        showTooltip: false,
        disabled: true,
        rangeColor: "#4c595c",
        max: 1000,

    });

    //card 4 round slider Light (red)
    $("#slider_r").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        rangeColor: "#ff3333",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_r"
    });
    function round_r(args) {
        return args.value + "%";
    }

    //card 4 round slider Light (blue)
    $("#slider_b").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        rangeColor: "#0066ff",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_b"
    });
    function round_b(args) {
        return args.value + "%";
    }

    //card 4 round slider Light (white)
    $("#slider_wh").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        rangeColor: "#ffc14d",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_wh"
    });
    function round_wh(args) {
        return args.value + "%";
    }

    //card 5 round slider Water
    $("#slider_w").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        rangeColor: "#64b5f6",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_w"
    });
    function round_w(args) {
        return args.value + "%";
    }

    $("#slider_win").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        radius: 66,
        width: 5,
        showTooltip: false,
        disabled: true,
        rangeColor: "#148df0"
    });

    //card 6 round slider Fertilizer
    $("#slider_f").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,

        rangeColor: "#85cb34",
        handleShape: "dot",
        mouseScrollAction: true,
        tooltipFormat: "round_f"
    });
    function round_f(args) {
        return args.value + "%";
    }

    $("#slider_fin").roundSlider({
        sliderType: "min-range",
        startAngle: 90,
        svgMode: true,
        radius: 66,
        width: 5,
        showTooltip: false,
        disabled: true,
        rangeColor: "#659b28"
    });


// testing script  

