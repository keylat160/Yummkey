const express = require('express');
const router = express.Router()
const { recipes, ingredients } = require('../models')

router.post('/', async (req, res) => {
    try {
      if (!req.body.user_id) return res.status(400).json({ message: 'Please login.' })
      const ingredients = await ingredients.create(req.body)
      return res.json(ingredients)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  })

  router.get('/:id', async (req, res) => {
    const user_id = req.params.id
    try {
      const ingredients = await ingredients.findAll({ where: { user_id } })
      return res.json(ingredients)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  })
  
  module.exports = router