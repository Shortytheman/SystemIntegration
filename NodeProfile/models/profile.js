// models/profile.js
import { DataTypes } from "sequelize";
import sequelizeInstance from "../database/connection.js";

/**
 * Profile model definition.
 * 
 * Represents a user profile in the database.
 * 
 * @typedef {Object} Profile
 * @property {number} profile_id - The unique identifier of the profile.
 * @property {string} name - The name of the profile.
 * @property {string} phone - The phone number associated with the profile.
 * @property {string} img_path - The image path for the profile picture.
 */

/**
 * Sequelize model for the Profile.
 * 
 * @type {Model}
 */
const Profile = sequelizeInstance.define('Profile', {
    profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_path: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
});

/**
 * Synchronizes the Profile model with the database.
 * 
 * @async
 * @function syncModel
 * @returns {Promise<void>} A promise that resolves when the model is synchronized.
 */
const syncModel = async () => {
    await Profile.sync();
}

// Synchronize the Profile model with the database
syncModel();

export default Profile;
