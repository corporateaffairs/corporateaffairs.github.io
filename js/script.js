$(document).ready(function() {

    $('#s1').click(function() {
    	$('#s1 a').addClass('active-sub');
    	$('#s2 a, #s3 a').removeClass('active-sub');

    	$('#wedding-wrapper-1').fadeIn();
    	$('#wedding-wrapper-2, #wedding-wrapper-3').fadeOut();
    });

    $('#s2').click(function() {
    	$('#s2 a').addClass('active-sub');
    	$('#s1 a, #s3 a').removeClass('active-sub');

    	$('#wedding-wrapper-2').fadeIn();
    	$('#wedding-wrapper-1, #wedding-wrapper-3').fadeOut();
    });

    $('#s3').click(function() {
    	$('#s3 a').addClass('active-sub');
    	$('#s1 a, #s2 a').removeClass('active-sub');

    	$('#wedding-wrapper-3').fadeIn();
    	$('#wedding-wrapper-1, #wedding-wrapper-2').fadeOut();
    });

});