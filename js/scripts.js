$(document).ready(function() {
	// This is the base url for all of our API calls
	var apiBaseUrl = "http://api.themoviedb.org/3/";
	// This is the base url for all imageBaseUr
	// After the '/' comes the width, i.e imageBaseUrl + 'w300' + poster_path
	var imageBaseUrl = "http://image.tmdb.org/t/p/";
	// The query string. including the API key

	 var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';

	 var npUrl = apiBaseUrl + 'movie/now_playing' + apiKey;
	 var smUrl = apiBaseUrl + 'search/movie' + apiKey;
	 var saUrl = apiBaseUrl + 'search/multi' + apiKey;
	 var spUrl = apiBaseUrl + 'search/person' + apiKey;
	 var tvUrl = apiBaseUrl + 'search/tv' + apiKey;

	 

	 $.getJSON(npUrl, function(nowPlayingData) {   //	NOW PLAYING
	 	// console.log(nowPlayingData);
	 	var npHTML = ""; 
	 	for (var i = 0; i < nowPlayingData.results.length; i++) {
	 		npHTML += "<div class='col'>";
	 		npHTML += "<h2>" + nowPlayingData.results[i].title + "</h2>";
	 		var posterURL = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
	 		npHTML += "<img src='" + posterURL + "'>";
	 		npHTML += "</div>";

	 	}
	 	$(".poster-grid").html(npHTML);

	 }); //nowPlayingData
	 	

	 $("#search-movie-button").click(function(){
	 		var searchInput = $("#search-movie").val();
	 		var search = smUrl + "&query=" + searchInput;
			event.preventDefault();
		 $.getJSON(search, function(searchMovieData) {  // SEARCH BY MOVIE
		 	console.log(searchMovieData);
		 	
		 	var smHTML = "";
		  	for (var i = 0; i < searchMovieData.results.length; i++) {
		 		smHTML += "<div class='col'>";
		 		smHTML += "<h3>" + searchMovieData.results[i].title + "</h3>";
		 		var posterURL = imageBaseUrl + 'w300' + searchMovieData.results[i].poster_path;
		 		smHTML += "<img src='" + posterURL + "'>";
		 		smHTML += "</div>";

	 		}
		 	$(".poster-grid").html(smHTML);
		 
		 }); //searchMovieData

	}); //onclick search movie

	 $("#search-all-button").click(function(){
	 		var searchInput = $("#search-all").val();
	 		var search = saUrl + "&query=" + searchInput;
			event.preventDefault();
		 $.getJSON(search, function(searchMultiData) {  // SEARCH ALL
		 	console.log(searchMultiData);
		 	
		 	var saHTML = "";
		  	for (var i = 0; i < searchMultiData.results.length; i++) {
		 		saHTML += "<div class='col'>";
		 		saHTML += "<h3>" + searchMultiData.results[i].title + "</h3>";
		 		if (searchMultiData.results[i].title === null) {
		 			saHTML += "<img src='images/poster-unavailable.jpeg'>";
		 		}
		 		else if (searchMultiData.results[i].title === undefined) {
		 			saHTML += "<img src='images/poster-unavailable.jpeg'>";
		 		}
		 		else {
		 		var posterURL = imageBaseUrl + 'w300' + searchMultiData.results[i].poster_path;
		 		// console.log(posterURL);
		 		saHTML += "<img src='" + posterURL + "'>";
		 		}	
		 		saHTML += "</div>";

	 		}
		 	$(".poster-grid").html(saHTML);
		 
		 }); //searchMultiData

	}); //onclick search all

	  $("#search-person-button").click(function(){
	 		var searchInput = $("#search-person").val();
	 		var search = spUrl + "&query=" + searchInput;
			event.preventDefault();
		 $.getJSON(search, function(searchPersonData) {  // SEARCH BY PERSON
		 	console.log(searchPersonData);
		 	
		 	var spHTML = "";
		  	for (var i = 0; i < searchPersonData.results.length; i++) {
		 		
		 		for (var j = 0; j < searchPersonData.results[i].known_for.length; j++) {
		 			spHTML += "<div class='col'>";
			 		spHTML += "<h3>" + searchPersonData.results[i].known_for[j].title + "</h3>";
			 		if (searchPersonData.results[i].known_for[j].title === null) {
			 			spHTML += "<img src='images/poster-unavailable.jpeg'>";
			 		}
			 		else if (searchPersonData.results[i].known_for[j].title === undefined) {
			 			spHTML += "<img src='images/poster-unavailable.jpeg'>";
			 		}
			 		else {
			 		var posterURL = imageBaseUrl + 'w300' + searchPersonData.results[i].known_for[j].poster_path;
			 		console.log(posterURL);
			 		spHTML += "<img src='" + posterURL + "'>";
			 		}	
			 		spHTML += "</div>";
		 		} //actor known for cycle

	 		}
		 	$(".poster-grid").html(spHTML);
		 
		 }); //searchPersonData

	}); //onclick search person

	$("#search-tv-button").click(function(){
 		var searchInput = $("#search-tv").val();
 		var search = tvUrl + "&query=" + searchInput;
		event.preventDefault();
		 $.getJSON(search, function(searchTvData) {  // SEARCH BY TV SHOW
		 	console.log(searchTvData);
		 	
		 var smHTML = "";
	  	for (var i = 0; i < searchTvData.results.length; i++) {
	 		tvHTML += "<div class='col'>";
	 		tvHTML += "<h3>" + searchTvData.results[i].name + "</h3>";
	 		var posterURL = imageBaseUrl + 'w300' + searchMovieData.results[i].poster_path;
	 		smHTML += "<img src='" + posterURL + "'>";
		 		smHTML += "</div>";

	 		}
		 	$(".poster-grid").html(smHTML);
		 
		 
		 }); //searchTvData

	}); //onclick search tv show


}); //ready