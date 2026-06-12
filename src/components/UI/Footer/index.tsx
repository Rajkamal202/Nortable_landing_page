import Image from 'next/image';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Event',
    links: ['About', 'Tracks', 'Prizes'],
  },
  {
    title: 'Resources',
    links: ['Code of Conduct', 'Privacy Policy', 'Terms'],
  },
  {
    title: 'Connect',
    links: ['Discord', 'Twitter', 'Contact'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterBrand,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  OrganizedBy,
  CopyRight,
  LogoText,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <LogoText>Nortable</LogoText>
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <FooterBrand>
              <p>A community-first virtual hackathon empowering developers to build, innovate, and shape the future of technology.</p>
            </FooterBrand>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, j) => (
                      <li key={j}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <OrganizedBy>
              Organized by <span>Rajkamal Rao</span> · <span>Raghav Bajaj</span> · <span>Raghav Poddar</span> · <span>Hitansh Gopani</span>
            </OrganizedBy>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Nortable Virtual Hackathon 2026
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

