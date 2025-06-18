import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const create = async (req, res) => {
  try {
    const body = req.body;
    console.log("Received user data:", body);

    const hashedPassword = await bcrypt.hash(body.password, 5);

    const user = await User.create({
      email: body.email,
      firstname: body.firstname,
      lastname: body.lastname,
      password: hashedPassword,
      role: body.role,
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt with email:", email);

    // Find user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("Email not found");
      return res.status(401).json({ message: "Invalid email" });
    }

    const passMatched = await bcrypt.compare(password, user.password);

    if (!passMatched) {
      console.log("Incorrect Password");
      return res
        .status(401)
        .json({ message: "Invalid Password for this email." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    console.log("User found:", user);
    console.log("Token generated:", token);
    res
      .status(200)
      .json({ message: "Login successful", token: token, user: user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const dashboard = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
    console.log("Received token:", token);
    if (!token) {
      return res.status(401).json({ message: "please login" });
    }
    // try{
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded token:", decoded);
    // }catch(error){
    //   console.error("Token verification failed:", error);
    //   return res.status(401).json({ message: "Invalid token" });
    // }
    // Find user by ID from the token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "welcome , to your dash" + user.firstname, user: user });
  } catch (error) {
    console.error("invalid jwt", error);
    res.status(401).json({ message: "Invalid jwt" });
  }
};

const profile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // [Bearer] [ad41sdas51c4as1cx485as4c]
    console.log("Received token:", token);
    if (!token) {
      return res.status(401).json({ message: "please login" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded token:", decoded);

    // Find user by ID from the token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User profile retrieved successfully", user: user });
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const changePassword = async (req, res) => {
  // This function can be implemented to handle password changes
  // It would typically involve verifying the user's identity and updating the password in the database
  // For now, we can leave it as a placeholder
  try {
    console.log("Change password functionality is not yet implemented.");
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Please login" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const { newPassword } = req.body; 
    const finalvar= await bcrypt.hash(newPassword,5)// Object Destructuring
    user.password = finalvar; // Update the user's password
    await user.save(); // Save the updated user document
    res.status(200).json({ message: "Password changed successfully" });

  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const NewMail = async (req, res) => {
  // This function can be implemented to handle password changes
  // It would typically involve verifying the user's identity and updating the password in the database
  // For now, we can leave it as a placeholder
  try {
    console.log("Change email functionality is not yet implemented.");
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Please login" });
    }
    
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    
    }
    
    
    const { newEmail } = req.body; 
     if(!newEmail ){
      console.log(newEmail)
      return res.status(400).json({ message: "New email is required" });
     }; 
   
    user.email = newEmail; // Update the user's password
    await user.save(); // Save the updated user document
    res.status(200).json({ message: "email changed successfully" });

  } catch (error) {
    console.error("Error changing email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { create, login, dashboard, profile, changePassword, NewMail };
