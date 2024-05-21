import express from "express"
const app = express()


import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      version: '0.0.1',
    },
  },
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./routers/*.js"]
}

import swaggerUI from "swagger-ui-express"
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerOptions)))




import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => console.log("Server is running on port", PORT))

