//import "dotenv/config";
import dotenv from "dotenv";
dotenv.config({ path: "./.env-dev"})

//import dotenv from "dotenv"
//dotenv.config()

console.log(process.env.MYSQL_USER);