import jwt from "jsonwebtoken"
import User from "../models/User.js"; // Adjust the path as necessary
import Turf from "../models/Turf.js"; // Adjust the path as necessary


const createTurf = async (req, res) => {
try {  const token = req.headers.authorization?.split(" ")[1];
  if (!token) { 
    return res.status(401).json({ message: "Please login" });
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  const user = await User.findById(decoded.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.role != "renter") {
     return res.status(401).json({ message: "Unauthorized. Only renters can create turf" });
  }

  const { name, location, price, description } = req.body;
  if (!name || !location || !price || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newTurf = new Turf({
    name: name,
    location: location,
    price: price,
    description: description,
  })

  await newTurf.save()

  return res.status(200).json({message: "Turf created successfully", turf: newTurf});
} catch (error) {
  console.error("Error creating turf:", error);
  return res.status(500).json({ message: "Internal server error" });
}
 
};
const getTurf = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
        return res.status(401).json({ message: "Please login" });
        }
    
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
        const user = await User.findById(decoded.id);
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }
    
        if (user.role != "renter") {
        return res.status(401).json({ message: "Unauthorized. Only renters can view turf" });
        }
    
        const turfs = await Turf.find({});

    
        return res.status(200).json({ message: "Turf retrieved successfully", turfs: turfs });
    } catch (error) {
        console.error("Error retrieving turf:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

export default {createTurf, getTurf};

