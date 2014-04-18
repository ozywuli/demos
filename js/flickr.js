
function getFlickrPhotos(yourKeywords) {
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{
		lang : 'en-us',
		tags : yourKeywords,
		tagmode : 'all',
		limit : '20',
		format : 'json'
	},
	function( data ) {
		var imgInsert = "";
		var items = [];

		//create the element that holds the images
		$('<div />', {
			'class': 'content clearfix',
			html: items.join('')
		}).appendTo('.grid').insertAfter('.sidebar');

		/* each image loaded from flickr will have a div as parent then the main parent
		will apend to the wrapper */
		$.each(data.items, function(i,item){
			if (i == 20) return false;
			var imgThumb = item.media.m.split('m.jpg')[0] + 'm.jpg'; //size of the image small max 240px
			var imgLarge = item.media.m.split('m.jpg')[0] + 'b.jpg'; //large size of the image for fancybox
			imgInsert += '<div class="img-block">';
			imgInsert += '<a href="' + imgLarge + '" rel="flickr_group" class="big_img" title="' + item.title + '">';
			imgInsert += '<img title="' + item.title + '" src="' + imgThumb + '" alt="' + item.title + '" />';
			imgInsert += '</a></div>';
		});
		var cachedItems = $(imgInsert).data('cached', imgInsert);
		$('.content').append(imgInsert).addClass(yourKeywords).data('cached', data.items);
		/* create a history list and insert it into the left sidebar */
		var listCached = '';
		listCached += '<div class="search-history-list">';
		listCached += '<a class="' + yourKeywords + '_cached" href="javascript:;">';
		listCached +=  yourKeywords + '</a></div>';

		$(listCached).appendTo('.sidebar').insertAfter('form');

		$('.' + yourKeywords + '_cached').click(function(){

			/* if the content has items then remove them
			and insert the chathed itmes */
			if ( $('.content').length > 0 ) {
				$('.content').empty();
				$('.content').html(cachedItems);

				// open images with magnific for cached searches
				$( 'a[rel=flickr_group]' ).magnificPopup({
					type: 'image',
					gallery: {
						enabled: true
					}
				});

			}
		})

		// open images with magnific for new searches
		$( 'a[rel=flickr_group]' ).magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	});
}

$(function(){
	$('.search-form').submit(function(){
		//if it has been a search allready remove the old content and replace it with the new search
		if ( $('.content').length > 0 ) {
			$('.content').remove();
		}
		getFlickrPhotos( $('.keywords').val() );

		$( '.content-placeholder' ).remove();
		return false;


	})
})
