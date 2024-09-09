const mongoose = require('mongoose');
require('dotenv').config();  // For environment variables

// Connect to MongoDB Atlas using the connection string from .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database is successfully connected"))
.catch((error) => console.error("Unsuccessful Database connection", error));
