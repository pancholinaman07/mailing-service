const nodemailer = require('nodemailer');

async function sendMail(data) {
    try {
        const client = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
                user: process.env.USERMAIL,
                pass: process.env.PASS
            }
        });

        await client.sendMail(data);

        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = sendMail;
