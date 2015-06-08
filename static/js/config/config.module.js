angular.module('app.config',[]);

(function(){
angular.module('app.config')
	.constant('app.config', {
		scriptsPath: getScriptsPath()
	});

	function getScriptsPath(){
		var scripts = document.getElementsByTagName("script");
		var currentScriptPath = scripts[scripts.length-1].src;
		return currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1).replace('config/','');
	}
})();