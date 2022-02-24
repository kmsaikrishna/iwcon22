jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({ until: new Date(2022, 01, 27, -5) }); // year, month, date, hour
    });
});