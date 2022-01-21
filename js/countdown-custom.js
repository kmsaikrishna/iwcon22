jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({ until: new Date(2022, 01, 26, 6) }); // year, month, date, hour
    });
});