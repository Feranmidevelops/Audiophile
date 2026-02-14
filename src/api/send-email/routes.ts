
// app/api/send-email/route.ts
import { Resend } from 'resend';
   
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const orderData = await request.json();
  
  await resend.emails.send({
    from: 'Audiophile <orders@yourdomain.com>',
    to: orderData.email,
    subject: `Order Confirmation - ${orderData.orderId}`,
    html: orderConfirmationEmail(orderData),
  });
  
  return Response.json({ success: true });
}