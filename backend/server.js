require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const chatRoutes = require('./routes/chatRoutes');

const app = express(); 


app.use(express.json());
app.use(cors());


app.use('/api', chatRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('API Running');
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});