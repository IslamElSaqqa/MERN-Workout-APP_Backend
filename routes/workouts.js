/*  1. Define Express app
    2. Define the Model created 
    3. Define APIs
    4. Any api request is itself synchrounous.
*/
const express = require('express');
const router = express.Router()
const Workout = require('../models/workoutModel');

// GET All Workouts
router.get('/', (req, res) => {
    res.json({ mssg: "GET All Workouts" });
})

 // GET A single Workout
router.get('/:id', (req, res) => {
    res.json({ mssg: "GET A Single Workout" });
})

// Add A new workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        // Create the collection using the model
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (err) { 
        res.status(400).json({ error: err.message });
    }
    })

 // DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({ mssg: "DELETE A Workout" });
})

// Update A Workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: "Update A Workout" });
})
module.exports = router;