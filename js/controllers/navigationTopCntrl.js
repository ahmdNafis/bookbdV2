app.controller("navigationTop", function($scope, createElem) {
	var navContainer = createElem.newElem("div", "container navInnerTop", null, navTopClass);
	var navItems = createElem.newElem("ul", "navItems nav navbar-nav pull-right", null, navContainer);
	var navHeader = createElem.newElem("div", "navbar-header", null, ".navInnerTop");
	
	$scope.navigationTop = {
		brandName: {logoName: "BookBD", logoFile: "img/logo.png"},
		//tagMsgs: {msg1: "Serving the digital world", msg2: "A library for everyone"},
		items: {home: "Home", library: "Library", authors: "Authors", about: "About Us"}
	} 
	
	angular.forEach($scope.navigationTop, function(value, key) {
		switch(key.toString()) {
			case "brandName":
				var brandLink = createElem.newElem("a", "navbar-brand logo", null, navHeader);
				angular.forEach(value, function(value2, key2) {
					if(key2.toString() == "logoName") brandLink.text(value2);
					else brandLink.attr("href", value2);
				});
				break;
			default:
				angular.forEach(value, function(value2, key2) {
					navItems.append("<li><a href='"+key2.toString()+"'>"+value2+"</a><li>");
				});
				break;
		}
	});
	
	(function() {
		revObj.reveal(".logo", {
			distance:"25px",
			origin:"bottom",
			easing:"ease-in-out"
		});
	})();
	
	$("<button type='button'></button>").text("Login").addClass("btn btn-info navbar-btn").appendTo(navItems);
	$("<button type='button'></button>").text("Register").addClass("btn btn-info navbar-btn").css({marginLeft: ".95em"}).appendTo(navItems);
});