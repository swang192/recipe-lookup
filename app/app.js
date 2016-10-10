//Module declarations
var app = angular.module("recipesApp", ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/recipeSearch', 
			{ 
				controller: 'recipeController',
				templateUrl: 'app/partials/recipeSearch.html'
			})
		.when('/recipeList', 
			{
				controller: 'recipeController',
				templateUrl: 'app/partials/recipeList.html'
			})
		.when('/recipes/:recipeID',
			{
				controller: 'recipeProfileController',
				templateUrl: 'app/partials/recipeProfile.html'
			})
		.otherwise({ redirectTo: '/recipeSearch' });
});