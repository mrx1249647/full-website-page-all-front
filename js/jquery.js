
let aboutOffset = $("#about").offset().top;


$(window).scroll(function () { 
 let WScrol =   $(window).scrollTop();

 if(WScrol > aboutOffset -50){
    $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5)");
    $("#main-nav").css("padding", "0px 50px");
    $("#btnUp").fadeIn(500);
 }else{
    $("#main-nav").css("backgroundColor", "transparent");
    $("#main-nav").css("padding", "0px 0px");
    $("#btnUp").fadeOut(500);
 }
});
$("#btnUp").click(function(){
$("html,body").animate({scrollTop:0},2000)

});
$("a").click(function(e){
    
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},2000)

});
$("#toggleicon").click(function (){
// $("#colorsBox").toggle(500);
let colorboxwidth = $("#colorsBox").innerWidth();
if($("#sideBar").css("left") == "0px"){
    $("#sideBar").animate({left:`-${colorboxwidth}`} , 1000)
}else{
    $("#sideBar").animate({left:`0px`} , 1000)

}

});
let colorBox = $(".color-box");
colorBox.eq(0).css("backgroundColor", "green");
colorBox.eq(1).css("backgroundColor", "#09c");
colorBox.eq(2).css("backgroundColor", "orange");
colorBox.eq(3).css("backgroundColor", "teal");
colorBox.eq(4).css("backgroundColor", "lightgreen");
colorBox.eq(5).css("backgroundColor", "aqua");
colorBox.click(function(e){
let MyColor = $(e.target).css("backgroundColor")
$("p,h2").css("color",MyColor)

});