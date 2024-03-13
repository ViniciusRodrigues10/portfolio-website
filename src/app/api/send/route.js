import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
// console.log(fromEmail);

export async function POST(req, res) {
  // const { body } = await req.json();
  // const { email, subject, message } = body;
  // const { email, subject, message } = await req.json();
  // console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "viniciusgcr1710@gmail.com",
      to: ['vinicius.gonzaga@academico.ifpb.edu.br'],
      subject: "teste com email pessoal",
      react: (
        <>
          <h1>{"teste"}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitte</p>
          <p>{"message"}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
