$(document).ready(function(){

    $(function(){
    	$('.box').matchHeight();
    })

    $("#showTerms").on("click", function(){
    	$("#termsModal").modal()
    })

	$("#showPrivacy").on("click", function(){
    	$("#privacyModal").modal()
    })

    function successTest(email){
    	console.log(email);
    }

    $("#signupForm").submit(function(e){
    	if(document.getElementById('agree').checked){ 
    		console.log('clickedThis');
    		e.preventDefault()
	    	var inputs = $('#signupForm :input')
	    	var inputEmail= inputs.val();
    		signUpComplete(inputEmail);
    		return false; 
    		
    		
    	} else{ 
			alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
			return false; 
		}
    })

    function signUpComplete(email){

    	$.post('/sweepstake', {email: email}, function(data, textStatus, xhr) {
    		console.log('submitted successfully!');
    		console.log(data);
    		$("#successModal").modal();
    	});

    }



    

	     function checkLoginState() {
    FB.getLoginStatus(function(response) {
         if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
   console.log('fbgotcalled');
    });
  }

  
})