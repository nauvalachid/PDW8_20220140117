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

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    Swal.fire({
        title: '⇛OrDeR SuBmItTeD!⇚',
        text: '𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝗈𝗋𝖽𝖾𝗋.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33',
    });
});