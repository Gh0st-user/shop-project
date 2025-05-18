$(document).ready(function(){
    // FOR SIDE SIDE_BAR SCROLL
    $("#menu_icon").click(function(){
        $(".side_bar").toggleClass("side_bar_toggle");
        $("#menu_icon_2").css("transform", "scale(1)");
        $("#menu_icon_2").css("left", "0px");
        $("#menu_icon").css("transform", "scale(0)");
    });

    $("#menu_icon_2").click(function(){
        $(".side_bar").toggleClass("side_bar_toggle");
        $("#menu_icon_2").css("transform", "scale(0)");
        $("#menu_icon_2").css("left", "-25px");
        $("#menu_icon").css("transform", "scale(1)");
    });


    // FOR DROPDOWN (SERVICES_MENU)
    $("#service_icon").click(function(){
        $(".drop_down").toggleClass("d-none");
    });

});