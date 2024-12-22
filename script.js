
    $(document).ready(function () {
        // Check if Pro Mode is enabled on page load
        if (localStorage.getItem('proModeEnabled') === 'true') {
            // Remove blur effect
            $("#proModeQuizzes").css("filter", "none");
            // Set the href values for advanced quizzes
            $("#adHtml").removeClass("disabled").addClass("enabled");
            $("#adCss").removeClass("disabled").addClass("enabled");
            $("#adjQuery").removeClass("disabled").addClass("enabled");
            $("#adBootstrap").removeClass("disabled").addClass("enabled");
        }
        
      
        // Enable Pro Mode when button is clicked
        $("#proModeButton").click(function () {
            // Remove blur effect
            $("#proModeQuizzes").css("filter", "none");
            // Set href values for advanced quizzes
            $("#adHtml").removeClass("disabled").addClass("enabled");
            $("#adCss").removeClass("disabled").addClass("enabled");
            $("#adjQuery").removeClass("disabled").addClass("enabled");
            $("#adBootstrap").removeClass("disabled").addClass("enabled");
            // Persist Pro Mode state in localStorage
            localStorage.setItem('proModeEnabled', 'true');
        });

        // Optional: Popup logic (if needed)
        $("#inst").click(function () {
            $("#quiz-wrapper").hide();
            $("#popup").show();
        });
        $("#close").click(function () {
            $("#popup").hide();
            $("#quiz-wrapper").show();
        });

        $('#submit-btn').click(function(event) {
            event.preventDefault();  // Prevent the default form submission
    
            // Show the success alert
            $('#success-alert').fadeIn();
    
            // Redirect to home page after 2 seconds (2000 milliseconds)
            setTimeout(function() {
                window.location.href = 'index.html';  // Redirect to home page
            }, 2000);
        });
    });
