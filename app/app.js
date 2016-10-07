//Module declarations
var app = anuglar.module("recipesApp", []);
app.config(function($routeProvider) {
	$routeProvider
		.when('/recipes', 
			{ 
				controller: 'recipeController',
				templateUrl: '/app/partials/recipes.html'
			})
		.when('/recipeProfile/:recipeID', 
			{
				controller: 'recipleProfile',
				templateUrl: '/app/partials/recipeProfile.html'
			})
};