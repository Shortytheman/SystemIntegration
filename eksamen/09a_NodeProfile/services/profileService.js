import Profile from '../models/profile.js';

/**
 * Create a new profile.
 * @param {Object} profileData - The profile data.
 * @returns {Promise<Object>} The newly created profile.
 * @throws Will throw an error if there is an issue creating the profile.
 */
const createProfile = async (profileData) => {
    try {
        const newProfile = await Profile.create(profileData);
        return newProfile;
    } catch (error) {
        throw new Error('Error creating profile: ' + error.message);
    }
};

/**
 * Get a profile by ID.
 * @param {string} profileId - The ID of the profile.
 * @returns {Promise<Object>} The profile with the specified ID.
 * @throws Will throw an error if there is an issue fetching the profile or if the profile is not found.
 */
const getProfileById = async (profileId) => {
    try {
        const profile = await Profile.findByPk(profileId);
        if (!profile) {
            throw new Error('Profile not found');
        }
        return profile;
    } catch (error) {
        throw new Error('Error fetching profile by ID: ' + error.message);
    }
};

/**
 * Update a profile.
 * @param {string} profileId - The ID of the profile to update.
 * @param {Object} newData - The new data for the profile.
 * @returns {Promise<Object>} The updated profile.
 * @throws Will throw an error if there is an issue updating the profile or if the profile is not found.
 */
const updateProfile = async (profileId, newData) => {
    try {
        const profile = await Profile.findByPk(profileId);
        if (!profile) {
            throw new Error('Profile not found');
        }
        await profile.update(newData);
        return profile;
    } catch (error) {
        throw new Error('Error updating profile: ' + error.message);
    }
};

/**
 * Delete a profile.
 * @param {string} profileId - The ID of the profile to delete.
 * @returns {Promise<Object>} A message indicating the profile was deleted.
 * @throws Will throw an error if there is an issue deleting the profile or if the profile is not found.
 */
const deleteProfile = async (profileId) => {
    try {
        const profile = await Profile.findByPk(profileId);
        if (!profile) {
            throw new Error('Profile not found');
        }
        await profile.destroy();
        return { message: 'Profile deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting profile: ' + error.message);
    }
};

/**
 * Find all profiles.
 * @returns {Promise<Array>} An array of all profiles.
 * @throws Will throw an error if there is an issue fetching the profiles.
 */
const findAllProfiles = async () => {
    try {
        const profiles = await Profile.findAll();
        return profiles;
    } catch (error) {
        throw new Error('Error fetching all profiles: ' + error.message);
    }
};

export { createProfile, getProfileById, updateProfile, deleteProfile, findAllProfiles };
