jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({ until: new Date(2022, 01, 20, 5) }); // year, month, date, hour
    });
});