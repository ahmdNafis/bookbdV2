app.service("createElem", function($rootScope) {
	return {
		newElem: function(elemName, className, innerText, appendToVal) {
					var elem = $("<"+elemName+"></"+elemName+">");
					if(className != null) elem.addClass(className.toString());
					if(innerText != null) elem.text(innerText.toString());
					if(appendToVal != null)
						return (typeof appendToVal === "object") ? elem.appendTo(appendToVal) : elem.appendTo(appendToVal.toString());
					else return elem; 
				}
	}	
});