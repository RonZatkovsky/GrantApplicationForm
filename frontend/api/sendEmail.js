import { Resend } from 'resend';
import cors from 'cors';

const resend = new Resend(process.env.RESEND_API_KEY);

const corsHandler = cors({
  origin: '*',
  methods: ['GET', 'POST'],
});

const sendEmailHandler = async (req, res) => {
  corsHandler(req, res, async () => {
    if (req.method === 'POST') {
      const { recipient,subject,body } = req.body;

      try {
        const data = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: recipient,
          subject:subject,
          text: body,
        });

        return res.status(200).json({ message: 'Email sent successfully!', data });
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email', error });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  });
};

export default sendEmailHandler;
