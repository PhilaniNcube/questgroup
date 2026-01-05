"use server"
import ContactFormEmail from '@/email/contact-fom-email';
import { redirect } from 'next/navigation';
import React from 'react';
import { Resend } from 'resend';


const contactFormAction = async (formData:FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const firstName = formData.get('first-name') as string
  const lastName = formData.get('last-name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const sending = await resend.emails.send({
    from: `Questgroup <darren@questgroup.co.za>`,
    to: "darren@questgroup.co.za",
    subject: "Contact Form Submission",
    text: `You have a new contact form submission from ${firstName} ${lastName} - ${email}. Message: ${message}`,
    react: React.createElement(ContactFormEmail, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    })

  })

  console.log(sending)


  redirect('/thank-you')

}

export {contactFormAction}
