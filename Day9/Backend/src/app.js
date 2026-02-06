const express = require('express')
const app = express()
const employeeModel = require('./models/employee.model.js')
const cors = require('cors')

app.use(express.json())
app.use(express.static("./public"))
app.use(cors())

app.post('/api/employee', async (req, res) => {
  const data = await employeeModel.create(req.body)
  res.status(201).json({
    msg: "employee created",
    data
  })
})

app.get('/api/employee', async (req, res) => {
  const data = await employeeModel.find()
  res.status(200).json({ data })
})
app.get('/api/employee/:id', async (req, res) => {
  const data = await employeeModel.findById(req.params.id);
  res.status(200).json({ data })
 
})

app.patch('/api/employee/:id', async (req, res) => {
  const data = await employeeModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json({
    msg: "employee updated",
    data
  })
})

app.delete('/api/employee/:id', async (req, res) => {
  await employeeModel.findByIdAndDelete(req.params.id)
  res.status(200).json({
    msg: "employee deleted"
  })
})

module.exports = app
