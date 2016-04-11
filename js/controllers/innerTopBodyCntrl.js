app.controller("innerTopBody", function($scope, createElem, responsiveCols) {
	var headContainer = createElem.newElem("div", "container", null, ".innerBody"),
		headRow = createElem.newElem("div", "row", null, headContainer),
		topBodyRow = createElem.newElem("div", "row topBodyRow", null, headContainer),
	 	headColLeft = createElem.newElem("div", responsiveCols.colSize("md", 12), null, headRow),
	 	headerElem = createElem.newElem("header", "innerBodyTitle", null, headColLeft),
	 	counter = 0;
	
	$scope.head = {
		h3: "How It Works",
		h4: "Create Your Own Library"
	}
	
	$scope.body = {
		topBody: {
			title: ["Title 1", "Title 2", "Title 3"],
			imagePath: ["img/img1.svg", "img/img1.svg", "img/img1.svg"],
			text: ["This is column 1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo ", 
			"This is column 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo ", 
			"This is column 3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo "]
		}
	}
	
	angular.forEach($scope.head, function(value, key) {
		createElem.newElem(key, "headTag"+(++counter), value, headerElem);
	});
	
	for(i=0; i < $scope.body.topBody.title.length; i++) { 
		var columns = createElem.newElem("div", responsiveCols.colSize("md", 4, true), null, topBodyRow);
		createElem.newElem("h4", null, $scope.body.topBody.title[i], columns);
		createElem.newElem("img", "img-thumbnail", null, columns).attr("src", $scope.body.topBody.imagePath[i].toString());
		createElem.newElem("p", null, $scope.body.topBody.text[i], columns);
	}
	
});