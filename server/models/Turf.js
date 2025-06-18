import mongoose from "mongoose";

const turfSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    
    
  },
  { timestamps: true }
);


const Turf = mongoose.model("Turf", turfSchema);
export default Turf;
