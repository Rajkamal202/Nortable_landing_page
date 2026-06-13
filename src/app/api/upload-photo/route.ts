import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { filename, base64Content } = await req.json();

    if (!filename || !base64Content) {
      return NextResponse.json(
        { error: 'filename and base64Content required' },
        { status: 400 }
      );
    }

    // Decode base64 to Buffer
    const buffer = Buffer.from(base64Content, 'base64');

    // Upload to Blob
    const blob = await put(filename, buffer, {
      access: 'private',
      contentType: 'image/jpeg',
    });

    return NextResponse.json({ url: blob.url }, { status: 200 });
  } catch (err: any) {
    console.error('[v0] blob upload error:', err.message);
    return NextResponse.json(
      { error: err.message || 'Upload failed' },
      { status: 500 }
    );
  }
}
