app.controller("innerTopBody", function($scope, createElem) {
	var headContainer = createElem.newElem("div", "container", null, ".innerBody"),
		headRow = createElem.newElem("div", "row", null, headContainer),
	 	headColLeft = createElem.newElem("div", "col-md-12", null, headRow),
	 	headerElem = createElem.newElem("header", "innerBodyHead", null, headColLeft),
	 	counter = 0;
	
	$scope.head = {
		h3: "How It Works",
		h4: "Create Your Own Library"
	}
	
	angular.forEach($scope.head, function(value, key) {
		createElem.newElem(key, "headTag"+(++counter), value, headerElem);
	});
});