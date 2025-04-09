const nodemailer = require('nodemailer');
const cors = require('cors');

// Create a function to handle the CORS logic
const corsHandler = cors({
    origin: '*', // This allows all origins. You can specify a particular domain here for more security.
    methods: ['GET', 'POST'], // Allowed HTTP methods
});

module.exports = (req, res) => {
    // Handle the CORS preflight (OPTIONS) request first
    corsHandler(req, res, () => {
        if (req.method === 'POST') {
            const { recipient, subject, body } = req.body;

            // Create a Nodemailer transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.VITE_EMAIL,  // Use process.env for environment variables in serverless functions
                    pass: process.env.VITE_PASSWORD,
                },
            });

            // Set up the email data
            const mailOptions = {
                from: process.env.VITE_EMAIL,
                to: process.env.VITE_EMAIL,
                subject: subject,
                text: body,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(info)
                    console.error('Error sending email:', error);
                    return res.status(500).json({ message: 'Failed to send email', error });
                }

                return res.status(200).json({ message: 'Email sent successfully!', info });
            });
        } else {
            // Handle non-POST requests
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
    });
};
