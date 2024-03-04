const { Queue } = require('bullmq');

const emailQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});

async function init(name, data) {
    const res = await emailQueue.add(name, data);
    console.log(res.id);
}

init('email-to-someone', {
    "from": "x@gmail.com",
    "to": "y@gmail.com",
    "subject": "regarding",
    "body": "hello from here",
}).then(r => console.log("done"));