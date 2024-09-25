import Investor from '../models/investorModel.js';

// Investor Controller
const investor = {
  // Create Investor Profile
  createProfile: async (req, res) => {
    const { user, investmentFocus, fundingRange, portfolio, contactPreferences } = req.body;

    try {
      const investor = new Investor({ user, investmentFocus, fundingRange, portfolio, contactPreferences });
      await investor.save();
      res.status(201).json({ message: 'Investor profile created', investor });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get Investor by ID
  getProfile: async (req, res) => {
    try {
      const investor = await Investor.findById(req.params.id).populate('user');
      if (!investor) return res.status(404).json({ message: 'Investor not found' });

      res.status(200).json(investor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update Investor Profile
  updateProfile: async (req, res) => {
    try {
      const updatedInvestor = await Investor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedInvestor) return res.status(404).json({ message: 'Investor not found' });

      res.status(200).json(updatedInvestor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete Investor Profile
  deleteProfile: async (req, res) => {
    try {
      const deletedInvestor = await Investor.findByIdAndDelete(req.params.id);
      if (!deletedInvestor) return res.status(404).json({ message: 'Investor not found' });

      res.status(200).json({ message: 'Investor profile deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default investor;
