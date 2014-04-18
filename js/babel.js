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

// Generate Phrase

$(function() {

	var generatePhrase = $( '#generate-phrase' );
	var phraseWrapper = $( '#phrase-wrapper' );

	var handleGeneratePhrase = function() {

		var list = new Array();
			list[0] = ["hello", "awesome", "sense", "Norway", "China", "is", "was", "Japan", "Korea", "wonder", "wander", "Joanna", "midnight", "a", "an", "the", "he", "she", "they", "them", "America", "godfather", "computer", "pencil", "screen", "hate", "love", "smell", "onion", "he", "she", "I", "bye", "good", "morning", "afternoon"];
			list[1] = [".", "?", "!", ".", ".", ".", ".", "."];

		var phraseLength = Math.floor( Math.random() * 20 ) + 1;

		var output = '<p class="generated-phrase">';

		for ( var i = 0; i < phraseLength; i++) {
			var randomWord = Math.floor( Math.random() * list[0].length );
			output += list[0][randomWord] + " ";
			if ( i == (phraseLength - 1) ) {
				var randomWord = Math.floor( Math.random() * list[0].length );
				output += list[0][randomWord];
			}
		}

		var randomPunctuation = Math.floor( Math.random() * list[1].length );
		output += list[1][randomPunctuation];
		output += '</p>';

		$( phraseWrapper ).html( output );

	};
	handleGeneratePhrase();

	$( generatePhrase ).on( 'click', handleGeneratePhrase );

});

