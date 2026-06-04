'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--white);
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ImageCtn = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const TextCtn = styled.div`
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 2;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: var(--white);
  }

  p {
    color: #989898;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem 2rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  height: 31.25rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.03) 100%), url(${grid_background.src}) rgba(19, 19, 19, 0.75);
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease,
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(72, 214, 76, 0.25);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35), 0 0 30px rgba(72, 214, 76, 0.02);
  }

  /* Specific card hover zooms image */
  &:hover ${ImageCtn} img {
    transform: scale(1.03);
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
  width: 100%;

  /* First row card dimensions and image styles */
  &:first-of-type {
    ${OfferCard}:first-child {
      flex: 1.7;

      ${ImageCtn} {
        padding: 0;
        
        &::before {
          position: absolute;
          content: '';
          inset: 0;
          background: linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0.8) 12%, rgba(19, 19, 19, 0) 35%);
          z-index: 2;
          pointer-events: none;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    ${OfferCard}:last-child {
      flex: 1.3;

      ${ImageCtn} {
        padding: 0 2.5rem 2rem 2.5rem;
        
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  /* Second row card dimensions and image styles */
  &:last-of-type {
    margin-top: 2rem;

    ${OfferCard}:first-child {
      flex: 1.3;

      ${ImageCtn} {
        padding: 0;
        
        &::before {
          position: absolute;
          content: '';
          inset: 0;
          background: linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0.8) 12%, rgba(19, 19, 19, 0) 35%);
          z-index: 2;
          pointer-events: none;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    ${OfferCard}:last-child {
      flex: 1.7;

      ${ImageCtn} {
        padding: 0;
        
        &::before {
          position: absolute;
          content: '';
          inset: 0;
          background: linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0.8) 12%, rgba(19, 19, 19, 0) 35%);
          z-index: 2;
          pointer-events: none;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;

    &:last-of-type {
      margin-top: 1.5rem;
    }

    ${OfferCard} {
      width: 100%;
      flex: none !important;
      height: 28rem;
    }

    &:first-of-type {
      ${OfferCard}:first-child {
        ${ImageCtn} {
          padding: 0;
          img {
            object-fit: cover;
          }
        }
      }
      
      ${OfferCard}:last-child {
        ${ImageCtn} {
          padding: 0 1.5rem 1.5rem 1.5rem;
        }
      }
    }

    &:last-of-type {
      ${OfferCard}:first-child {
        ${ImageCtn} {
          padding: 0;
          img {
            object-fit: cover;
          }
        }
      }
      ${OfferCard}:last-child {
        ${ImageCtn} {
          padding: 0;
          img {
            object-fit: cover;
          }
        }
      }
    }
  }
`;
