app.controller("header", function($scope, createElem, responsiveCols) {
	var innerMsgContainer = createElem.newElem("div", "container", null, topBodyClass),
	 	innerMsgRow = createElem.newElem("div", "row", null, innerMsgContainer),
		colLeft = createElem.newElem("aside", "msgLeft "+responsiveCols.colSize("md", 6), null, innerMsgRow);
		//Right Column variables
		aside = createElem.newElem("aside", "msgRight "+responsiveCols.colSize("md", 6), null, innerMsgRow);
	var	formElem = createElem.newElem("form", "form-horizontal form-inner", null, aside),
		formGroup = createElem.newElem("div", "form-group form-group-lg form-right", null, formElem);
		
	(function() {
		revObj			
			.reveal(".topBody .msgLeft", {
				distance:"9em",
				origin:"left",
				easing:"ease-out"
			})
			.reveal(".topBody .msgRight", {
				distance:"9em", 
				origin:"right",
				easing:"ease-out"
			});
	})();
		
	$scope.msg = {
		h1: "Start Reading Today",
		h3: "Build Your Own Personalized Library",
		button: "Browse books",
	};
	$scope.inputFields = {
		firstName: {type: "text", placeholder: "First Name"},
		lastName: {type: "text", placeholder: "Last Name"},
		email: {type: "email", placeholder: "Email Address"},
		bookTitle: {type: "text", placeholder: "Suggest a book title"},
		button: {type: "button", class: "btn btn-primary btn-lg btn-form", text: "Suggest Topic"}
	};
	
	//Left Column
	angular.forEach($scope.msg, function(value, key) {
		if(angular.isString(key)) {
			if(key.toString() == "button") {
				var btn = createElem.newElem(key, "btn btn-info btn-lg btn-msg", value, null);
				colLeft.append(btn);
			} else colLeft.append("<"+key+">"+value+"</"+key+">");
		} 
	});
	
	//Right Column Form Element
	$("<header></header>").addClass("formHead").append("<h3>Become an Author</h3>").prependTo(formElem);
	
	angular.forEach($scope.inputFields, function(value, key) {
		var fieldSet = createElem.newElem("fieldset", null, null, formGroup);
		if(key.toString() == "firstName" || key.toString() == "lastName") fieldSet.addClass(responsiveCols.colSize("md", 6));
		else fieldSet.addClass(responsiveCols.colSize("md", 12)); 
		switch(key.toString()) {
			case "button":
				var buttonElem = createElem.newElem("button", null, null, fieldSet);
				angular.forEach(value, function(value2, key2) {
					if(key2.toString() == "text") buttonElem.text(value2);
					else buttonElem.attr(key2, value2);
				});
				break;
			default:
				var inputElem = createElem.newElem("input", "form-control", null, fieldSet);
				angular.forEach(value, function(value2, key2) {
					if(key2.toString() == "placeholder") inputElem.attr(key2, value2);
					else inputElem.attr(key2, value2);
				});
				break;
		}
	});
});
