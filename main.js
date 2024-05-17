$(document).ready(function(){
    // Update datetime every second
    setInterval(updateDateTime, 1000);
});

function updateDateTime() {
    var currentTime = new Date();
    var formattedDate = formatDate(currentTime);
    var formattedTime = formatTime(currentTime);

    $('#currentDateTime').text(formattedDate + ' ' + formattedTime);
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}

function formatTime(date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = (hour < 10 ? '0' : '') + hour;
    minute = (minute < 10 ? '0' : '') + minute;
    second = (second < 10 ? '0' : '') + second;

    return hour + ':' + minute + ':' + second;
}

$(document).ready(function() {
    $('#orderForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const gender = $('input[name="Gender"]:checked').val();
        let jerseys = [];
        $('input[name="Jersey"]:checked').each(function() {
            jerseys.push($(this).val());
        });

        // Display the SweetAlert
        Swal.fire({
            title: 'Order Confirmation',
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Gender: ${gender}</p>
                <p>Jersey: ${jerseys.join(', ')}</p>
            `,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
});
