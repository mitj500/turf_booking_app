import mongoose from "mongoose";
await mongoose.connect( "mongodb+srv://mitj500:mitj500@turf.aax5qhq.mongodb.net",{dbName: "turf",}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

//github.com
