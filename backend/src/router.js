/* eslint-disable linebreak-style */
const express = require('express')
const router = express.Router()
const tasksController = require('./controllers/taskController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validateFieldStatus, tasksMiddleware.validateFieldTitle,tasksController.updateTask)

module.exports = router