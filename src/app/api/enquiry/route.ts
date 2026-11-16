import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Generate unique inquiry ID
    const inquiryId = `ENQ-${Date.now().toString().slice(-6)}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;
    const receivedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const inquiryRecord = {
      id: inquiryId,
      receivedAt,
      type,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : 'Not provided',
      company: company ? String(company).trim() : null,
      institution: institution ? String(institution).trim() : null,
      department: department || null,
      service: service || type || 'General Consultation',
      budget: budget || null,
      message: message ? String(message).trim() : 'No specific message entered.',
    };

    console.log('[MR.Engineers Inquiry Received]', inquiryRecord);

    const targetRecipient = 'mrengineers.contact@gmail.com';
    const gmailAppPassword =
      process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD || '';
    const gmailUser =
      process.env.GMAIL_USER || process.env.SMTP_USER || 'mrengineers.contact@gmail.com';

    let emailSent = false;
    let dispatchError: string | null = null;

    if (gmailAppPassword) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailAppPassword,
          },
        });

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080B10; color: #F5F7FA; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #10151D; border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #080B10, #161D28); padding: 32px 24px; text-align: center; border-bottom: 2px solid #FFBE1A; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; background: rgba(255,190,26,0.15); color: #FFBE1A; border: 1px solid rgba(255,190,26,0.3); margin-bottom: 12px; }
    .title { color: #FFFFFF; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
    .subtitle { color: #929BA8; font-size: 13px; margin-top: 6px; }
    .content { padding: 28px 24px; }
    .field-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    .field-table tr { border-bottom: 1px solid rgba(255,255,255,0.06); }
    .field-label { padding: 12px 8px; font-size: 12px; font-weight: 700; color: #929BA8; text-transform: uppercase; width: 35%; font-family: monospace; }
    .field-value { padding: 12px 8px; font-size: 14px; color: #F5F7FA; font-weight: 500; }
    .field-highlight { color: #00D4FF; font-weight: 700; }
    .message-box { margin-top: 24px; padding: 16px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; }
    .message-title { font-size: 11px; font-family: monospace; text-transform: uppercase; color: #FFBE1A; font-weight: 700; margin-bottom: 8px; }
    .message-text { color: #F5F7FA; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .cta-button { display: block; text-align: center; background: #00D4FF; color: #080B10; padding: 14px 24px; border-radius: 10px; text-decoration: none; font-weight: 800; font-size: 14px; margin-top: 24px; }
    .footer { padding: 20px 24px; background: #080B10; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 11px; color: #64748B; font-family: monospace; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">New Inbound Inquiry // Ref: ${inquiryId}</div>
      <h1 class="title">MR.Engineers Web Inquiry</h1>
      <p class="subtitle">Received via mrengineers.in on ${receivedAt}</p>
    </div>
    <div class="content">
      <table class="field-table">
        <tr>
          <td class="field-label">Reference ID</td>
          <td class="field-value"><strong style="color: #FFBE1A; font-family: monospace;">${inquiryId}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Full Name</td>
          <td class="field-value" style="font-weight: 700; color: #FFFFFF;">${inquiryRecord.name}</td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value"><a href="mailto:${inquiryRecord.email}" style="color: #00D4FF; text-decoration: none;">${inquiryRecord.email}</a></td>
        </tr>
        <tr>
          <td class="field-label">Phone Number</td>
          <td class="field-value"><a href="tel:${inquiryRecord.phone}" style="color: #FFBE1A; text-decoration: none;">${inquiryRecord.phone}</a></td>
        </tr>
        <tr>
          <td class="field-label">Category / Service</td>
          <td class="field-value field-highlight">${inquiryRecord.service}</td>
        </tr>
        ${
          inquiryRecord.company
            ? `<tr><td class="field-label">Company / Enterprise</td><td class="field-value">${inquiryRecord.company}</td></tr>`
            : ''
        }
        ${
          inquiryRecord.institution
            ? `<tr><td class="field-label">College / Institution</td><td class="field-value">${inquiryRecord.institution}</td></tr>`
            : ''
        }
        ${
          inquiryRecord.department
            ? `<tr><td class="field-label">Department / Domain</td><td class="field-value">${inquiryRecord.department}</td></tr>`
            : ''
        }
        ${
          inquiryRecord.budget
            ? `<tr><td class="field-label">Budget Range</td><td class="field-value">${inquiryRecord.budget}</td></tr>`
            : ''
        }
      </table>

      <div class="message-box">
        <div class="message-title">Inquiry Details / Message</div>
        <div class="message-text">${inquiryRecord.message}</div>
      </div>

      <a href="mailto:${inquiryRecord.email}?subject=Re:%20MR.Engineers%20Inquiry%20[${inquiryId}]&body=Hi%20${encodeURIComponent(
          inquiryRecord.name
        )},%0D%0A%0D%0AThank%20you%20for%20contacting%20MR.Engineers.%0D%0A" class="cta-button">
        Reply Directly to ${inquiryRecord.name} ↗
      </a>
    </div>
    <div class="footer">
      MR.Engineers — Govt. of India Registered Enterprise (UDYAM-TN-07-0161474)<br/>
      Anthiyur Main Road, Bhavani, Appakudal, Erode, Tamil Nadu – 638315<br/>
      Phone: +91 6369797720 | Email: mrengineers.contact@gmail.com
    </div>
  </div>
</body>
</html>
`;

        await transporter.sendMail({
          from: `"MR.Engineers Portal" <${gmailUser}>`,
          to: targetRecipient,
          replyTo: inquiryRecord.email,
          subject: `[New Inquiry - ${inquiryId}] ${inquiryRecord.name} — ${inquiryRecord.service}`,
          text: `MR.Engineers New Inquiry\n\nReference: ${inquiryId}\nName: ${inquiryRecord.name}\nEmail: ${inquiryRecord.email}\nPhone: ${inquiryRecord.phone}\nService: ${inquiryRecord.service}\nOrganization: ${inquiryRecord.company || inquiryRecord.institution || 'N/A'}\n\nMessage:\n${inquiryRecord.message}\n\nReceived on: ${receivedAt}`,
          html: htmlContent,
        });

        emailSent = true;
        console.log(`[MR.Engineers] Email successfully dispatched to ${targetRecipient}`);
      } catch (err: any) {
        console.error('[MR.Engineers Email Dispatch Error]', err);
        dispatchError = err?.message || 'Failed to dispatch email via SMTP';
      }
    } else {
      console.warn(
        '[MR.Engineers Notice] GMAIL_APP_PASSWORD is not set in environment variables. Email logged to console.'
      );
    }

    // Build pre-filled mailto URL for immediate direct-to-Gmail fallback
    const mailtoSubject = encodeURIComponent(
      `[Inquiry ${inquiryId}] ${inquiryRecord.name} - ${inquiryRecord.service}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${inquiryRecord.name}\nEmail: ${inquiryRecord.email}\nPhone: ${inquiryRecord.phone}\nService: ${inquiryRecord.service}\nOrganization: ${inquiryRecord.company || inquiryRecord.institution || 'N/A'}\n\nMessage:\n${inquiryRecord.message}\n\n(Ref: ${inquiryId})`
    );
    const directMailtoUrl = `mailto:${targetRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully received by MR.Engineers.',
        referenceId: inquiryId,
        emailSent,
        targetEmail: targetRecipient,
        directMailtoUrl,
        smtpConfigured: Boolean(gmailAppPassword),
        dispatchError: dispatchError || undefined,
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
