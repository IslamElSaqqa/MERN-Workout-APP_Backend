const express = require('express');
// Define the router from express
const router = express.Router()
// GET All Workouts
router.get('/', (req, res) => {
    res.json({ mssg: "GET All Workouts" });
})
 // GET A single Workout
router.get('/:id', (req, res) => {
    res.json({ mssg: "GET A Single Workout" });
})
// Add A new workout
router.post('/', (req, res) => {
    res.json({ mssg: "Add New Workout" });
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