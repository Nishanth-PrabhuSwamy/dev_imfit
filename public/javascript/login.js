$( document ).ready(function() {

  // Setup form validation on the #register-form element
  $("#loginForm").validate({

      // Specify the validation rules
      rules: {
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 5
          },
         login_type: {
           required: true
         }
      },

      // Specify the validation error messages
      messages: {
          password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
          },
          email: "Please enter a valid email address",
          login_type: "Please select your login type"
      },

      submitHandler: function(form) {
          form.submit();
      }
  });
});
