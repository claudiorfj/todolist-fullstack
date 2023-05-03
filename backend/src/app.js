/* eslint-disable linebreak-style */
const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()

app.use(router)
app.use(express.json())
app.use(cors())

module.exports = app