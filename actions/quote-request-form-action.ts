"use server"

import QuoteRequestEmail from '@/email/quote-form-email';
import { renderAsync } from '@react-email/components';
import { redirect } from 'next/navigation';
import React from 'react';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

const quoteFormAction = async (formData:FormData) => {

  const first_name = formData.get('first_name') as string
  const last_name = formData.get('last_name') as string
  const service = formData.get('service') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string


  const html = await renderAsync(QuoteRequestEmail({
    first_name: first_name,
    last_name: last_name,
    service: service,
    phone: phone,
    email: email,
    message: message,
  }) as React.ReactElement)

  const sending = await resend.emails.send({
    from: `Questgroup <darren@questgroup.co.za>`,
    to: ["darren@questgroup.co.za", email],
    subject: "New Quote Request",
    reply_to: email,
    html: html,
    // text: `You have a new quote request from ${first_name} ${first_name} ${phone} - ${email}. Details: ${message}`,
    // react: React.createElement(QuoteRequestEmail, {
    //   first_name: first_name,
    //   last_name: last_name,
    //   service: service,
    //   phone: phone,
    //   email: email,
    //   message: message,

    // })

  })

  console.log({sending})

  redirect('/thank-you')

}

export {quoteFormAction}
