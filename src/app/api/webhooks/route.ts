import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)
    const eventType = evt.type;

    if(eventType === 'user.created') {
      const { id, created_at, updated_at } = evt.data;
      const newUser = await prisma.user.create({
          data: {
            externalId: id,
            createdAt: new Date(created_at),
            updatedAt: new Date(updated_at),
          }
      });
      console.log('New user created: ', newUser);
    }
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}