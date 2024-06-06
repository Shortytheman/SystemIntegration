import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'profile.db'
});

/**
 * Initializes the database connection.
 *
 * This function attempts to authenticate the connection to the database.
 * If the connection is successful, a success message is logged.
 * If the connection fails, an error message is logged.
 * 
 * @async
 * @function initializeDatabase
 * @returns {Promise<void>} A promise that resolves when the database connection is established.
 */
const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Initialize the database connection
initializeDatabase();

/**
 * The Sequelize instance representing the database connection.
 * @type {Sequelize}
 */
export default sequelize;
