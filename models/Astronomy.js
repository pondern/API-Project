import mongoose from "mongoose";

const Schema = mongoose.Schema

let AstronomySchema = new Schema ({
    date: {type: String},
    explanation: {type: String},
    media_type: {type: String},
    title: {type: String},
    hdurl: {type: String},
    url: {type: String}

})
export default mongoose.model("Astronomy", AstronomySchema)