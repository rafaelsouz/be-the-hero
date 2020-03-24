import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'bora corno' });
});

app.listen(3333);
