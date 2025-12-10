import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    name : {
        type : String,
        required : true
    },
    dateOfBooking : {
        type : Date,
        required : true
    },
    timeOfBooking : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["pending", "upcoming", "cancelled", "completed"],
        default : "pending"
    },
    service : {
        type : String,
        required : true,
        enum : ["Haircut", "Beard Trimming", "Head massage", "hair color", "Facial", "Grooming", "Kids haircut"]
    },
},{
    timestamps : true
})

export const Bookings = mongoose.model("Bookings", bookingSchema)