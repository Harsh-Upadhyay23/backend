const express = require('express');
const app = express();

app.use(express.json());

let notes = [
  { name: "Harsh" }
];

// CREATE NOTE
app.post('/notes', (req, res) => {
  console.log(req.body);
  notes.push(req.body);

  res.status(201).json({
    msg: "note created"
  });
});

// READ ALL NOTES
app.get('/notes', (req, res) => {
  res.json(notes);
});

// UPDATE NOTE (PARTIAL UPDATE)
app.patch('/notes/:index', (req, res) => {
  const index = req.params.index;

  // check note exists
  if (!notes[index]) {
    return res.status(404).json({
      msg: "note not found"
    });
  }

  // merge old + new data
  notes[index] = {
    ...notes[index],
    ...req.body
  };

  res.json({
    msg: "note updated",
    updatedNote: notes[index]
  });
});

module.exports = app; 
