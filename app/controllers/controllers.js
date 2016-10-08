app.controller("recipeController", function($scope, recipeFactory) {

	$scope.recipes = [];
	
	init();

	function init() {
		$scope.recipes = recipeFactory.getAllRecipes();
	}

	$scope.addRecipe = function() {
		var name = $scope.newRecipe.name;
		var ingredients = $scope.newRecipe.ingredients;
		var directions = $scope.newRecipe.directions;
		recipeFactory.insertRecipe(name, ingredients, directions);
		$scope.newRecipe = null;
	};

	$scope.deleteRecipe = function(id) {
		recipeFactory.deleteRecipe(id);
	};

});


app.controller("navController", function($scope, $location) {
	$scope.isPath = function(path) {
		if($location.path().substr(0, path.length) == path) {
			return true;
		}
		else
			return false;
	};
});