const express = require('express');
const cors = require('cors');
const employeeModel = require('./models/employee.model.js');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

/* ===========================
   CREATE EMPLOYEE
=========================== */
app.post('/api/employee', async (req, res) => {
  try {
    const employee = await employeeModel.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
});


/* ===========================
   GET ALL EMPLOYEES
=========================== */
app.get('/api/employee', async (req, res) => {
  try {
    const employees = await employeeModel.find();

    return res.status(200).json({
      success: true,
      count: employees.length,
      data: employees
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


/* ===========================
   GET SINGLE EMPLOYEE
=========================== */
app.get('/api/employee/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: employee
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid Employee ID"
    });
  }
});


/* ===========================
   UPDATE EMPLOYEE
=========================== */
app.patch('/api/employee/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: employee
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
});


/* ===========================
   DELETE EMPLOYEE
=========================== */
app.delete('/api/employee/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully"
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid Employee ID"
    });
  }
});

module.exports = app;
