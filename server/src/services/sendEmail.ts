import nodemailer from 'nodemailer';
import config from '../common/config';

const { ADMIN_EMAIL, ADMIN_PASS } = config;

export function sendEmail(userEmail: string, lotId: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ADMIN_EMAIL,
      pass: ADMIN_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: ADMIN_EMAIL,
    to: userEmail,
    subject: 'Win Lot',
    text: `Congratulation! You are win lot #${lotId}.
    If you need further information, please call us +123456789.`,
  };

  transporter.sendMail(mailOption);
}
