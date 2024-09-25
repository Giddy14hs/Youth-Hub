import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser"
import dotenv from 'dotenv';
import cors from "cors";
import userRoutes from './routes/user.js';
import entrepreneurRoutes from './routes/entrepreneur.js';
import mentorRoutes from './routes/mentor.js';
import investorRoutes from './routes/investor.js';

dotenv.config();

const app = express();
app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());


// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/entrepreneurs', entrepreneurRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/investors', investorRoutes);

const MONGO_URI = process.env.MONGO_URI

const PORT = process.env.PORT

const connectDB = async() => {
  try {
    await mongoose.connect(MONGO_URI)
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("Connection to MongoDB failed", error.message)
  }
}
connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established successfully"))
mongoose.connection.on("error", (error) => console.log(error));
