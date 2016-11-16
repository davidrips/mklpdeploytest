$(document).ready(function(){

	     function checkLoginState() {
    FB.getLoginStatus(function(response) {
         if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
   console.log('fbgotcalled');
    });
  }

  
})