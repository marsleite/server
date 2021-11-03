const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/post');

app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://admin:928010Mgr@cluster0.uvgnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch(err => console.log(err.message));

module.exports = app;
