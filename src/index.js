import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config()

connectDB()
.then(()=>[
    app.listen(process.env.PORT || 8000, ()=>{
        `Server is running at PORT ${process.env.PORT}`
    })
])
.catch((err)=>{
    console.log("MongoDB connection failed!! ", err );
})

// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on PORT ${process.env.PORY}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw err;
//   }
// })();
