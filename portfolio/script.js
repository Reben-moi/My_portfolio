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
    (function () {
        'use strict';
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();

    // Form submission handler
    $('#contactForm').submit(function (e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        if (!name || !email || !message) {
            $('#formResponse').html('<div class="text-danger">All fields are required.</div>');
            return;
        }

        // Retrieve existing messages
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');

        // Add new message
        messages.push({ name, email, message });

        // Save back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Feedback to user
        $('#formResponse').html('<div class="text-success">Thank you! Your message has been saved locally.</div>');

        // Clear form
        $('#contactForm')[0].reset();
        $('#contactForm').removeClass('was-validated');
    });
});