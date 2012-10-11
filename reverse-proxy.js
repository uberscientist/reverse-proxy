var httpProxy = require('http-proxy');

var options = {
  hostnameOnly: true,
  router: {
    'www.hivego.info': '127.0.0.1:3001',
    'hivego.info': '127.0.0.1:3001',
    'long.hivego.info': '127.0.0.1:3002',
    'wetwarehacks.com': '127.0.0.1:8080',
    'www.wetwarehacks.com': '127.0.0.1:8080',
    'www.bocksystems.com': '127.0.0.1:8080',
    'bocksystems.com': '127.0.0.1:8080',
    'charlesbock.com': '127.0.0.1:8080',
    'www.charlesbock.com': '127.0.0.1:8080',
    'fgsfds.com': '127.0.0.1:8080',
    'tenk.bocksystems.com': '127.0.0.1:8080',
    'tenk.charlesbock.com': '127.0.0.1:8080',
    'www.fgsfds.com': '127.0.0.1:8080',
    'ihacku.org': '127.0.0.1:8080',
    'www.ihacku.org': '127.0.0.1:8080',
    'ihacku.net': '127.0.0.1:8080',
    'www.verballistics.com': '127.0.0.1:8080',
    'verballistics.com': '127.0.0.1:8080',
    'www.blastwavelabs.com': '127.0.0.1:8080',
    'blastwavelabs.com': '127.0.0.1:8080',
    'mindsforge.com': '127.0.0.1:8080',
    'www.mindsforge.com': '127.0.0.1:8080',
    'abovesobelow.com': '127.0.0.1:8080',
    'www.abovesobelow.com': '127.0.0.1:8080',
    'www.azsilverfish.com': '127.0.0.1:8080',
    'azsilverfish.com': '127.0.0.1:8080',
    'www.wolfpuncher.com': '127.0.0.1:8080',
    'wolfpuncher.com': '127.0.0.1:8080'
  }
}

var proxyServer = httpProxy.createServer(
  require('./stats.js')()
  , options).listen(80);
