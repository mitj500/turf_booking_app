import "dotenv/config"; // Load environment variables from .env file
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import turfRoutes from "./routes/turfRoutes.js"
import User from "./models/User.js"; // Adjust the path as necessary

const app = express();
app.use(express.json()); // Tells Express that the data coming from client is in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // Tells the exact JSON format to express
app.use(
  cors({
    origin: "*", // Allow all origins, adjust as needed for security
  })
); // Tells express to allow requests from all URLs

app.use("/user", userRoutes)
app.use("/turf", turfRoutes)


// Example route to handle user creation

// // Replace with your MongoDB connection string
// app.post("/user/create", async (req, res) => {
//   try {
//     const body = req.body;
//     console.log("Received user data:", body);
//     const user = await User.create({
//       email: body.email,
//       firstname: body.firstname,
//       lastname: body.lastname,
//       password: body.password,
//       role: body.role,
//     });

//     res.status(201).json({ message: "User created successfully", user });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return res.status(500).json({ message: "Error creating user" });
//   }
// });

// app.post("/user/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("Login attempt with email:", email);

//     // Find user by email
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       console.log("Email not found");
//       return res.status(401).json({ message: "Invalid email" });
//     }

//     if (user.password !== password) {
//       console.log("Incorrect Password");
//       return res.status(401).json({ message: "Invalid Password for this email." });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.SECRET_KEY,
//       { expiresIn: "1h" }
//     );

//     console.log("User found:", user);
//     console.log("Token generated:", token);
//     res.status(200).json({ message: "Login successful", token: token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// app.get("/user/dashboard", async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
//     console.log("Received token:", token);
//     if (!token) {
//       return res.status(401).json({ message: "please login" });
//     }
//     // try{
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     console.log("Decoded token:", decoded);
//     // }catch(error){
//     //   console.error("Token verification failed:", error);
//     //   return res.status(401).json({ message: "Invalid token" });
//     // }
//     // Find user by ID from the token
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "welcome , to your dash" + user.firstname, user });
//   } catch (error) {
//     console.error("invalid jwt", error);
//     res.status(401).json({ message: "Invalid jwt" });
//   }
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
