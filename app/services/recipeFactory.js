app.factory("recipeFactory", function() {
	var recipes = [
		{name: "Chicken Soup", ingredients: {chicken: "1 whole", salt: "1 tblspn", scallions: "1 whole", carrots: "2 large", celery: "1 stalk"} , directions: "Directions"},
		{name: "Mac & Cheese", ingredients: {macaroni: "1 box", mozerella: "10 oz", salt: "1 tbspn", cheddar: "10 oz"}, directions: "Directions"},
		{name: "Mashed Potatoes", ingredients: {potatoes: "2 large", scallions: "1 whole"}, directions: "Directions"}
	];

	var factory = {};

	factory.getRecipes = function() {
		return recipes;
	}
	
});