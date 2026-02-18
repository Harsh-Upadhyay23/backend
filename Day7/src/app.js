const express = require('express');
const cors = require('cors');   // ✅ Import CORS
const noteModel = require("../models/notes.model");

const app = express();

app.use(express.json());
app.use(cors());   // ✅ Enable CORS

/* ===========================
   CREATE NOTE
=========================== */
app.post('/notes', async (req, res) => {
  try {
    const note = await noteModel.create(req.body);

    res.status(201).json({
      msg: "Note created successfully",
      note
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating note",
      error: error.message
    });
  }
});

/* ===========================
   GET ALL NOTES
=========================== */
app.get('/notes', async (req, res) => {
  try {
    const note = await noteModel.find();

    res.status(200).json({
      note
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error fetching notes",
      error: error.message
    });
  }
});

module.exports = app;
