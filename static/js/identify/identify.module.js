angular.module('identify',['app.config'])
	.config(['$stateProvider','app.config', function($stateProvider, config){
		var basePath = config.scriptsPath+'identify';
		$stateProvider
			.state('identify', {
				url: '/identify',
				templateUrl: basePath + '/identify.html'
			})
			;
}]);