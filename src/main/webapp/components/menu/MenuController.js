var MenuController = function($scope, $rootScope, $sce, $timeout, $location,
		$route, $interval, $cookieStore, $window) {

	$scope.menuTabs = [ {
		'name' : 'Main Page',
		'url' : '#landing',
		'font' : 'fa fa-home'
	}, {
		'name' : 'Services',
		'url' : '#services',
		'font' : 'fa fa-eyedropper'
	}, {
		'name' : 'Vets',
		'url' : '#vets',
		'font' : 'fa fa-paw'
	}, {
		'name' : 'Veterinarians',
		'url' : '#veterinarians',
		'font' : 'fa fa-user'
	}, {
		'name' : 'Help',
		'url' : '#help',
		'font' : 'fa fa-question'
	} ];
	$scope.$route = $route;
    $scope.$location = $location;
};

var MenuControllerDeclaration = [ '$scope', '$rootScope', '$sce', '$timeout',
		'$location', '$route', '$interval', '$cookieStore', '$window',
		MenuController ];