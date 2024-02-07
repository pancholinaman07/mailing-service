const { Queue } = require('bullmq');

const emailQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});

async function init() {
    const res = await emailQueue.add('email to nehal', {
        from: "pancholinaman0@gmail.com",
        to: "20uec083@lnmiit.ac.in",
        subject: "Dear nehal",
        text: "Congratulations for having such a lovely boyfriend"
    });
    console.log(res.id);
}

init();