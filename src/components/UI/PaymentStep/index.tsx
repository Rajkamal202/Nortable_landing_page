'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PaymentWrapper,
  PaymentCard,
  PaymentHeader,
  PriceTag,
  PaymentDetails,
  DetailRow,
  PaymentForm,
  CardInputGroup,
  CardInput,
  CardRow,
  PayButton,
  SecureNote,
  PaymentMethods,
} from './styles';

interface PaymentStepProps {
  formData: {
    fullName: string;
    email: string;
  };
  registrationType: 'solo' | 'team';
  onPaymentSuccess: () => void;
  onBack: () => void;
}

const PaymentStep = ({ formData, registrationType, onPaymentSuccess, onBack }: PaymentStepProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsProcessing(false);
    onPaymentSuccess();
  };

  return (
    <PaymentWrapper
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PaymentCard>
        <PaymentHeader>
          <h2>Complete Your Registration</h2>
          <p>Pay the registration fee to confirm your participation</p>
        </PaymentHeader>

        <PriceTag>
          <span className="currency">INR</span>
          <span className="amount">100</span>
          <span className="label">Registration Fee</span>
        </PriceTag>

        <PaymentDetails>
          <DetailRow>
            <span>Participant</span>
            <span>{formData.fullName}</span>
          </DetailRow>
          <DetailRow>
            <span>Email</span>
            <span>{formData.email}</span>
          </DetailRow>
          <DetailRow>
            <span>Type</span>
            <span>{registrationType === 'solo' ? 'Solo Participant' : 'Team Registration'}</span>
          </DetailRow>
          <DetailRow className="total">
            <span>Total Amount</span>
            <span>Rs. 100.00</span>
          </DetailRow>
        </PaymentDetails>

        <PaymentMethods>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <rect width="40" height="24" rx="4" fill="#1A1F71"/>
            <path d="M16.5 15.5L17.5 8.5H19.5L18.5 15.5H16.5Z" fill="white"/>
            <path d="M24 8.5C23.5 8.3 22.8 8 22 8C20 8 18.5 9 18.5 10.5C18.5 11.5 19.5 12.2 20.2 12.5C21 12.9 21.3 13.2 21.3 13.5C21.3 14 20.7 14.3 20.2 14.3C19.4 14.3 18.9 14.1 18.2 13.8L17.9 13.7L17.6 15.5C18.2 15.8 19 16 20 16C22.1 16 23.6 15 23.6 13.4C23.6 12.5 23 11.8 21.8 11.3C21.2 11 20.8 10.7 20.8 10.4C20.8 10 21.2 9.7 21.9 9.7C22.5 9.7 23 9.8 23.4 10L23.6 10.1L24 8.5Z" fill="white"/>
            <path d="M27.5 8.5H26C25.5 8.5 25.1 8.7 24.9 9.2L22 15.5H24.1L24.5 14.3H27L27.2 15.5H29L27.5 8.5ZM25.1 12.7L26 10.2L26.5 12.7H25.1Z" fill="white"/>
            <path d="M15 8.5L13 13.5L12.8 12.5C12.3 11 11 9.5 9.5 8.8L11.3 15.5H13.5L17.2 8.5H15Z" fill="white"/>
            <path d="M11 8.5H7.5L7.5 8.7C10 9.3 11.7 10.7 12.3 12.5L11.6 9.2C11.5 8.7 11.1 8.5 10.6 8.5H11Z" fill="#F9A533"/>
          </svg>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <rect width="40" height="24" rx="4" fill="#252525"/>
            <circle cx="15" cy="12" r="7" fill="#EB001B"/>
            <circle cx="25" cy="12" r="7" fill="#F79E1B"/>
            <path d="M20 6.8C21.8 8.2 23 10.5 23 12C23 13.5 21.8 15.8 20 17.2C18.2 15.8 17 13.5 17 12C17 10.5 18.2 8.2 20 6.8Z" fill="#FF5F00"/>
          </svg>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <rect width="40" height="24" rx="4" fill="#016FD0"/>
            <path d="M20 6L14 18H17L18 15.5H22L23 18H26L20 6ZM19 13L20 10L21 13H19Z" fill="white"/>
          </svg>
        </PaymentMethods>

        <PaymentForm>
          <CardInputGroup>
            <label>Card Number</label>
            <CardInput
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
            />
          </CardInputGroup>

          <CardInputGroup>
            <label>Cardholder Name</label>
            <CardInput
              type="text"
              placeholder="John Doe"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
            />
          </CardInputGroup>

          <CardRow>
            <CardInputGroup>
              <label>Expiry Date</label>
              <CardInput
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiry(e.target.value))}
                maxLength={5}
              />
            </CardInputGroup>
            <CardInputGroup>
              <label>CVV</label>
              <CardInput
                type="password"
                placeholder="***"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                maxLength={3}
              />
            </CardInputGroup>
          </CardRow>

          <PayButton
            type="button"
            onClick={handlePayment}
            disabled={isProcessing || !cardNumber || !cardName || !expiryDate || !cvv}
            as={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isProcessing ? (
              <span className="processing">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.4 31.4" />
                  </svg>
                </motion.span>
                Processing Payment...
              </span>
            ) : (
              `Pay Rs. 100`
            )}
          </PayButton>

          <button type="button" className="back-link" onClick={onBack}>
            Go back to review
          </button>
        </PaymentForm>

        <SecureNote>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Your payment is secured with 256-bit SSL encryption</span>
        </SecureNote>
      </PaymentCard>
    </PaymentWrapper>
  );
};

export default PaymentStep;
