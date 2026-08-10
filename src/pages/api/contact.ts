import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, phone, postalCode, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error('Contact form error: falta RESEND_API_KEY en el entorno');
      return res.status(500).json({ error: 'Error al enviar el mensaje' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Tapacables <onboarding@resend.dev>',
        to: process.env.EMAIL_RECIBER as string,
        subject: 'Nuevo Contacto de Potencial Cliente - Tapacables',
        html: `
          <h1>Nuevo Contacto de Potencial Cliente</h1>
          <p>Estimado equipo</p>
          <p>Hemos recibido los datos de un potencial cliente:</p>
          <p></p>
          <h4>Datos del Contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Número de teléfono:</strong> ${phone}</p>
          <p><strong>Código postal:</strong> ${postalCode}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Error al enviar el mensaje' });
      }

      res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
