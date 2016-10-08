app.factory("recipeFactory", function() {
	var recipes = [
		{id: 1, name: "Chicken Soup", ingredients: {chicken: "1 whole", salt: "1 tblspn", scallions: "1 whole", carrots: "2 large", celery: "1 stalk"} , directions: "Directions"},
		{id: 2, name: "Mac & Cheese", ingredients: {macaroni: "1 box", mozerella: "10 oz", salt: "1 tbspn", cheddar: "10 oz"}, directions: "Directions"},
		{id: 3, name: "Mashed Potatoes", ingredients: {potatoes: "2 large", scallions: "1 whole"}, directions: "Directions"}
	];

	var factory = {};

	factory.getAllRecipes = function() {
		return recipes;
	};
	
	factory.insertRecipe = function(name, ingredients, directions) {
		var newId = recipes.length + 1;
		recipes.push({
			id: newId,
			name: name,
			ingredients: ingredients,
			directions: directions
		});
	};

	factory.deleteRecipe = function(id) {
		for (var i = 0; i < recipes.length; i++) {
			if (recipes[i].id === id) {
				recipes.splice(i, 1);
			}
		}
	};

	factory.getRecipe = function(id) {
		for (var i = 0; i < recipes.length; i++) {
			if (recipes[i].id === id) {
				return recipes[i];
			}
		}
		return null;
	};
});