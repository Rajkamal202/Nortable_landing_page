'use client';

import { Block, SectionTitle } from '../styles';
import TicketPass from '@/components/TicketPass';

interface Props {
  name: string;
  track: string;
  serial: string;
}

export default function PassPanel({ name, track, serial }: Props) {
  return (
    <Block>
      <SectionTitle>
        Your Pass <span className="tag">#{serial}</span>
      </SectionTitle>
      <TicketPass name={name} track={track} serial={serial} />
    </Block>
  );
}
