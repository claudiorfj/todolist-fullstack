/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const { response } = require('express')
const tasksModel = require('../models/tasksModel')

const getAll = async (_req, res) => {
	const tasks = await tasksModel.getAll()
	return res.status(200).json(tasks)
}

const createTask = async (req, res) => {
	const createdTask = await tasksModel.createTask(res.body)
	return res.status(201).json(createdTask)
}

const deleteTask = async (req, res) => {
	const { id } = req.params
	await tasksModel.deleteTask(id)
	return response.status(204).json()
}

module.exports = {
  getAll,
	createTask,
	deleteTask,
}