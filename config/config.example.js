/*
  Use this file as a template for configuring the 
  HTTP server aspect of the application.
  Rename this file to config.js and update
  the following configuration:
*/

exports.config = {
  hostname: '0.0.0.0',
  port: 4312,
  tls: false
};

//If exports.config.tls == true, then the following tlsconfig is required to be uncommented and filled out properly.
//Keep this commented out if exports.config.tls == false
//var fs = require('fs');
//exports.tlsconfig = {
//  key: fs.readFileSync('/somewhere/fixtures/keys/taco-key.pem'),
//  cert: fs.readFileSync('/somewhere/fixtures/keys/taco-cert.pem')
//}