$(document).ready(function () {

    // Animate all progress bars once the section is hovered
    $('#skills').hover(
        function () {
            // Mouse enters the #skills container
            $('.progress-bar').each(function () {
                var progressWidth = $(this).attr('aria-valuenow') + '%';
                $(this).css('width', progressWidth);
            });
        },
        function () {
            // Mouse leaves the #skills container
            $('.progress-bar').css('width', '0%');
        }
    );




//Projects page scripts

//blur and bring into focus
    $(document).ready(function () {
        // Make the entire .col-md-4 clickable
        $('.col-md-4').click(function () {
            const card = $(this);
            const container = $('.projects-blur');

            if (card.hasClass('focused')) {
                card.removeClass('focused');
                container.removeClass('blur-active');
            } else {
                // Remove the 'focused' class from any other card
                $('.col-md-4.focused').removeClass('focused');

                // Add the 'focused' class to the clicked card
                card.addClass('focused');

                // Add the 'blur-active' class to the container
                container.addClass('blur-active');
            }
        });

        // Clicking outside the focused card to close it
        $(document).click(function (event) {
            // If the click is outside the .col-md-4 container, close the focused card
            if (!$(event.target).closest('.col-md-4').length) {
                $('.col-md-4.focused').removeClass('focused');
                $('.projects-blur').removeClass('blur-active');
            }
        });
    });





//Contact page scripts
// Handle form submission
$('#contactForm').on('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = $(this);

    // Bootstrap's client-side validation
    if (form[0].checkValidity() === false) {
        event.stopPropagation(); // Stop the event if form is invalid
    }
    form.addClass('was-validated'); // Add class to show validation feedback

    if (form[0].checkValidity()) {
        // All fields are valid, proceed with AJAX
        const formData = form.serialize(); // Get form data

        // Show a loading message
        $('#formResponse').html('<div class="alert alert-info">Sending message...</div>');

        // Simulate AJAX request
        setTimeout(function () {
            // Simulate a successful response
            const success = Math.random() > 0.2; // 80% chance of success

            if (success) {
                $('#formResponse').html('<div class="alert alert-success">Message sent successfully! Thank you for contacting me.</div>');
                form[0].reset(); // Clear the form fields
                form.removeClass('was-validated'); // Remove validation feedback
            } else {
                $('#formResponse').html('<div class="alert alert-danger">Failed to send message. Please try again later.</div>');
            }
        }, 2000); // Simulate network delay of 2 seconds
    }
});
});
