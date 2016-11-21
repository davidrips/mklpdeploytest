$(document).ready(function(){








    $("#fbButton").on('click', function(){
            console.log('clicked fb button');
            loggingIn()

    })

  function loggingIn(){
      if(document.getElementById('agree').checked){ 
        FB.login(function(response) {
            if (response.authResponse) {

              console.log('Welcome!  Fetching your information.... ');
              FB.api('/me', {fields: 'name,email'}, function(response) {
                console.log(response);
                console.log(response.email);
                successTest(response.email);
               });
            }else{
               console.log('User cancelled login or did not fully authorize.');
            }
          }, {scope: "public_profile,email"});
        return false; 
      } else{ 
      alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
      return false; 
    }        
  }



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
    		// console.log(data);
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