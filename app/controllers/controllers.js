app.controller("recipeController", function($scope, recipeFactory) {

	$scope.recipes = [];
	
	init();

	function init() {
		$scope.recipes = recipeFactory.getRecipes();
	}
});