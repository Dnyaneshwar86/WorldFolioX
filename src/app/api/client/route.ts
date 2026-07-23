import { NextResponse } from 'next/server';

// In-memory / Fallback DB store for serverless compatibility when database is not connected
export interface ClientRecord {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'WORKING' | 'PENDING' | 'COMPLETED' | 'ON_HOLD' | 'CANCELLED';
  token: string;
  deadline?: string;
  progress: number;
  notes: { id: string; content: string; isPublic: boolean; createdAt: string }[];
  createdAt: string;
}

const GLOBAL_CLIENTS: ClientRecord[] = [
  {
    id: 'c_1',
    name: 'रामभाऊ पाटील (Ramrao Patil)',
    email: 'ramrao@patilmills.in',
    phone: '+91 9822011223',
    projectType: 'Rural E-Commerce & Billing App',
    message: 'माझ्या किराणा दुकानासाठी मराठीत बिलिंग व स्टॉक ॲप बनवायचे आहे.',
    status: 'WORKING',
    token: 'patil-sangamner-7788',
    deadline: '2026-07-26',
    progress: 75,
    notes: [
      { id: 'n_1', content: 'मराठी बारकोड स्कॅनर डिझाइन पूर्ण झाले.', isPublic: true, createdAt: '2026-07-22' },
      { id: 'n_2', content: 'UPI QR Payment modal connected.', isPublic: true, createdAt: '2026-07-23' },
    ],
    createdAt: '2026-07-20',
  },
  {
    id: 'c_2',
    name: 'John Smith (Apex Cloud)',
    email: 'john@apexcloud.io',
    phone: '+1 415 890 2211',
    projectType: 'Fullstack Next.js 14 App',
    message: 'Need high performance agentic AI pipeline dashboard with real-time analytics.',
    status: 'WORKING',
    token: 'apex-sf-9921',
    deadline: '2026-07-28',
    progress: 50,
    notes: [
      { id: 'n_3', content: 'Next.js 14 serverless API routes initialized.', isPublic: true, createdAt: '2026-07-21' },
    ],
    createdAt: '2026-07-21',
  },
];

export async function GET() {
  return NextResponse.json({ success: true, clients: GLOBAL_CLIENTS });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    const token = `cl-${Math.random().toString(36).substring(2, 9)}`;
    const newClient: ClientRecord = {
      id: `c_${Date.now()}`,
      name: name || 'Valued Client',
      email: email || '',
      phone: phone || '',
      projectType: projectType || 'Web App Development',
      message: message || 'Project Inquiry via WorldFolio X',
      status: 'NEW',
      token,
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      progress: 10,
      notes: [
        {
          id: `n_${Date.now()}`,
          content: 'Inquiry received. Dnyaneshwar is reviewing requirements.',
          isPublic: true,
          createdAt: new Date().toISOString().split('T')[0],
        },
      ],
      createdAt: new Date().toISOString().split('T')[0],
    };

    GLOBAL_CLIENTS.unshift(newClient);

    return NextResponse.json({
      success: true,
      message: 'Inquiry registered in ClientFlow CRM!',
      client: newClient,
      trackingUrl: `/client/${token}`,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
