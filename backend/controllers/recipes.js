const express = require('express');
const router = express.Router()
const { recipes, ingredients } = require('../models')

router.post('/', async (req, res) => {
    try {
      if (!req.body.user_id) return res.status(400).json({ message: 'Please login.' })
      const recipes = await recipes.create(req.body)
      return res.json(recipes)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  })

  router.get('/:id', async (req, res) => {
    const user_id = req.params.id
    try {
      const recipes = await recipes.findAll({ where: { user_id } })
      return res.json(recipes)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server Error' })
    }
  })
  
  module.exports = router
