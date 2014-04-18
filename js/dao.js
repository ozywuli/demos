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

// JSON fetch data from PHP/MySQL

$(function() {

	var retrieveChapter = function() {
		$.ajax({
			url: 'daoapi.php',
			data: "",

			dataType: 'json',
			success: function( data ) {
				var chapter = data[0];
				var text = data[1];

				$( '#chapter-wrapper' ).html( '<h3>' + 'Chapter ' + chapter + '</h3>' + '<p>' + text + '</p>' );
			}
		});;
	};
	retrieveChapter();

	$( '#retrieve-chapter' ).on( 'click', retrieveChapter);

});