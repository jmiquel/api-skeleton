// content of index.js
const app = require('express')()
const routes = require('./routes')
const PORT = 3000

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Oh yeah! listening on port ${PORT}`)
  console.log(`http://localhost:${PORT}`)
})