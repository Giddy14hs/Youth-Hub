import Mentor from '../models/mentorModel.js';

// Mentor Controller
const mentor = {
  // Create Mentor Profile
  createProfile: async (req, res) => {
    const { user, fieldOfExpertise, bio, yearsOfExperience, availability } = req.body;

    try {
      const mentor = new Mentor({ user, fieldOfExpertise, bio, yearsOfExperience, availability });
      await mentor.save();
      res.status(201).json({ message: 'Mentor profile created', mentor });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get Mentor by ID
  getProfile: async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.id).populate('user');
      if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

      res.status(200).json(mentor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update Mentor Profile
  updateProfile: async (req, res) => {
    try {
      const updatedMentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedMentor) return res.status(404).json({ message: 'Mentor not found' });

      res.status(200).json(updatedMentor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete Mentor Profile
  deleteProfile: async (req, res) => {
    try {
      const deletedMentor = await Mentor.findByIdAndDelete(req.params.id);
      if (!deletedMentor) return res.status(404).json({ message: 'Mentor not found' });

      res.status(200).json({ message: 'Mentor profile deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default mentor;
