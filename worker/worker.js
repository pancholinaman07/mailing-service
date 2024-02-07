require('dotenv').config();
const { Worker } = require('bullmq');

const sendMail = require('./mailing-service');

const worker = new Worker('email-queue', async (job)=>{
    console.log(sendMail);
    console.log(job.data);
    await sendMail(job.data);
    console.log('ended');

}, { connection: {
        host: process.env.HOST,
        port: process.env.PORT
    }});

