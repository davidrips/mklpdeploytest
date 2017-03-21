$(document).ready(function () {



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



	equalheight = function(container){

	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {

	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;

	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}

	$(window).load(function() {
		$(".title").matchHeight()
		$(".summary").matchHeight()
		$(".cost").matchHeight()
		$(".upgrade").matchHeight()
		$(".top").matchHeight()
		$(".bottom").matchHeight()
		$(".type").matchHeight()

	});





	// $(".top").hover(function(){
	// 	var w = $(window).width();
	// 	if (w > 966){
	// 		$(this).parent().addClass("selected")
	// 		$(this).addClass("isSelected");
	// 		$(".top").not(this).addClass('notSelected')
	// 		$(".top").not(this).siblings().addClass('notSelected')
	// 	}else{	console.log("NO")}

		

		

	// }, function(){ 

		
	// 	$(this).parent().removeClass("selected")
	// 	$(this).removeClass("isSelected")
	// 	$(".top").not(this).removeClass('notSelected')
	// 	$(".top").not(this).siblings().removeClass('notSelected')


	// })



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





















})