const routes = require('express').Router()
const species = require('./species')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' })
})
routes.use('/species', species)

module.exports = routes