/* eslint-disable linebreak-style */
const express = require('express')
const router = express.Router()
const tasksController = require('./controllers/taskController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware, tasksController.createTask)

module.exports = router