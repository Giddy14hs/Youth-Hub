import mongoose from "mongoose"
import Entrepreneur from '../models/entrepreneurModel.js'

const entrepreneur = {
// Create Entrepreneur Profile
createProfile: async (req, res) => {
  const { user, businessName, businessDescription, industry } = req.body;

  try {
    const entrepreneur = new Entrepreneur({ user, businessName, businessDescription, industry });
    await entrepreneur.save();
    res.status(201).json({ message: 'Entrepreneur profile created', entrepreneur });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Get Entrepreneur by ID
getProfile: async (req, res) => {
  try {
    const entrepreneur = await Entrepreneur.findById(req.params.id).populate('user');
    if (!entrepreneur) return res.status(404).json({ message: 'Entrepreneur not found' });

    res.status(200).json(entrepreneur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Update Entrepreneur Profile
updateProfile: async (req, res) => {
  try {
    const updatedEntrepreneur = await Entrepreneur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntrepreneur) return res.status(404).json({ message: 'Entrepreneur not found' });

    res.status(200).json(updatedEntrepreneur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Delete Entrepreneur Profile
deleteProfile: async (req, res) => {
  try {
    const deletedEntrepreneur = await Entrepreneur.findByIdAndDelete(req.params.id);
    if (!deletedEntrepreneur) return res.status(404).json({ message: 'Entrepreneur not found' });

    res.status(200).json({ message: 'Entrepreneur profile deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
};



export default entrepreneur;