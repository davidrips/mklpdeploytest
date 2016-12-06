$(document).ready(function(){



    $('#myForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("clicked");

            var first = $('#inputFirstName').val()
            var last = $('#inputLastName').val() 
            var email = $('#inputEmail').val()

            $.post('/signup', {
                first: $('#inputFirstName').val(),
                last: $('#inputLastName').val(), 
                email: $('#inputEmail').val()
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $('#newModalTitle').text("Welcome to myKlovr " + first)
                    $('#newModal').modal();
                    }
            )
        }
    })

     var controller = new ScrollMagic.Controller({loglevel: 3});
// if(!Modernizr.touchevents){

//     console.log('hiiii');

//     var enterAnim1 = TweenMax.to($("#secondpgcontent1"), 1, {left:0, ease:"Power2.easeInOut"});
//     var enterAnim2= TweenMax.to($("#secondpgcontent1a"), 1, {right:0, ease:"Power2.easeInOut"});
//     var enterAnim3= TweenMax.to($("#secondpgcontent1b"), 1, {left:0, ease:"Power2.easeInOut"});
//     var qlcircle= TweenMax.to("#qlcirc", 1, {width: '50%', rotation: "360", ease:"Power2.easeInOut" })
//     var shrinkCircle = TweenMax.to($("#qlcirc"), 1, {width: '0%', height:"0%", rotation:"-360", ease: "Power2.easeInOut"});
//     var bringouttools= TweenMax.to($("#svgrow"),2,{scale:1, ease: "Power2.easeInOut"})
//     var bringouttools2= TweenMax.to($("#svgrow"),2,{height:"20vh", ease: "Power2.easeInOut"})
//     var changelamp = TweenMax.to($(".testsvgblue"), 1, {fill:"white"})
//     var blinkarrows = TweenMax.fromTo($(".svgarrow"), 1, {fill:"#45A2D9"}, {fill:"#FED139", repeat: -1, repeatDelay:2,ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})});
//     var hidepinned = TweenMax.to($("#missioncont"), .1, {visibility:"hidden"});
//     var drawscribs = new TimelineMax()
//         .add(TweenMax.to($("#svgscrib2"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#svgscrib1"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#svgscrib3"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))

//     var a = 100;

   

//     var scene1a = new ScrollMagic.Scene({triggerElement: '#probquest', triggerHook: 'onLeave', duration:"90%"}).setPin("#probquest").addTo(controller);
//     var scene1 = new ScrollMagic.Scene({triggerElement: "#probquest", duration: "50%"}).setTween(enterAnim1).addTo(controller);
//     var scene2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "60%", offset: "15%"}).setTween(enterAnim2).addTo(controller);
//     var scene3 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "60%", offset: "15%"}).setTween(enterAnim3).addTo(controller);
//     var scene4 = new ScrollMagic.Scene({triggerElement: "#probquest", duration: "80%"}).setTween(qlcircle).addTo(controller);
//     var scene6 = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.5",duration:"25%"}).setTween(shrinkCircle).addTo(controller);
//     var testnew = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.1"}).setPin("#missioncont",{spacerClass:"controw2spacer"}).addTo(controller);
//     var scene13 = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.2", duration:"40%"}).setTween(bringouttools2).addTo(controller);
//     var scene13a= new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.2", duration:"50%"}).setTween(bringouttools).addTo(controller);
//     var scene14 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:'14', duration:"150%"}).setPin("#controw5", {pushFollowers: false}).addTo(controller);
//     var scene15 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"60%"}).setTween(changelamp).addTo(controller);
//     var scene16 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave"}).setTween(blinkarrows).addTo(controller);
//     var scene17 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"80%"}).setTween(drawscribs).addTo(controller);
//     var scene19 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"0"}).setTween(hidepinned).addTo(controller)
//     var drawGraphs = new TimelineMax()
//         .add(TweenMax.to($("#barsvgy1"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgp1"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgy2"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgp2"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgy3"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgp3"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.staggerTo($(".linepdots"),.5,{opacity: 1, ease:Linear.easeNone}, 0.2))
//         .add(TweenMax.to($(".pline"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.staggerTo($(".lineydots"),.5,{opacity: 1, ease:Linear.easeNone}, 0.2))
//         .add(TweenMax.to($(".yline"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#gr"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#gy"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#gg"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
      

//     var scene20 = new ScrollMagic.Scene({triggerElement:"#pinContainer", triggerHook:"onLeave", offset:14, duration:"200%"}).setPin("#pinContainer", {pushFollowers:true}).addTo(controller);
//     var scene21 = new ScrollMagic.Scene({triggerElement:"#pinContainer", triggerHook:0, offset:30, duration:"90%"}).setTween(drawGraphs).addTo(controller);
//     var g;
//     var h = $("#secondpgcontent3").css('height');
//     function spc3Height(size)
//         {
//             var size2 = size.substring(0, size.length-2);
//             var size3 = parseInt(size2);
//             var size4 = size3 * 1.05;
//             g = size4
//         }
//     spc3Height(h);
//     var makedots= new TimelineMax()
//         .add(TweenMax.to($(".bigconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),0)
//         .add(TweenMax.to($(".yellowconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),1)
//         .add(TweenMax.to($(".iconcongrp"), 0.9,{opacity:"1", ease:Linear.easeNone}),2)
//         .add(TweenMax.to($(".littleconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),3)
//         .add(TweenMax.to($("#conright"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#conbottom"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#contop"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#conleft"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#conleft2"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         // .add(TweenMax.to($("#secondpgcontent7"), 5, {right:"300%", ease:"Power2.easeInOut"}),5)
//         .add(TweenMax.to($("#secondpgcontent7a"), 5, {left:"0%", ease:"Power2.easeInOut"}),4)


//     var sr6a = new ScrollMagic.Scene({triggerElement: '#screen6o',triggerHook: 0, offset: '14',
//     duration:"300%"}).setPin("#screen6o", {pushFollowers:false}).addTo(controller);
//     var sr6b = new ScrollMagic.Scene({triggerElement: '#svg6wrap', triggerHook: "onLeave",  duration:"200%"}).setPin('#svg6wrap', {pushFollowers:false}).addTo(controller);
//     sr6b.offset(g*-1);
//     var sr6c = new ScrollMagic.Scene({triggerElement: '#screen6b', triggerHook: 0.8,  duration:"100%"}).setPin('#screen6b', {pushFollowers:false}).addTo(controller);
//     var con = new ScrollMagic.Scene({triggerElement: '#connectContainer', triggerHook: "onLeave", offset:"14", duration:"500%"}).setPin('#connectContainer', {pushFollowers:true}).addTo(controller);
//      var con1move= TweenMax.to($("#secondpgcontent7"), 1, {right:0, ease:"Power2.easeInOut"});
//     var con1 = new ScrollMagic.Scene({triggerElement: '#connectContainer', triggerHook: "onLeave", offset:"14"}).setTween(con1move).addTo(controller);
//     var drawConAnim2= new ScrollMagic.Scene({triggerElement:"#connectContainer", triggerHook:"onLeave", duration:"400%"}).setTween(makedots).addTo(controller);

// }else{
//     console.log('touchin');

//     var blinkarrows = TweenMax.fromTo($(".svgarrow"), 1, {fill:"#45A2D9"}, {fill:"#FED139", repeat: -1, repeatDelay:2,ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})});

//     var drawscribs = new TimelineMax({repeat:-1})
//         .add(TweenMax.to($("#svgscrib2"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),1)
//         .add(TweenMax.to($("#svgscrib1"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),3)
//         .add(TweenMax.to($("#svgscrib3"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),5)

     
//       var drawGraphs = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
//       .add(TweenMax.to($("#barsvgy1"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgp1"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgy2"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgp2"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgy3"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#barsvgp3"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.staggerTo($(".linepdots"),.4,{opacity: 1, ease:Linear.easeNone}, 0.2))
//         .add(TweenMax.to($(".pline"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.staggerTo($(".lineydots"),.4,{opacity: 1, ease:Linear.easeNone}, 0.2))
//         .add(TweenMax.to($(".yline"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#gr"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#gy"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
//         .add(TweenMax.to($("#gg"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))

//     var makedots= new TimelineMax({repeat:-1, repeatDelay:1, yoyo:true})
//         .add(TweenMax.to($(".bigconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),0)
//         .add(TweenMax.to($(".yellowconcircles"), 0.5,{opacity:"1", ease:Linear.easeNone}),1)
//         .add(TweenMax.to($(".iconcongrp"), 0.5,{opacity:"1", ease:Linear.easeNone}),2)
//         .add(TweenMax.to($(".littleconcircles"), 0.3,{opacity:"1", ease:Linear.easeNone}),3)
//         .add(TweenMax.to($("#conright"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#conbottom"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#contop"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#conleft"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
//         .add(TweenMax.to($("#conleft2"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
// }


    $(".is-light").each(function(index, elem){

        var height = $(elem).height()
        console.log(height);
        console.log(typeof height);
        var makeDark = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'#3c3d65'})

        new ScrollMagic.Scene({
            triggerElement:elem, duration:'"'+height+'px"', triggerHook:"0.03"
        }).setTween(makeDark).addTo(controller);

    })

     $(".need-light").each(function(index, elem){
        var makeLight = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'white'});

           new ScrollMagic.Scene({
            triggerElement:elem, triggerHook:"0.03"
        }).setTween(makeLight).addTo(controller);

    })

     var homeButton = $("#homeButton");
     homeButton.on('click', function(e){
        $(window).scrollTo('#slideOne', {duration:800, ease: Power4.easeInOut})
     })



    

    var keylink =$("#keysvg");
    var keyjig = new TimelineMax({repeat: -1, yoyo:true, repeateDelay:1})
    .add(TweenMax.fromTo(keylink, 0.7, {rotation:"-15"},{rotation:"15", ease: Back.easeOut.config(1.7)}))
  
    keylink.click(function(e){
        console.log("keyclicked");
        e.preventDefault();
        $(window).scrollTo(0, {duration:800, ease: Power4.easeInOut});
    })

    var home =$("#home")
    var about =$("#about")
    var end =$("#end")

    home.click(function(e){
        e.preventDefault();
         $(window).scrollTo(0, {duration:700, ease: Power4.easeInOut});
    })

    about.click(function(e){
        e.preventDefault();
         $(window).scrollTo("#section2", {duration:700, ease: Power4.easeInOut});
    })

    end.click(function(e){
        e.preventDefault();
         $(window).scrollTo("#section3", {duration:700, ease: Power4.easeInOut});
    })
    // var mhome = document.getElementById('#mhome')
    // $('#mhome').click(function(e){
    //       e.preventDefault();
    //     console.log('mhomeclicked');
    //     closeNav();
    //     $(window).scrollTo(0, {duration:800, ease: Power4.easeInOut});
    // })

    function toUser(userType){

        if(userType == 'uni'){
            $(window).scrollTo("#screen4container", {duration:800, ease: Power4.easeInOut});
        }else if(userType == 'company' ){
            $(window).scrollTo("#screen5container", {duration:800, ease: Power4.easeInOut});
        }else if(userType =='ads'){
            $(window).scrollTo("#screen6container", {duration:800, ease: Power4.easeInOut});
        }else if(userType =='exchange'){
            $(window).scrollTo("#screen7container", {duration:800, ease: Power4.easeInOut});
        }else if(userType =='hr'){
            $(window).scrollTo("#screen8container", {duration:800, ease: Power4.easeInOut});
        }else if(userType=='what'){
            $(window).scrollTo("#screen9container", {duration:800, ease: Power4.easeInOut});
        }

    }

   

      $(".imgcontainer1").click(function(){
         let userType = $(this).data('user')
         toUser(userType)
    })

       $(function(){
            $('.screen4').matchHeight();
            $('.bdytxt1').matchHeight();
            $('.bdytxt2').matchHeight();
            $('.bdytxt3').matchHeight();
        })

       $.fn.matchHeight._rows($('.bdytxt1'));

      $(".menuButs").click(function(e){
        let goWhere = $(this).data('where');
        console.log(goWhere);
        e.preventDefault();
        closeNav();
        toUser(goWhere)
      })

    //  $("#mwho").click(function(e){
    //       e.preventDefault();
    //      closeNav();
    //     $(window).scrollTo("#screen2container", {duration:800, ease: Power4.easeInOut});
    // })

    // $("#mvalues").click(function(e){
    //       e.preventDefault();
    //      closeNav();
    //     $(window).scrollTo("#screen3container", {duration:800,ease: Power4.easeInOut});
    // })

    // $("#mstudents").click(function(e){
    //       e.preventDefault();
    //      closeNav();
    //     $(window).scrollTo("#screen4container", {duration:800, ease: Power4.easeInOut});
    // })

    // $("#mparents").click(function(e){
    //       e.preventDefault();
    //      closeNav();
    //     $(window).scrollTo("#screen5container", {duration:800, ease: Power4.easeInOut});
    // })

    // $("#meducators").click(function(e){
    //       e.preventDefault();
    //      closeNav();
    //     $(window).scrollTo("#screen6container", {duration:800, ease: Power4.easeInOut})
    // })



    // var mabout = document.getElementById('#mabout')
    // $("#mabout").click(function(e){
    //       e.preventDefault();
    //     console.log('mabclicked');
    //      closeNav();
    //     $(window).scrollTo("#section2", {duration:800, ease: Power4.easeInOut});
    // })
    // var mend = document.getElementById('#mend')
    // $('#mend').click(function(e){
    //       e.preventDefault();
    //     console.log('mhemdclicked');
    //      closeNav();
    //      $(window).scrollTo("#section3", {duration:800, ease: Power4.easeInOut});
    // })


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
        document.getElementById("mySidenav").style.width = "30vw";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";

    }


})