$(document).ready(function () {
    $('#alertting').click(function () {
        alert('hi');
    });
    $('#hide').click(function () {
        $('#hiding').hide();
    });
    $('#showing').click(function () {
        $('#hiding').show();
    });
    $('#clickme').click(function () {
       $('#bender').toggle("slow", function () {
           //Animation complete.
       });
    });
    $('#slideup').click(function(){
        $('#slide_up').slideToggle(function () {
           //Slides complete.
        });
    });
    $( "#latter" ).click(function() {
        $( '#fade12' ).fadeOut( "slow");
    });
    $('#fadein').click(function () {
        $('#fade12').fadeIn("slow");
    });
    $('#add_class').click(function(){
        $('div').add();
    });


});