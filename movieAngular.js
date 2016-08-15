
var movieApp = angular.module("movieApp", ["ngMaterial"]);
movieApp.controller("movieController", function ($scope, $http) {
	
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';

	var apiBaseUrl = "http://api.themoviedb.org/3/";
	// This is the base url for all imageBaseUr
	// After the '/' comes the width, i.e imageBaseUrl + 'w300' + poster_path
	
	// The query string. including the API key

	 var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';

	 var npUrl = apiBaseUrl + 'movie/now_playing' + apiKey;
	 var smUrl = apiBaseUrl + 'search/movie' + apiKey;
	 var saUrl = apiBaseUrl + 'search/multi' + apiKey;
	 var spUrl = apiBaseUrl + 'search/person' + apiKey;
	 var tvUrl = apiBaseUrl + 'search/tv' + apiKey;



	 
	  
	// $http({
	// 	method: "GET",
	// 	url: smUrl + '&query=' + $scope.userChoice
	// }).then(function successFunction(movieData) {
	// 	$scope.movieArray = movieData.data.results;

	// }, function failureFunction(movieData) {
	// 	console.log("fail");

	// 	});
	$scope.getNewMovieStuff = function() {
		var searchUrl = smUrl + '&query=' + $scope.userChoice;
		$http({
		method: "GET",
		url: searchUrl
	}).then(function successFunction(movieData) {
		$scope.movieArray = movieData.data.results;
		console.log(movieData)
		$scope.movieTitle = movieData.data.results.title;

	}, function failureFunction(movieData) {
		console.log("fail");

	});

	}
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
