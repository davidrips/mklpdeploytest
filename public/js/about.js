$(document).ready(function(){


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block";

    }



    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $(document).on('submit', ".signUpForm", function(e) {
        console.log('inhere');
        e.preventDefault();
        var modal = document.getElementById('myModal');
         modal.style.display = "block";
   

            console.log(e);
            console.log(e.target[0].value);

            var email = e.target[0].value;
          
          console.log(email);
            
            signUpComplete(email, "first", "last")
            $("input").val('')
            return false;
        });



    function signUpComplete(email, first, last){
          console.log("INsignupcomplete");
           $.post('/signup', {
                first: first,
                last: last, 
                email: email
            }, function(data){
                          }
            )
    }





var home =$("#homeButton")

home.click(function(e){
    e.preventDefault();
     $(window).scrollTo(0, {duration:700, ease: Power4.easeInOut});
})

     var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
     var isFirefox = typeof InstallTrigger !== 'undefined';

     if (isSafari == true){
         $("html").addClass('safari')
         console.log('using safari');
     };

     if (isFirefox == true){
        console.log('ur using firefox lol');
         $("html").addClass('firefox')
     };
if(!Modernizr.touchevents){
     $("html").addClass('desktop')}


var sidenavtrig = $("#sidenavtrig")
var sidenavclose= $(".closebtn")
    var sidenavtrig2 = $("#sidenavtrig2")
     sidenavtrig2.click(function(e){
      console.log('clicked ham');
        e.preventDefault()
        openNav()
    })


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


$("#investClick").on('click', function(event) {
    console.log("clicked");
      $("#investModal").modal();
});

$("#investButton").on("click", function(event){
    console.log('submitting password');


       $.post('/invest', {
                username: "invest",
                investPass: $("#investText").val(), 
            }, function(data){
                console.log(data);
                 // window.location.href = 'www.google.com'
                 $("#newModalBody").append("<a id='accessLink' href='https://"+data+"'>Access</a>")

         
                          }
            )
})













});
