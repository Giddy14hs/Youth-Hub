import mongoose from "mongoose"

const mentorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fieldOfExpertise: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
})

export default mongoose.model('Mentor', mentorSchema);
