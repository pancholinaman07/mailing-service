require('dotenv').config();
const { Worker } = require('bullmq');

const sendMail = require('./mailing-service');

const worker = new Worker('email-queue', async (job)=>{
    await sendMail(job.data);

}, { connection: {
        host: process.env.HOST,
        port: process.env.PORT
    }});

