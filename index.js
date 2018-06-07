const app = require('express')()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/error', function (req, res) {
  res.status(500).send('Something broke!')
})

app.listen(8080)
