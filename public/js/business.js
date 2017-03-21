$(document).ready(function(){


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












    $(".arrows").on('click', function(e){
        $(window).scrollTo('#tempContainer2', {duration:800, ease: Power4.easeInOut})

    })

      $("#row1signup").on("click", function(e){
        $('#signModal').modal();
    })


     var controller = new ScrollMagic.Controller({loglevel: 3});

     if(!Modernizr.touchevents){
          $("html").addClass('desktop')
            var vid = $("video").height();
            console.log(vid);
    

  
    $(window).scroll(function(){
      if($(document).scrollTop() > vid){//Here 200 may be not be exactly 200px
        $('video').css('display', 'none');
        console.log('hiding');
      }else{
        if($('video').css('display')=='none'){console.log('wasnt showing');
        $('video').css('display', 'initial');
        }
      }
    });
     }else{
      $(".slideOneArrow").css("display", "none")
     }


    


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
         var userType = $(this).data('user')
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
        var goWhere = $(this).data('where');
        console.log(goWhere);
        e.preventDefault();
        closeNav();
        toUser(goWhere)
      })

   

    var sidenavtrig = $("#sidenavtrig")
    var sidenavclose= $(".closebtn")
    var sidenavtrig2 = $("#sidenavtrig2")
         
    sidenavtrig2.click(function(e){
      console.log('clicked ham');
        e.preventDefault()
        openNav()
    })

    sidenavtrig.click(function(e){
      console.log('clickedHam');
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


})