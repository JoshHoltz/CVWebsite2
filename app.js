const nodeMailer = require('nodemailer');

const html = `
    <h1> hello world </h1>
`;

async function main() {

    const transporter = nodeMailer.createTransport({
        host: 'smtp.ionos.co.uk',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: ''
        }
    });

    const info = await transporter.sendMail({
        from: 'Joshua <>',
        to: "",
        subject: "Testing, testing, 123",
        html: html,
    })

    console.log('Message sent: ' + info.messageId);
    console.log('')

}

main()
.catch(e => console.log(e));