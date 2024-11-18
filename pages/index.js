import React from 'react';
import dynamic from 'next/dynamic';

const SpiceCabinetDashboard = dynamic(
  () => import('../components/SpiceCabinetDashboard'),
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <SpiceCabinetDashboard />
    </div>
  );
}
