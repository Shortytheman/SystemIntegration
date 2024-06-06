import { Router } from "express";
import { createProfile, getProfileById, updateProfile, deleteProfile, findAllProfiles } from "../services/profileService.js";

const router = Router();

/**
 * Creates a new profile.
 * 
 * @route POST /
 * @param {Request} req - Express request object containing the profile data in the body.
 * @param {Response} res - Express response object used to send the newly created profile.
 * @param {Function} next - Express middleware function for error handling.
 */
router.post('/', async (req, res, next) => {
    try {
        const newProfile = await createProfile(req.body);
        res.status(201).json(newProfile);
    } catch (error) {
        next(error);
    }
});

/**
 * Gets a profile by ID.
 * 
 * @route GET /:profileId
 * @param {Request} req - Express request object containing the profile ID in the parameters.
 * @param {Response} res - Express response object used to send the profile data.
 * @param {Function} next - Express middleware function for error handling.
 */
router.get('/:profileId', async (req, res, next) => {
    try {
        const profile = await getProfileById(req.params.profileId);
        res.json(profile);
    } catch (error) {
        next(error);
    }
});

/**
 * Updates a profile by ID.
 * 
 * @route PUT /:profileId
 * @param {Request} req - Express request object containing the profile ID in the parameters and the update data in the body.
 * @param {Response} res - Express response object used to send the updated profile data.
 * @param {Function} next - Express middleware function for error handling.
 */
router.put('/:profileId', async (req, res, next) => {
    try {
        const updatedProfile = await updateProfile(req.params.profileId, req.body);
        res.json(updatedProfile);
    } catch (error) {
        next(error);
    }
});

/**
 * Deletes a profile by ID.
 * 
 * @route DELETE /:profileId
 * @param {Request} req - Express request object containing the profile ID in the parameters.
 * @param {Response} res - Express response object used to send the result of the deletion.
 * @param {Function} next - Express middleware function for error handling.
 */
router.delete('/:profileId', async (req, res, next) => {
    try {
        const result = await deleteProfile(req.params.profileId);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

/**
 * Gets all profiles.
 * 
 * @route GET /
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object used to send the list of profiles.
 * @param {Function} next - Express middleware function for error handling.
 */
router.get('/', async (req, res, next) => {
    try {
        const profiles = await findAllProfiles();
        res.json(profiles);
    } catch (error) {
        next(error);
    }
});

export default router;
