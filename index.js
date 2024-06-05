let express = require('express');
let http = require('http');
let path = require('path');
const nodemailer = require('nodemailer');

let app = express();
let server = http.Server(app);
let port = 993

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'index.html')))

// Routing 
app.get('/', function(req, response){
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/send_email', function(req, response){
    let from = req.body.from;
    let to = req.body.to;
    let subject = req.body.subject;
    let message = req.body.message;

    let transporter = nodemailer.createTransport({
        service: 'imap',
        auth: {
            user: '',
            pass: ''
        }
    });

    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log('email sent: ' + info.response)
        }
        response.redirect('/')
    })

})

// init web server
server.listen(port, function(){
    console.log('Starting Server: Port' + port)
})