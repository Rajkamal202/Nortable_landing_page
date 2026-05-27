'use client';
import Image from 'next/image';
import { MaskText } from '@/components';
import {
  Wrapper,
  Inner,
  Header,
  BentoGrid,
  BentoCard,
  CardHeader,
  CardIcon,
  CardTag,
  CardText,
  CardTitle,
  CardDetails,
} from './styles';
import { bentoCards, desktopHeaderPhrase } from './constants';

const JoinSection = () => {
  return (
    <Wrapper id="why-different">
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <BentoGrid>
          {bentoCards.map((card, i) => (
            <BentoCard key={i} $span={card.span}>
              <CardHeader>
                <CardIcon>
                  <Image src={card.icon} alt={card.title} />
                </CardIcon>
                <CardTag>{card.tag}</CardTag>
              </CardHeader>
              <CardText>
                <CardTitle>{card.title}</CardTitle>
                <CardDetails>{card.details}</CardDetails>
              </CardText>
            </BentoCard>
          ))}
        </BentoGrid>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
