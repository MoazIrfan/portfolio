'use server';

import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache';

import { db } from '@/db';
import { views } from '@/db/schema';
import { auth, youtube } from '@googleapis/youtube';

let googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

let yt = youtube({
  version: 'v3',
  auth: googleAuth,
});

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.DATABASE_URL) {
    return [];
  }

  noStore();
  const data = await db.select().from(views);

  return data;
}


