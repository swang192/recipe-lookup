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
				controller: 'recipleController',
				templateUrl: 'app/partials/recipeList.html'
			})
		.otherwise({ redirectTo: '/recipeSearch' });
});