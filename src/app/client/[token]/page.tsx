import React from 'react';
import ClientPortalView from '@/components/ClientPortalView';

export function generateStaticParams() {
  return [
    { token: 'patil-sangamner-7788' },
    { token: 'apex-sf-9921' },
    { token: 'demo' },
  ];
}

export default function ClientPortalPage({ params }: { params: { token: string } }) {
  return <ClientPortalView token={params.token} />;
}
