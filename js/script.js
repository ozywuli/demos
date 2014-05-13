// Copyright

$(function() {
	var copyrightDate = new Date();
	var copyrightYear = copyrightDate.getFullYear();

	if (copyrightYear == '2014') {
		$( '.copyright-years' ).append(copyrightYear + ' ');
	} else {
		$('.copyright-years').append('2014' + ' &#8722; ' + copyrightYear + ' ');
	}

});

// Masonry

$(function() {
	var $container = $('#container')

$container.imagesLoaded( function() {

	var msnry = $container.data('masonry');

	$container.masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.panel-wrapper'
	});
});


});

// About Pop Up

$( '.header-nav-about a' ).on( 'click', function(e) {
	e.preventDefault;
	$( '.header-nav-about-content' ).toggle(200);
})