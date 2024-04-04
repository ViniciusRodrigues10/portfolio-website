import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request, response) {
  const {name, clientEmail, subject, message} = await request.json();
  const clientName = name;
  const contactEmail = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: contactEmail,
      pass: pass
    }
  });

  const mailOptions = {
    from: clientEmail,
    to: contactEmail,
    subject: subject,
    html: `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova Mensagem do Cliente</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                color: #666;
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 20px;
            }
            .message-content {
                border: 1px solid #ccc;
                padding: 20px;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
        </style>
    </head>
    <body>

        <div class="container">
            <h1>Nova Mensagem do Cliente</h1>
            <div class="message-content">
                <p><strong>Nome do Cliente:</strong> ${clientName}</p>
                <p><strong>E-mail do Cliente:</strong> ${clientEmail}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
            </div>
        </div>

    </body>
    </html>

    `
  };

  const mailOptionsClient = {
    from: contactEmail,
    to: clientEmail,
    subject: "Contato",
    html: `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agradecimento pelo Contato</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
                text-align: center;
                margin-bottom: 20px;
            }
            p {
                color: #666;
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 20px;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
            }
            .button:hover {
                background-color: #0056b3;
            }
            .button span {
              color: #fff; /* Cor do texto do botão */
            }
            .signature {
                margin-top: 30px;
                border-top: 1px solid #ccc;
                padding-top: 20px;
                text-align: center;
                color: #888;
            }
        </style>
    </head>
    <body>

      <div class="container">
        <div class="logo">
          <img src='https://drive.google.com/file/d/1QCJzpN9205vV8AR-X_5JT18Iz444u2N2/view?usp=sharing' width="200">
        </div>
        <h1>Olá ${clientName},</h1>
        <p>Agradeço por entrar em contato. Estou empolgado para termos uma conversa mais detalhada.</p>
        <p>Comprometo-me a fornecer uma resposta o mais rápido possível.</p>
        <p>Se surgirem dúvidas adicionais ou se desejar fornecer mais informações, sinta-se à vontade para responder a este e-mail.</p>
        <a href="/" class="button"><span>Visite meu site</span></a>
        <div class="signature">
          <p>Atenciosamente,<br>Vinícius Gonzaga Cavalcante Rodrigues<br>Engenheiro de Software
        </div>
      </div>

    </body>
    </html>
`
  };


  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({message: "Email enviado"}, {status: 200});
  } catch (error) {
    return NextResponse.json({ message: "Failed to send" }, {status: 500});
  } 
}
