const express = require('express');
const app = express();
const port = process.env.PORT || 5174;
const cors = require('cors');

app.use(cors());

const dumb_data = require('./dumb_data.json');

app.get('/api/petitions', (req, res) => {
  const { segment, id } = req.query;

  let filteredData = dumb_data;
  if (segment) {
    filteredData = filteredData.filter(item => item.segment.code === segment);
  }
  if (id) {
    const id = parseInt(req.query.id); 
    filteredData = filteredData.find((item) => item.id === id);
    if (filteredData) {
      return res.json(filteredData);
    } else {
      return res
        .status(404)
        .json({ message: 'No petition found with provided ID' });
    }
  }
  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
