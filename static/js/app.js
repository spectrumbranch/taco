angular.module('app', ['app.config', 'ui.router', 'ngResource', 'app.modules'
        ])
	.config(['$resourceProvider','$urlRouterProvider',
	         function($resourceProvider,$urlRouterProvider) {
		//Don't strip trailing slashes from calculated URLs
		$resourceProvider.defaults.stripTrailingSlashes = false;
		//Set default route
		$urlRouterProvider.otherwise('/identify');
	}]);

angular.module('app.modules', [
    'identify',
    'food'
]);
