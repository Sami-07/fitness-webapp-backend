import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({

    email: String,
    workoutDay: String,
    workoutDetails: Object,
    createdAt: {
        type: String,
        default: new Date().toLocaleDateString()
    }
})


const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;