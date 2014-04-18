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

// Quotes

$(function(){
	var retrieveQuote = function() {
		var quotesPath = "assets/quotes.json";
		var output = '<blockquote>';

		$.getJSON( quotesPath, function( data ) {
			var randomKey = Math.floor( Math.random() * data.length );

			output += '<p>' + '"' + data[randomKey].quote + '"' + '</p>';
			output += '<footer>' + ' &ndash; ' + data[randomKey].name;
			if ( data[randomKey].source ) {
				output += ', ' + '<cite class="quotes-source">' + data[randomKey].source + '</cite>';
			}
			output += '</footer>';

			output += '</blockquote>';

			$( '#quote-wrapper' ).html( output );

		});
	};
	retrieveQuote();

	$( '#retrieve-quote' ).on( 'click', retrieveQuote);
});