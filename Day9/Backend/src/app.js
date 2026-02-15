const express = require('express');
const cors = require('cors');
const employeeModel = require('./models/employee.model.js');

const app = express();

app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

app.post('/api/employee', async (req, res) => {
  try {
    const employee = await employeeModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

app.get('/api/employee', async (req, res) => {
  try {
    const employees = await employeeModel.find();

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.get('/api/employee/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      data: employee
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid employee ID"
    });
  }
});

app.patch('/api/employee/:id', async (req, res) => {
  try {
    const updatedEmployee = await employeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: updatedEmployee
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

app.delete('/api/employee/:id', async (req, res) => {
  try {
    const deletedEmployee = await employeeModel.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid employee ID"
    });
  }
});

module.exports = app;
