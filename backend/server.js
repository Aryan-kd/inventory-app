const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute.js');
const errorHandler = require('./middleware/errorMiddleware.js');
const app = express();

//Port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes Middleware
app.use('/api/users', userRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

//Error Middleware
app.use(errorHandler);

// Connect to Database and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
