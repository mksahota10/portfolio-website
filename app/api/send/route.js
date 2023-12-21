//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { body } = req; 
  const { email, subject, message } = body; 

  try {
    const data = await resend.emails.send({
      from: 'Preet <mksahota1014@gmail.com>',
      to: ['mksahota1014@gmail.com'],
      subject: 'Hello world',
      react: 
      <>
      <h1>{subject}</h1>
      <p>Thank you!</p>
      <p>{messsage}</p>
      </>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
