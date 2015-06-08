var Taco = require('./lib');

var Hapi = Taco.Hapi;
var masterConfig = require('./config/config');

var serverConfig = masterConfig.config;
        
if (serverConfig.tls) {
    console.log('Loading tls');
    options.tls = tlsConfig;
}

var server = new Hapi.Server();
server.connection({ port: serverConfig.port, address: serverConfig.hostname });

server.route(Taco.Routes.get(Taco));

server.start();
console.log('Server up at ' + server.info.uri + ' !');