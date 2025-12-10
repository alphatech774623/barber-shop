import mongoose from 'mongoose'

const contactShema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required :true
    },
    message : {
        type : String,
        required : true
    }
},{timestamps : true})

export const Contact = mongoose.model("Contact", contactShema);