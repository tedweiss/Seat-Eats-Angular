var app = angular.module("seatEats");

app.directive("venues", function(){
	return {
		restrict: "E",
// make this a template url and link to a partial html		template: '<div ng-style="{\'background-image\': \'url(\' + contents.background + \')'}"><img src="{{contents.logo}}" alt="testing"><p>{{contents.name}}</p></div>',
		repeat: false
	};
});
