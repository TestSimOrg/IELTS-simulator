import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from "swagger-ui-express";
import log from '../lib/logger.js';
import { fileURLToPath } from 'url'; 
import path from 'path';

const __filename = fileURLToPath(import.meta.url); // Get the current module's filename
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "IELTS-Simulator API docs",
        },
    },
    apis: [path.resolve(__dirname, '../routes/*.js')],

}

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port){
    //swagger page
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    log.info(`API docs at http://localhost:${port}/docs`);
}

export default swaggerDocs;