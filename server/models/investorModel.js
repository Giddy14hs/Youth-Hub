import mongoose from "mongoose"

const investorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  investmentFocus: {
    type: [String],  // Array of areas/sectors
    required: true
  },
  fundingRange: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  portfolio: {
    type: [String],  // Optional: list of previous investments
  },
})

export default mongoose.model('Investor', investorSchema);
