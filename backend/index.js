// index.js
const express = require('express');
const connectDB = require('./db'); 
const userRoutes = require('./routes/userroutes');

const app = express();
connectDB();
app.use(express.json());

app.use('/api', userRoutes);
app.get('/', (req, res) => {
  res.send('✅ API is working');
  console.log('GET request received');
});
const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
