app.factory("recipeFactory", function() {
	var recipes = [
		{id: 1, name: "Chicken Soup", 
		 ingredients: [{i: "chicken", a: "1 whole (3 pounds)"}, 
		 			   {i: "onion", a: "1 whole, halved"}, 
		 			   {i: "carrots", a: "2 large"}, 
		 			   {i: "celery", a: "1 stalk"}],
		 directions: [{d: "Put the chicken, carrots, celery and onion in a large soup pot and cover with cold water. Heat and simmer, uncovered, until the chicken meat falls off of the bones (skim off foam every so often)."},
		 			  {d: "Take everything out of the pot. Strain the broth. Pick the meat off of the bones and chop the carrots, celery and onion. Season the broth with salt, pepper and chicken bouillon to taste, if desired. Return the chicken, carrots, celery and onion to the pot, stir together, and serve."}],
		 image: 'images/chickenSoup.jpg'},
		{id: 2, name: "Mac & Cheese", 
		 ingredients: [{i: "macaroni", a: "8 ounces"}, 
		 			   {i: "milk", a: "3 cups"}, 
		 			   {i: "butter", a: "1/4 cup"}, 
		 			   {i: "flour", a: "2 1/2 tablespoons"}, 
		 			   {i: "cheddar", a: "2 cups, shredded"}], 
		 directions: [{d: "Cook macaroni according to the package directions. Drain."},
					  {d: "In a saucepan, melt butter or margarine over medium heat. Stir in enough flour to make a roux. Add milk to roux slowly, stirring constantly. Stir in cheeses, and cook over low heat until cheese is melted and the sauce is a little thick. Put macaroni in large casserole dish, and pour sauce over macaroni. Stir well."},
					  {d: "Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika."},
					  {d: "Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve."}],
		 image:'images/macNCheese.jpe'},
		{id: 3, name: "Mashed Potatoes", 
		 ingredients: [{i: "potatoes", a: "2 pounds, peeled and quartered"}, 
		 			   {i: "butter", a: "2 tablespoons"}, 
		 			   {i: "milk", a: "1 cup"}], 
		 directions: [{d: "Bring a pot of salted water to a boil. Add potatoes and cook until tender but still firm, about 15 minutes; drain."},
					  {d: "In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy. Season with salt and pepper to taste."}],
		 image:'images/mashedPotatoes.jpg'}

	];

	var tags = [];

	var factory = {};

	factory.getRecipes = function() {
		return recipes;
	};

	factory.getTags = function() {
		return tags;
	};
	
	factory.insertRecipe = function(name, ingredients, directions) {
		var newId = recipes.length + 1;
		recipes.push({
			id: newId,
			name: name,
			ingredients: ingredients,
			directions: directions,
			image: 'images/food_placeholder.png'
		});
	};

	factory.insertTag = function(name) {
		var newId = tags.length + 1;
		tags.push({
			id: newId,
			name: name
		});
	};

	factory.clearTags = function() {
		tags.length = 0;
	};

	factory.deleteRecipe = function(id) {
		for (var i = 0; i < recipes.length; i++) {
			if (recipes[i].id === id) {
				recipes.splice(i, 1);
			}
		}
	};

	factory.deleteTag = function(id) {
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].id === id) {
				tags.splice(i, 1);
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

	
	return factory;
});