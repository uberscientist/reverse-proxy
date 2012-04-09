var httpProxy = require('http-proxy');

var options = {
  hostnameOnly: true,
  router: {
    'hivego.info': '127.0.0.1:3001',
    'wetwarehacks.com': '127.0.0.1:3002'
  }
}

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);
