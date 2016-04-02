app.service("formRight", function($scope) {	
	var aside = $("<aside></aside>").addClass("msgRight col-md-6").appendTo(innerMsgRow);
	var formElem = $("<form></form>").addClass("form-horizontal form-inner").appendTo(aside);
	var formGroup = $("<div></div>").addClass("form-group form-group-lg form-right").appendTo(formElem);
	$("<header></header>").addClass("formHead").append("<h3>Become an Author</h3>").prependTo(formElem);
	angular.forEach($scope.inputFields, function(value, key) {
		var fieldSet = $("<fieldset></fieldset>").appendTo(formGroup);
		if(key.toString() == "firstName" || key.toString() == "lastName") fieldSet.addClass("col-md-6");
		else fieldSet.addClass("col-md-12"); 
		switch(key.toString()) {
			case "button":
				var buttonElem = $("<button></button>").appendTo(fieldSet);
				angular.forEach(value, function(value2, key2) {
					if(key2.toString() == "text") buttonElem.text(value2);
					else buttonElem.attr(key2, value2);
				});
			break;
			default:
				var inputElem = $("<input>").addClass("form-control").appendTo(fieldSet);
				angular.forEach(value, function(value2, key2) {
					if(key2.toString() == "placeholder") inputElem.attr(key2, value2);
					else inputElem.attr(key2, value2);
				});
			break;
		}
	});
});