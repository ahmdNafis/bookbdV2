app.service("responsiveCols", function($rootScope) {
	return {
		colSize: function(size, width) {
			if(!angular.isNumber(width) && !angular.isString(size)) return;
			switch(size) {
				case "lg":
					return "col-"+size+"-"+width.toString();
					break;
				case "md":
					return "col-"+size+"-"+width.toString();
					break;
				case "sm":
					return "col-"+size+"-"+width.toString();
					break;
				case "xs":
					return "col-"+size+"-"+width.toString();
					break;
				default:
					return false;
					break;
			}		
		}
	}
});


