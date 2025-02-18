require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts');
// initate express app
const app = express();

// adding the middleware
app.use(express.json()) // Parsing the express incomings in json format
app.use((req, res, next) => { 
    console.log(req.path, req.method)
    next();
}) 
// routes
app.use('/api/workouts', workoutRoutes)
// listen
app.listen(process.env.PORT, () => {
    console.log ("listening to port: ", process.env.PORT);
});