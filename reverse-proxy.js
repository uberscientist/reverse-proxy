var httpProxy = require('http-proxy');

var options = {
  hostnameOnly: true,
  router: {
    'www.hivego.info': '127.0.0.1:3001',
    'hivego.info': '127.0.0.1:3001',
    'long.hivego.info': '127.0.0.1:3002',
    'www.wetwarehacks.com': '127.0.0.1:8080',
    'wetwarehacks.com': '127.0.0.1:8080',
    'www.mindsforge.com': '127.0.0.1:8080',
    'mindsforge.com': '127.0.0.1:8080',
    'www.abovesobelow.com': '127.0.0.1:8080',
    'abovesobelow.com': '127.0.0.1:8080',
    'www.azsilverfish.com': '127.0.0.1:8080',
    'azsilverfish.com': '127.0.0.1:8080',
    'www.apdaarizona.com': '127.0.0.1:9001',
    'apdaarizona.com': '127.0.0.1:9001',
    'www.lovejes.us': '127.0.0.1:8085',
    'lovejes.us': '127.0.0.1:8085',
    'www.wolfpuncher.com': '127.0.0.1:9001',
    'wolfpuncher.com': '127.0.0.1:9001'
  }
}

var proxyServer = httpProxy.createServer(
  require('./stats.js')()
  , options).listen(80);
