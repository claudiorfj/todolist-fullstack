/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const tasksModel = require('../models/tasksModel')

const getAll = async (_req, res) => {
	const tasks = await tasksModel.getAll()
	return res.status(200).json(tasks)
}

const createTask = async (req, res) => {
	const createdTask = await tasksModel.createTask(res.body)
	return res.status(201).json(createdTask)
}

module.exports = {
    getAll,
	createTask,
}