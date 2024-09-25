import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  googleId: {type: String, unique: true},
  email: {type: String, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
})

export default mongoose.model("User", userSchema);