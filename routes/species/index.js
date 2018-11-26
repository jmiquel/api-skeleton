const router = require('express').Router()
const axios = require('axios')
const config = require('../../config')

router.get('/', (req, res) => {
  axios.get(`${config.API_URL}/species?search=${req.query.name}`)
  .then((response) => {
    res.send(response.data.results)
  })
  .catch((err) => {
    res.send(err)
  })
})

router.get('/:species', async (req, res) => {
  const response = await axios.get(`${config.API_URL}/species?search=${req.params.species}`)
  const species = response.data.results[0]
  let peopleArr = species.people

  peopleArr = peopleArr.map(person => {
    return axios.get(person)
  })

  Promise.all(peopleArr).then((response) => {
    let people = []

    response.forEach(person => {
      people.push(person.data.name)
    })

    res.send({ species: species.name, people })
  })
})

module.exports = router