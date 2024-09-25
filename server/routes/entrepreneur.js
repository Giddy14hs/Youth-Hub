import {Router} from 'express';
import entrepreneurController from '../controllers/entrepreneur.js';

const router = Router();
// Create Entrepreneur Profile
router.post('/create', entrepreneurController.createProfile);

// Get Entrepreneur by ID
router.get('/:id', entrepreneurController.getProfile);

// Update Entrepreneur Profile
router.put('/:id', entrepreneurController.updateProfile);

// Delete Entrepreneur Profile
router.delete('/:id', entrepreneurController.deleteProfile);

export default router;
