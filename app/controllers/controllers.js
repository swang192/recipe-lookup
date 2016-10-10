app.controller("recipeController", function($scope, recipeFactory) {

	$scope.iCounter = [{i: "", a: ""}]; //ingredients counter
	$scope.dCounter = [{}];

	init();

	function init() {
		$scope.recipes = recipeFactory.getRecipes();
	}

	$scope.addRecipe = function() {
		var name = $scope.newRecipe.name;
		var ingredients = $scope.iCounter;
		var directions = $scope.dCounter;
		for (var i = 0; i < $scope.dCounter.length; i++) {

		}
		
		console.log(directions);
		recipeFactory.insertRecipe(name, ingredients, directions);
		$scope.newRecipe = null;
	};

	$scope.addIngredientField = function() {
		var newIndex = $scope.iCounter.length + 1;
		$scope.iCounter.push({a: "", i: ""});
	};

	$scope.addDirectionField = function() {
		var newIndex = $scope.dCounter.length + 1;
		$scope.dCounter.push({d: ""});
	};

	$scope.deleteRecipe = function(id) {
		recipeFactory.deleteRecipe(id);
	};

	$scope.getNum = function(num) {
		return newArray(num);
	}

});

app.controller("recipeProfileController", function($scope, $routeParams, recipeFactory) {
	$scope.currentRecipe = {};

	init();

	function init() {
		var id = $routeParams.recipeID;
		var curId = (id)? parseInt(id) : 0;
		console.log(curId);
		if (curId > 0) {
			$scope.currentRecipe = recipeFactory.getRecipe(curId);
		}
	}
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


