const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"]
    },

    img: {
      type: String,
      default: "https://via.placeholder.com/150",
      trim: true
    },

    job_title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Employee must be at least 18 years old"],
      max: [65, "Age cannot exceed 65"]
    }
  },
  {
    timestamps: true // automatically adds createdAt and updatedAt
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
