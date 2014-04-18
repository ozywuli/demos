<?php require('assets/templates/header.php'); ?>

	<div class="content-container clearfix" id="container">

		<div class="panel-wrapper grid-sizer">
			<div class="panel">
				<section class="panel-image">
					<a href="notebook.php">
						<img src="img/notebook.png" alt="Panel image for Backbone note taking mini app" />
						<div class="panel-image-overlay"></div>
						<div class="panel-image-info">VIEW DEMO</div>
					</a>
				</section>
				<section class="panel-description">
					<h3 class="panel-title">Backbone Note Taker</h3>
					<p>I build this mini app while learning Backbone. It allows you to create, read, update, and delete notes (CRUD). Static data is stored on the browser; nothing on the server. Backbone router provides hashtag urls.</p>
				</section>
				<section class="panel-github">
					<a href="">See code on GitHub</a>
				</section>
			</div>
		</div>

		<div class="panel-wrapper grid-sizer">
			<div class="panel">
				<section class="panel-image">
					<a href="quotes.html">
						<img src="img/quotes.png" alt="Panel image for Quotes mini app" />
						<div class="panel-image-overlay"></div>
						<div class="panel-image-info">VIEW DEMO</div>
					</a>
				</section>
				<section class="panel-description">
					<h3 class="panel-title">Quotes</h3>
					<p>This is a simple app that retrieves a single quote when the user clicks the "New Quotation" button. Quotes are stored in JSON format and fetched asynchronously via JQuery's getJSON method so that page refreshes are unnecessary. No server side languages or databases are involved. The generated quotes all come from a collection of quotes that I've collected over the years.</p>
				</section>
				<section class="panel-github">
					<a href="">See code on GitHub</a>
				</section>
			</div>
		</div>

		<div class="panel-wrapper grid-sizer">
			<div class="panel">
				<section class="panel-image">
					<a href="dao.php">
						<img src="img/taijitu.png" alt="Panel image of the yin-yang symbol" />
						<div class="panel-image-overlay"></div>
						<div class="panel-image-info">VIEW DEMO</div>
					</a>
				</section>
				<section class="panel-description">
					<h3 class="panel-title">Dao De Jing</h3>
					<p>"The Dao that can be spoken is not the eternal Dao." Thus spoke the sage, Lao Tzu. This app allows the user to generate on click a random entry from Lao Tzu's Dao De Jing. Entries are stored in a MySQL database and results are fetched via PHP and ajax.</p>
				</section>
				<section class="panel-github">
					<a href="">See Code on GitHub</a>
				</section>
			</div>
		</div>

				<div class="panel-wrapper grid-sizer">
			<div class="panel">
				<section class="panel-image">
					<a href="flickr.php">
						<img src="img/flickr.png" alt="Panel image of a vector camera" />
						<div class="panel-image-overlay"></div>
						<div class="panel-image-info">VIEW DEMO</div>
					</a>
				</section>
				<section class="panel-description">
					<h3 class="panel-title">Magnific Flickr</h3>
					<p>This simple app was made by modifying code found in <a href="http://carst.me/2011/08/search-for-photos-using-jquery-flickr-api-and-fancybox-part-1/">Ionut Carsts's beginner tutorial</a> on retrieving and displaying photos from Flickr by using JQuery, Fancybox, and Flickr's API. I made changes to the Javascript code so that it made more sense to me, customized the CSS styling of the app, and replaced the Fancybox plugin with Magnific, a faster, lighter, and responsive lightbox.</p>
				</section>
				<section class="panel-github">
					<a href="">See Code on GitHub</a>
				</section>
			</div>
		</div>

		<div class="panel-wrapper grid-sizer">
			<div class="panel">
				<section class="panel-image">
					<a href="babel.html">
						<img src="img/lexicon.png" alt="Panel image of a white hexagon against a black background" />
						<div class="panel-image-overlay"></div>
						<div class="panel-image-info">VIEW DEMO</div>
					</a>
				</section>
				<section class="panel-description">
					<h3 class="panel-title">Dictionary</h3>
					<p>I've always wanted to write my own dictionary--that dream hasn't been realized yet, but this app will do for now. Users can search English terms...</p>
				</section>
				<section class="panel-github">
					<a href="">See Code on GitHub</a>
				</section>
			</div>
		</div>

		<div class="panel-wrapper grid-sizer">
			<div class="panel">
				<section class="panel-image">
					<a href="babel.html">
						<img src="img/babel.png" alt="Panel image of a white hexagon against a black background" />
						<div class="panel-image-overlay"></div>
						<div class="panel-image-info">VIEW DEMO</div>
					</a>
				</section>
				<section class="panel-description">
					<h3 class="panel-title">Babel</h3>
					<p>"The Library of Babel" is a short story by the famed magical realist writer, Jorge Luis Borges. This strange library of Babel is composed of an infinite number of rooms, all shaped like a hexagon. Within, they house countless books that store all possible sequence of words. Babel is an small app that mimics the kind of phrases that can be found in the library. Sometimes they are meaningful, but more often than not the phrases are incoherent. The app uses JQuery to puts together these phrase from a random selection of words, letters, and punctuations stored in arrays.</p>
				</section>
				<section class="panel-github">
					<a href="">See Code on GitHub</a>
				</section>
			</div>
		</div>

	</div> <!-- End Content -->

<?php require('assets/templates/footer.php'); ?>
