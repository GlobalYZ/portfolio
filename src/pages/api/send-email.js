import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'globalyy2020@gmail.com',
        pass: '20200501',
      },
    });

    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({message: 'Email sent: ' + info.response});
    } catch (error) {
      res.status(500).json({error: error.toString()});
    }
  } else {
    res.status(405).json({message: 'Method not allowed'});
  }
}
