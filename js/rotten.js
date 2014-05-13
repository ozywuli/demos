$(function() {
var apikey = "see372m35grck9rn6u98c84p";

// Autocomplete
$( "#searchbar" ).autocomplete({

  // Autocomplete source data
  source: function( request, response ) {

    $.ajax("http://api.rottentomatoes.com/api/public/v1.0/movies.json", {
      data: {
        apikey: apikey,
        q: request.term,
        page_limit: 6
      },
      dataType: "jsonp",
      success: function( data ) {
        response( $.map( data.movies, function(movie) {
          return {
            id: movie.id,
            label: movie.title,
            thumb: movie.posters.thumbnail,
            year: movie.year
          }
          }));
      }
    });

  },

  // Hide Helper Text '1 result is available, use up and down arrow keys to navigate.'
  messages: {
    noResults: null,
    results: function() {}
  },

  // Display similar movie results on select
  select: function( event, ui ) {

    var similarURL = 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + ui.item.id + '/similar.json';
    $.ajax(similarURL, {
      type: "GET",
      data: {
        apikey: apikey
      },
      dataType: "jsonp",
      async: false,

      success: function( data ) {
        displayResults( data );
      }

    });

    $(this).val('');

  }

  // Show autocomplete dropdown options rendered with custom HTML
}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
  var link = $( "<a>" ).append( '<p>' + item.label + ' ' + '(' + item.year + ')' + '</p>' );
  if ( item.thumb !== "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif" ) {

    var img = $( "<img>" ).attr( "src", item.thumb );

  }

  // If item does not have a movie poster, then set img to default poster
  if ( item.thumb == "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif" ) {
      var img = $( "<img>" ).attr( "src", "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif" );
  }

  var link = link.prepend(img);

  return $("<li>")
    .data( "item.autocomplete", item )
    .append(link)
    .appendTo(ul);
  };

}); // End Document Ready

// Iterate over similar movies JSON object and format the results
function displayResults( data ) {
  var $resultsContainer =  $( '.rec-container' );
  // Use trim to check for empty elements because Chrome and Firefox consider whitespaces and linebreaks as elements
  if ( $.trim( $resultsContainer.html() ) == '' ) {
    $.each( data.movies, function( i, item ) {
      $resultsContainer.append( '<li class="rec-item clearfix">' + '<div>' + '<a href="' + item.links.alternate + '">' + item.title + ' ' + '(' + item.year + ')' + '</div>' + '<img src=" ' + item.posters.original + '" />' + '</li>' );
    });
  } else {
    $resultsContainer.empty();
    $.each( data.movies, function( i, item ) {
      $resultsContainer.append( '<div>' + item.title + '<img src=" ' + item.posters.detailed + '" />'  + "</div>" );
    });
  }
}
