
// Add this to the VERY top of the first file loaded in your app
const apm = require('elastic-apm-node').start({
  // Override service name from package.json
  //   // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'apm-server-sample-apm-http',
  // Use if APM Server requires a token
  secretToken: 'Bfi9plmPW4a1h3f997Ur529s',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://apm-server-sample-apm-http.eck.svc:8200',
  verifyServerCert: 'false',
})
const app = require('express')()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080)
