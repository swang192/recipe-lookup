app.controller("recipeController", function($scope, $route, recipeFactory) {

	$scope.iCounter = [{i: "", a: ""}]; //ingredients array 
	$scope.dCounter = [{}];				//directions array

	init();

	function init() {
		$scope.recipes = recipeFactory.getRecipes();
		$scope.tags = recipeFactory.getTags();
	}

	$scope.addRecipe = function() {
		if ($scope.newRecipe.name !== "" && 
			$scope.iCounter[$scope.iCounter.length - 1].i !== "" && 
			$scope.iCounter[$scope.iCounter.length - 1].a !== "" && 
			$scope.dCounter[$scope.dCounter.length - 1].d !== "") {
				var name = $scope.newRecipe.name;
				var ingredients = $scope.iCounter;
				var directions = $scope.dCounter;
				recipeFactory.insertRecipe(name, ingredients, directions);
				$route.reload();
		}
	};

	$scope.addTag = function() {
		var name = $scope.ingred;
		if (name !== null && name !== undefined) {
			recipeFactory.insertTag(name);
			$scope.ingred = null;
		}
	};

	$scope.addIngredientField = function() {
		var newIndex = $scope.iCounter.length + 1;
		$scope.iCounter.push({a: "", i: ""});
	};

	$scope.deleteIngredientField = function() {
		if ($scope.iCounter.length > 1) {
			$scope.iCounter.splice($scope.iCounter.length - 1, 1);
		}
	};

	$scope.addDirectionField = function() {
		var newIndex = $scope.dCounter.length + 1;
		$scope.dCounter.push({d: ""});
	};

	$scope.deleteDirectionField = function() {
		if ($scope.dCounter.length > 1) {
			$scope.dCounter.splice($scope.dCounter.length - 1, 1);
		}
	};

	$scope.deleteRecipe = function(id) {
		recipeFactory.deleteRecipe(id);
	};

	$scope.deleteTag = function(id) {
		recipeFactory.deleteTag(id);
	};

	$scope.clearTags = function() {
		recipeFactory.clearTags();
	};
   
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


app.filter('filterByTags', function () {
    return function (recipes, tags) {
        var filtered = []; // Put here only items that match
        (recipes || []).forEach(function (recipe) { 
        	// Check each recipe to see if any tags are a substring of the recipe's ingredients
            var matches = tags.some(function (tag) { 
            	var matchFound = false;   
                for(var n = 0; n < recipe.ingredients.length; n++) {
                       	if (recipe.ingredients[n].i.indexOf(tag.name) > -1) 
                       			matchFound = true; 	
                }
                return (recipe.name.indexOf(tag.name) > -1) || 
                       (matchFound);   
            });                                               
            if (matches) {           
                filtered.push(recipe); // put it into the `filtered` array
            }
        });
        return filtered; // Return the array with items that match any tag
    };
});