'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 24rem;

  p {
    font-size: 1.1rem;
    color: #8c8c8c;
    line-height: 1.6;
    margin: 0;
  }
`;


export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 3.75rem;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
  }
`;


export const OrganizedBy = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: #8c8c8c;
  text-align: center;
  letter-spacing: -0.01em;
  line-height: 1.5;

  span {
    color: var(--white, #fff);
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: var(--emerald, #48d64c);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.35rem;
  }
`;

export const LogoText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.02em;
`;
