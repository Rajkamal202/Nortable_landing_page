'use client';

import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from '@/components/Layout/GlobalStyles';
import TicketPass from '@/components/TicketPass';

export default function PassPreview() {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <main style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <TicketPass name="Rajkamal Rao" track="AI" serial="NTH2026-7A29F" totalPaid={0} />
      </main>
    </StyledComponentsRegistry>
  );
}
