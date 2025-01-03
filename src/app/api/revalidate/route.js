import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await revalidatePath("/")    
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error('Revalidation failed:', err);
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
