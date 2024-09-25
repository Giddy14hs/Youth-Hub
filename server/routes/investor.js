import {Router} from 'express';
import investorController from '../controllers/investor.js';

const router = Router()
// Create Investor Profile
router.post('/create', investorController.createProfile);

// Get Investor by ID
router.get('/:id', investorController.getProfile);

// Update Investor Profile
router.put('/:id', investorController.updateProfile);

// Delete Investor Profile
router.delete('/:id', investorController.deleteProfile);

export default router;
