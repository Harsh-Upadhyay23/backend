const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [];

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/student', (req, res) => {
  const student = req.body;

  if (!student || Object.keys(student).length === 0) {
    return res.status(400).json({ message: 'Student data is required' });
  }

  students.push(student);
  res.status(201).json({
    message: 'Student added successfully',
    data: student
  });
});

app.get('/students', (req, res) => {
  res.status(200).json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
