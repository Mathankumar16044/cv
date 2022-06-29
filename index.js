$(".burger").on("click",function(){
    $("span.line").addClass("bef");
    $(".menus").toggleClass('open');
});
$(".menus .burger").on("click",function(){
    $(".menus").removeClass('.open');
});
$( document ).ready(function() {
    $(".navs").clone().appendTo(".menus");
    $(".burgers").clone().appendTo(".menus .navs");
});