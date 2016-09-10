 $(document).ready(function(){
        $('#send_message').click(function(e){
            console.log('clicked');
            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
			var phone = $('#phone').val();
            var message = $('#message').val();
			
			$('#name,#email,#phone,#message').click(function(){
				$(this).removeClass("error_input");
			});

            var re_em = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(
".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA
-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
            console.log(re_em.test(email));

         	// Form field validation
            if(name.length == 0){
                var error = true;
                $('#name').addClass("error_input");
            }else{
                $('#name').removeClass("error_input");
            }
            if(email.length == 0 || email.indexOf('@') == '-1' || !re_em.test(email)){
                var error = true;
                $('#email').addClass("error_input");
            }else{
                $('#email').removeClass("error_input");
            }
			if(phone.length == 0){
                var error = true;
                $('#phone').addClass("error_input");
            }else{
                $('#phone').removeClass("error_input");
            }
            if(message.length == 0){
                var error = true;
                $('#message').addClass("error_input");
            }else{
                $('#message').removeClass("error_input");
            }
            console.log("Error " + error);
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Message Sent!' });
                console.log("If error is false. Error: " + error);
                $('#contact_form').submit();
				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
                // $.post("email.php", $("#contact_form").serialize(),function(result){
                //     //Check the result set from email.php file.
                //     if(result == 'sent'){
                //         //If the email is sent successfully, remove the submit button
                //          $('#submit').remove();
                //         //Display the success message
                //         $('#mail_success').fadeIn(500);
                //     }else{
                //         //Display the error message
                //         $('#mail_fail').fadeIn(500);
                //         // Enable the submit button again
                //         $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                //     }
                // });
            }
        });    
    });