import mongoose from "mongoose"

const entrepreneurSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming User is a separate model for user accounts
    required: true
  },
  businessName: {
    type: String,
    required: true
  },
  businessDescription: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
})

export default mongoose.model('Entrepreneur', entrepreneurSchema);