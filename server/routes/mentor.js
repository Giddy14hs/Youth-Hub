import {Router} from 'express';
import mentorController from '../controllers/mentor.js';

const router = Router();

// Create Mentor Profile
router.post('/create', mentorController.createProfile);

// Get Mentor by ID
router.get('/:id', mentorController.getProfile);

// Update Mentor Profile
router.put('/:id', mentorController.updateProfile);

// Delete Mentor Profile
router.delete('/:id', mentorController.deleteProfile);

export default router;
