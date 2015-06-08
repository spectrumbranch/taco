module.exports.get = function(Taco) {

	return [
	  //Taco Routes

      
	  //All static content
	  { method: '*', path: '/{path*}', config: { handler: { directory: { path: './static/', redirectToSlash: true } } } }
	];
};