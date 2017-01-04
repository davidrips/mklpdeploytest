$(document).ready(function(){
function toPlan(whereTo){

    if(whereTo == '1'){
        $(window).scrollTo("#t1", {duration:800, ease: Power4.easeInOut});
    }else if(whereTo == '2' ){
        $(window).scrollTo("#t2", {duration:800, offset:-30, ease: Power4.easeInOut});
    }else if(whereTo =='3'){
        $(window).scrollTo("#t3", {duration:800, offset:-30, ease: Power4.easeInOut});
    }else if(whereTo =='4'){
        $(window).scrollTo("#t4", {duration:800, offset:-30, ease: Power4.easeInOut});
    }

}



  $(".planScroll").click(function(){
     var whereTo = $(this).data('where')
     toPlan(whereTo)
})

var home =$("#homeButton")

home.click(function(e){
    e.preventDefault();
     $(window).scrollTo(0, {duration:700, ease: Power4.easeInOut});
})

if(!Modernizr.touchevents){
     $("html").addClass('desktop')}


var sidenavtrig = $("#sidenavtrig")
var sidenavclose= $(".closebtn")

sidenavtrig.click(function(e){
    e.preventDefault()
    openNav()
})

sidenavclose.click(function(e){
    e.preventDefault()
    closeNav()
})


 function openNav() {

    if ($("html").hasClass("desktop")){
        document.getElementById("mySidenav").style.width = "30vw";

    }else {
       document.getElementById("mySidenav").style.width = "50vw"; 
    }
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}


var controller = new ScrollMagic.Controller();


$(".is-light").each(function(index, elem){

    var height = $(elem).height()
    var makeLight = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'white'});
    var makeDark = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'#3c3d65'})
    var isLight = new ScrollMagic.Scene({
        triggerElement:elem, triggerHook:"0.03"
    }).setTween(makeDark).addTo(controller)

})

 $(".need-light").each(function(index, elem){
    var makeLight = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'white'});
    var makeDark = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'#3c3d65'})
    var isDark = new ScrollMagic.Scene({
        triggerElement:elem, triggerHook:"0.03"
    }).setTween(makeLight).addTo(controller);
})








 function toPlan(whereTo){

     if(whereTo == '1'){
         $(window).scrollTo("#t1", {duration:800, ease: Power4.easeInOut});
     }else if(whereTo == '2' ){
         $(window).scrollTo("#t2", {duration:800, offset:-30, ease: Power4.easeInOut});
     }else if(whereTo =='3'){
         $(window).scrollTo("#t3", {duration:800, offset:-30, ease: Power4.easeInOut});
     }else if(whereTo =='4'){
         $(window).scrollTo("#t4", {duration:800, offset:-30, ease: Power4.easeInOut});
     }else if(whereTo =='5'){
         $(window).scrollTo("#t5", {duration:800, offset:-30, ease: Power4.easeInOut});
     }else if(whereTo =='6'){
         $(window).scrollTo("#t6", {duration:800, offset:-30, ease: Power4.easeInOut});
     }

 }


 

   $(".menuButs").click(function(){
      var whereTo = $(this).data('where')
      closeNav()
      toPlan(whereTo)
 })














});
