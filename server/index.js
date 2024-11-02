import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/birds', async (req, res) => {
  try {
    const response = await axios.get('https://aves.ninjas.cl/api/birds');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching birds:', error);
    res.status(500).json({ error: 'Failed to fetch birds data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});