
  
    $(document).ready(function () {
        
   //Google Sheet Script

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxdxCbOun98K08yTT6hecF6qC0kr0PKWdjo8zzkdTcOE2xndOhCURH8Mk3lgYVMkNCtuQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
        

  
    $("#dataForm").submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Add form validation logic here
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var isValid = true;

        if (name === "") {
            isValid = false;
            $("#name-error").text("Please enter your name.");
        } else {
            $("#name-error").text("");
        }

        if (email === "") {
            isValid = false;
            $("#email-error").text("Please enter your email.");
        } else {
            $("#email-error").text("");
        }

        if (message === "") {
            isValid = false;
            $("#message-error").text("Please enter your message.");
        } else {
            $("#message-error").text("");
        }

        if (isValid) {
            // Show the loader while submitting
            $(".loader-overlay").show();

            // Simulate a delay (you can replace this with an actual AJAX call)
            setTimeout(function () {
                // Hide the loader
                $(".loader-overlay").hide();

                // Show the success message
                $("#success-message").show();

                // Clear the form
                $("#name, #email, #message").val("");

                // Hide the success message after a few seconds
                setTimeout(function () {
                    $("#success-message").hide();
                }, 5000);

                // Show the thank you message
                $(".thank-you-message").show();

                // Hide the thank you message after a few seconds
                setTimeout(function () {
                    $(".thank-you-message").hide();
                }, 5000);
            }, 2000);
        }
    });
});

    
    

  