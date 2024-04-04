
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// // const fromEmail = process.env.FROM_EMAIL;
// // console.log(fromEmail);

// export async function POST(req, res) {
//   // const { body } = await req.json();
//   // const { email, subject, message } = body;
//   // const { email, subject, message } = await req.json();
//   // console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: "viniciusgcr1710@gmail.com",
//       to: ['vinicius.gonzaga@academico.ifpb.edu.br'],
//       subject: "teste com email pessoal",
//       react: (
//         <>
//           <h1>{"teste"}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitte</p>
//           <p>{"message"}</p>
//         </>
//       ),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

// import { NextResponse } from "next/server";

// export async function GET(request) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   if(!res.ok) throw new Error("Problemas com o Fetch");

//   const data = await res.json();

//   return NextResponse.json({data});
// }


// ----------------------------------------------------------------------

// import { transporter } from "../../../../config/nodemailer";

// export async function POST(req, res) {
//   const data = req.body;
//   try {
//     await transporter.sendMail({
//       ...mailOptions, 
//       subject: data.subject,
//       text: "This is a test string",
//       html: "<h1> Test Title</h1><p>Some body text</p>",
//     });

//     return NextResponse.json(data);
//   }
//   catch (error) {
//     return NextResponse.json({ error });
//   }
// }



// ----------------------------------------------------------------------



// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   const email = process.env.EMAIL;
//   const pass = process.env.EMAIL_PASS;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: email,
//       pass: "r s b w c z x b bb b f bfs y k q",
//     },
//   });

//   const mailOptions = {
//     from:email,
//     to: email,
//     subject: "Send Email Tutorial",
//     html:
//     '<h3>Ola Vinicius</h3>'
//   }

//   try {
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({message: "Email enviado"}, {status: 200});
//   } catch (error) {
//     return NextResponse.json({ message: "Failed to send" }, {status: 500});
//   } 
// }


// ----------------------------------------------------------------------
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request, response) {
  const {name, clientEmail, subject, message} = await request.json();
  console.log(name, clientEmail, subject, message)

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
    text: message
  };

  const mailOptionsClient = {
    from: contactEmail,
    to: clientEmail,
    subject: "Contato",
    text: "TEste"
  };


  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({message: "Email enviado"}, {status: 200});
  } catch (error) {
    return NextResponse.json({ message: "Failed to send" }, {status: 500});
  } 
}
