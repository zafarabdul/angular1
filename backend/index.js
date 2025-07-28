// index.js
const express = require('express');
const connectDB = require('./db'); 
const userRoutes = require('./routes/userroutes');
const cors = require('cors');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.get('/', (req, res) => {
  res.send('✅ API is working');
  console.log('GET request received');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
