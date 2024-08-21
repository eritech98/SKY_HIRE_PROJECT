// JavaScript to handle form submission
        document.getElementById('uniqueFormId').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            // Hide the form
            document.getElementById('uniqueFormId').style.display = 'none';
            // Show the modal
            $('#thankYouModalId').modal('show');
        });