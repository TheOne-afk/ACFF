const express = require('express')
const {createWorkout,getSingleWorkout,getWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController")
const router = express.Router()


//! API Endpoints
/* 
1. GET /workouts --> Gets all workout documents.
2. POST /workouts --> Creates a new workout document.
3. GET /workouts/:id --> Gets a single workout document.
4. DELETE /workouts/:id --> Deletes a single workout.
5. PATCH /workouts/:id --> Updates a single workout.
*/

// ROUTES
// GET all workouts
router.get('/', getWorkout)

// GET single workout
router.get('/:id',getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router