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
                signUpComplete(response.email, response.name);
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


    $("#signupForm").validator().submit(function(e){

        if(e.isDefaultPrevented()){
            console.log('why no email? :(');
            alert("Please be sure to enter your email!");
            return false;

        }else{
            if(document.getElementById('agree').checked){ 
                console.log('clickedThis');
                e.preventDefault()
                var inputs = $('#signupForm :input')
                var inputEmail= inputs.val();
                var name = 'none'
                signUpComplete(inputEmail, name);
                return false; 
                
                
            } else{ 
                alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
                return false; 
            }

        }


    	
    })

    function signUpComplete(email, name){

    	$.post('/sweepstake', {email: email, name: name}, function(data, textStatus, xhr) {
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