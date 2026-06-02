'use client';
import { MaskText } from '@/components';
import {
  Wrapper,
  Inner,
  Header,
  PillarsGrid,
  Pillar,
  PillarHeader,
  PillarNumber,
  PillarTitle,
  BenefitList,
  BenefitItem,
  BenefitStar,
  BenefitText,
  BenefitItemTitle,
  BenefitItemDetails,
} from './styles';
import { pillars, desktopHeaderPhrase, subHeaderPhrase } from './constants';

const JoinSection = () => {
  return (
    <Wrapper id="why-different">
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
          <MaskText phrases={subHeaderPhrase} tag="p" />
        </Header>
        <PillarsGrid>
          {pillars.map((pillar, i) => (
            <Pillar key={i}>
              <PillarHeader>
                <PillarNumber>{pillar.number}</PillarNumber>
                <PillarTitle>{pillar.title}</PillarTitle>
              </PillarHeader>
              <BenefitList>
                {pillar.benefits.map((benefit, j) => (
                  <BenefitItem key={j}>
                    <BenefitStar>✦</BenefitStar>
                    <BenefitText>
                      <BenefitItemTitle>{benefit.title}</BenefitItemTitle>
                      <BenefitItemDetails>{benefit.details}</BenefitItemDetails>
                    </BenefitText>
                  </BenefitItem>
                ))}
              </BenefitList>
            </Pillar>
          ))}
        </PillarsGrid>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
