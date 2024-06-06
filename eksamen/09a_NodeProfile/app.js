import dotenv from 'dotenv';
import express from 'express';
import profileRouter from "./routes/profileRoutes.js";
import sequelizeInstance from "./database/connection.js";
import path from 'path';

/**
 * Loads environment variables from a .env file into process.env.
 */
dotenv.config();

/**
 * Creates an instance of Express.
 */
const app = express();

/**
 * Middleware to parse JSON bodies.
 */
app.use(express.json());

/**
 * Registers profile routes under the '/api' base route.
 */
app.use("/api", profileRouter);

/**
 * Serve static files from the 'docs' directory.
 */
app.use('/docs', express.static(path.join(process.cwd(), 'docs')));

/**
 * The port on which the server will listen.
 * @type {number}
 */
const PORT = process.env.PORT || 3000;

/**
 * Synchronizes all models to the database, then starts the server.
 * Logs the server start and any potential error in syncing with the database.
 */
sequelizeInstance.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Unable to sync the profile database:', err);
});
