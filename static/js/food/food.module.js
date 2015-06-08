angular.module('food',['app.config'])
	.config(['$stateProvider','app.config', function($stateProvider, config){
		var basePath = config.scriptsPath+'food';
		$stateProvider
			.state('food', {
				url: '/food',
				templateUrl: basePath + '/food.html'
			})
			;
}]);