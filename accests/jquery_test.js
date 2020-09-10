$(function() {
    var tmp = $('#boxData').html();
    $('#btn').click(function() {
        //$('#boxDataB').html(tmp);
        $(tmp).appendTo('#boxDataB');
        $('#boxDataB').addClass('bg');
    });
});