var app = angular.module("seatEats", []);

app.controller('venueCtrl', function($scope){
	$scope.venue = [
		{background: "images/comericaPark.jpg", logo: "images/logoTigers.png", name: "Comerica Park", href: "html/comerica.html"},
		{background: "images/comericaPark.jpg", logo: "images/logoTigers.png", name: "Comerica Park", href: "html/comerica.html"},
		{background: "images/jla.jpg", logo: "images/logoRedWings.png", name: "Joe Louis Arena", href: "html/jla.html"},

	];
});
