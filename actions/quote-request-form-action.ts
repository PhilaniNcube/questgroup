"use server"

import QuoteRequestEmail from '@/email/quote-form-email';
import { redirect } from 'next/navigation';
import React from 'react';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

const quoteFormAction = async (formData:FormData) => {

  const fullName = formData.get('fullName') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const details = formData.get('details') as string
  const property = formData.get('property') as string



  const sending = await resend.emails.send({
    from: `Waterquest <dev@waterquest.io>`,
    to: ["darren@waterquest.io", email],
    subject: "New Quote Request",
    text: `You have a new quote request from ${fullName} ${phone} - ${email}. Details: ${details}`,
    react: React.createElement(QuoteRequestEmail, {
      fullName: fullName,
      phone: phone,
      email: email,
      details: details,
      property: property
    })

  })

  redirect('/thank-you')

}

export {quoteFormAction}
