import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type = 'general',
      name,
      email,
      phone,
      company,
      institution,
      department,
      service,
      budget,
      message,
    } = body;

    // Basic Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required and must be valid.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    // Prepare structured payload for logging / external dispatch
    const inquiryRecord = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      type,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : null,
      company: company ? String(company).trim() : null,
      institution: institution ? String(institution).trim() : null,
      department: department || null,
      service: service || null,
      budget: budget || null,
      message: message ? String(message).trim() : null,
      status: 'received',
    };

    // Note for production:
    // When environment variables are configured (e.g., RESEND_API_KEY, SMTP_USER, or SUPABASE_URL),
    // you can dispatch an email notification or persist this record to your database here.
    console.log('[MR.Engineers Inquiry Received]', JSON.stringify(inquiryRecord, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been logged successfully with our engineering team.',
        referenceId: inquiryRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[MR.Engineers Inquiry Error]', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
