'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PaymentStep from '../PaymentStep';
import VirtualIDCard from '../VirtualIDCard';
import {
  PageWrapper,
  TopHeader,
  EarlyBirdButton,
  LoginButton,
  MainContainer,
  LeftPanel,
  LogoSection,
  LogoIcon,
  LogoText,
  TaglinePill,
  HeroHeadline,
  HeroSubtext,
  StatsGrid,
  StatCard,
  StatIcon,
  StatContent,
  CubeGraphic,
  OrbitalRings,
  BackedBySection,
  RightPanel,
  FormHeader,
  FormTitleSection,
  DecorativeGraphic,
  StepIndicator,
  StepItem,
  StepLine,
  FormCard,
  InputRow,
  InputGroup,
  Label,
  InputWrapper,
  ErrorText,
  WhyJoinSection,
  BenefitsGrid,
  BenefitCard,
  ContinueButton,
  BackButton,
  ButtonGroup,
  FooterInfo,
  FooterCard,
  TeamMemberCard,
  AddMemberButton,
  RemoveMemberButton,
  Select,
  TextArea,
  CheckboxGroup,
  Checkbox,
  CheckboxLabel,
  ReviewSection,
  ReviewGroup,
  Wrapper,
} from './styles';

const steps = ['Basic Info', 'Details', 'Hackathon', 'Review'];

const areasOfInterest = [
  'Artificial Intelligence / ML',
  'Web3 / Blockchain',
  'Fintech',
  'HealthTech',
  'SaaS',
  'Cybersecurity',
  'Climate Tech',
  'EdTech',
  'Other',
];

const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const tracks = [
  'AI/ML Innovation',
  'Web3 & DeFi',
  'Climate & Sustainability',
  'Open Innovation',
];

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

const RegistrationForm = () => {
  const [registrationType, setRegistrationType] = useState<'solo' | 'team'>('solo');
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showIDCard, setShowIDCard] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    city: '',
    linkedin: '',
    github: '',
    portfolio: '',
    teamName: '',
    teamSize: '2',
    whyJoin: '',
    areaOfInterest: '',
    experienceLevel: '',
    preferredTrack: '',
    dietaryPreferences: '',
    needAccommodation: false,
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', email: '', role: '' },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { name: '', email: '', role: '' }]);
    }
  };

  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.organization.trim()) newErrors.organization = 'Required';
    }

    if (step === 1 && registrationType === 'team') {
      if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    }

    if (step === 2) {
      if (!formData.whyJoin.trim()) newErrors.whyJoin = 'This field is required';
      if (!formData.areaOfInterest) newErrors.areaOfInterest = 'Please select an area';
      if (!formData.experienceLevel) newErrors.experienceLevel = 'Please select your level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setShowIDCard(true);
  };

  const handleBackToReview = () => {
    setShowPayment(false);
  };

  // Icons
  const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const BuildingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );

  const GraduationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );

  const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const TrophyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const DollarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );

  const StarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  const GiftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );

  const HeadphonesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );

  const ZapIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  // Show Virtual ID Card after payment
  if (showIDCard) {
    return (
      <Wrapper>
        <VirtualIDCard
          participantData={formData}
          registrationType={registrationType}
          teamName={formData.teamName}
        />
      </Wrapper>
    );
  }

  // Show Payment Step
  if (showPayment) {
    return (
      <Wrapper>
        <PaymentStep
          formData={formData}
          registrationType={registrationType}
          onPaymentSuccess={handlePaymentSuccess}
          onBack={handleBackToReview}
        />
      </Wrapper>
    );
  }

  return (
    <PageWrapper>
      <TopHeader>
        <EarlyBirdButton>
          <ZapIcon />
          EARLY BIRD LIVE
        </EarlyBirdButton>
        <LoginButton>LOGIN</LoginButton>
      </TopHeader>

      <MainContainer>
        <LeftPanel>
          <LogoSection>
            <LogoIcon>N</LogoIcon>
            <LogoText>
              <h1>NORTABLE 2026</h1>
              <span>HACKATHON</span>
            </LogoText>
          </LogoSection>

          <TaglinePill>CODE. COLLABORATE. CREATE IMPACT.</TaglinePill>

          <HeroHeadline>
            BUILD THE FUTURE.<br />
            SHIP IN <span className="highlight">36 HOURS.</span>
          </HeroHeadline>

          <HeroSubtext>
            Join thousands of innovators, developers & creators to build breakthrough solutions and win amazing prizes.
          </HeroSubtext>

          <StatsGrid>
            <StatCard>
              <StatIcon><TrophyIcon /></StatIcon>
              <StatContent>
                <div className="label">TOTAL PRIZES</div>
                <div className="value">$500K+</div>
                <div className="subtext">Exciting rewards</div>
              </StatContent>
            </StatCard>

            <StatCard>
              <StatIcon><UsersIcon /></StatIcon>
              <StatContent>
                <div className="label">EXPECTED HACKERS</div>
                <div className="value">5,000+</div>
                <div className="subtext">Builders & Creators</div>
              </StatContent>
            </StatCard>

            <StatCard>
              <StatIcon><CalendarIcon /></StatIcon>
              <StatContent>
                <div className="label">EVENT DATE</div>
                <div className="value">JUNE 14 - 16</div>
                <div className="subtext">3 Days of Innovation</div>
              </StatContent>
            </StatCard>

            <StatCard>
              <StatIcon><DollarIcon /></StatIcon>
              <StatContent>
                <div className="label">REGISTRATION FEE</div>
                <div className="value">₹100</div>
                <div className="subtext">Non-refundable</div>
              </StatContent>
            </StatCard>
          </StatsGrid>



          <BackedBySection>
            <div className="label">BACKED BY</div>
            <div className="logos">
              <span>Google</span>
              <span>Microsoft</span>
              <span>OpenAI</span>
            </div>
          </BackedBySection>
        </LeftPanel>

        <RightPanel>
          <FormHeader>
            <FormTitleSection>
              <h1>Register for <span className="highlight">Nortable 2026</span></h1>
              <p>Join the most anticipated hackathon of the year</p>
            </FormTitleSection>

          </FormHeader>

          <StepIndicator>
            {steps.map((step, index) => (
              <motion.div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <StepItem $active={index === currentStep} $completed={index < currentStep}>
                  <div className="number">{index + 1}</div>
                  <span className="label">{step}</span>
                </StepItem>
                {index < steps.length - 1 && (
                  <StepLine $completed={index < currentStep} />
                )}
              </motion.div>
            ))}
          </StepIndicator>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <FormCard>
                  <InputRow>
                    <InputGroup>
                      <Label>Full Name <span className="required">*</span></Label>
                      <InputWrapper $error={!!errors.fullName}>
                        <UserIcon />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                        />
                      </InputWrapper>
                      {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
                    </InputGroup>

                    <InputGroup>
                      <Label>Email Address <span className="required">*</span></Label>
                      <InputWrapper $error={!!errors.email}>
                        <MailIcon />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                        />
                      </InputWrapper>
                      {errors.email && <ErrorText>{errors.email}</ErrorText>}
                    </InputGroup>
                  </InputRow>

                  <InputRow>
                    <InputGroup>
                      <Label>Phone Number <span className="required">*</span></Label>
                      <InputWrapper $error={!!errors.phone}>
                        <div className="country-code">
                          <span className="flag">🇮🇳</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="12345 67890"
                        />
                      </InputWrapper>
                      {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                    </InputGroup>

                    <InputGroup>
                      <Label>College / Company <span className="required">*</span></Label>
                      <InputWrapper $error={!!errors.organization}>
                        <BuildingIcon />
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="MIT / Google / Your College"
                        />
                      </InputWrapper>
                      {errors.organization && <ErrorText>{errors.organization}</ErrorText>}
                    </InputGroup>
                  </InputRow>

                  <InputRow>
                    <InputGroup>
                      <Label>Year of Study / Role <span className="required">*</span></Label>
                      <InputWrapper>
                        <GraduationIcon />
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Junior / Software Engineer"
                        />
                      </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                      <Label>City / Country <span className="required">*</span></Label>
                      <InputWrapper>
                        <LocationIcon />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Mumbai, USA"
                        />
                      </InputWrapper>
                    </InputGroup>
                  </InputRow>
                </FormCard>
              )}

              {currentStep === 1 && (
                <FormCard>
                  <InputRow>
                    <InputGroup>
                      <Label>LinkedIn Profile</Label>
                      <InputWrapper>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/johndoe"
                        />
                      </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                      <Label>GitHub Profile</Label>
                      <InputWrapper>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          placeholder="https://github.com/johndoe"
                        />
                      </InputWrapper>
                    </InputGroup>
                  </InputRow>

                  <InputGroup>
                    <Label>Portfolio / Website</Label>
                    <InputWrapper>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://johndoe.dev"
                      />
                    </InputWrapper>
                  </InputGroup>

                  {registrationType === 'team' && (
                    <>
                      <InputRow style={{ marginTop: '1rem' }}>
                        <InputGroup>
                          <Label>Team Name <span className="required">*</span></Label>
                          <InputWrapper $error={!!errors.teamName}>
                            <UsersIcon />
                            <input
                              type="text"
                              name="teamName"
                              value={formData.teamName}
                              onChange={handleInputChange}
                              placeholder="Code Warriors"
                            />
                          </InputWrapper>
                          {errors.teamName && <ErrorText>{errors.teamName}</ErrorText>}
                        </InputGroup>

                        <InputGroup>
                          <Label>Team Size</Label>
                          <Select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange}
                          >
                            <option value="2">2 Members</option>
                            <option value="3">3 Members</option>
                            <option value="4">4 Members</option>
                            <option value="5">5 Members</option>
                          </Select>
                        </InputGroup>
                      </InputRow>

                      <Label style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>Team Members</Label>
                      {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index}>
                          {teamMembers.length > 1 && (
                            <RemoveMemberButton onClick={() => removeTeamMember(index)}>
                              Remove
                            </RemoveMemberButton>
                          )}
                          <InputRow>
                            <InputGroup>
                              <InputWrapper>
                                <UserIcon />
                                <input
                                  type="text"
                                  placeholder="Member Name"
                                  value={member.name}
                                  onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                                />
                              </InputWrapper>
                            </InputGroup>
                            <InputGroup>
                              <InputWrapper>
                                <MailIcon />
                                <input
                                  type="email"
                                  placeholder="Member Email"
                                  value={member.email}
                                  onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                                />
                              </InputWrapper>
                            </InputGroup>
                          </InputRow>
                        </TeamMemberCard>
                      ))}

                      {teamMembers.length < 4 && (
                        <AddMemberButton onClick={addTeamMember}>
                          + Add Team Member
                        </AddMemberButton>
                      )}
                    </>
                  )}
                </FormCard>
              )}

              {currentStep === 2 && (
                <FormCard>
                  <InputGroup>
                    <Label>Why do you want to join Nortable 2026? <span className="required">*</span></Label>
                    <TextArea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      placeholder="Tell us about your motivation, what you hope to build, and what you want to learn..."
                      $error={!!errors.whyJoin}
                    />
                    {errors.whyJoin && <ErrorText>{errors.whyJoin}</ErrorText>}
                  </InputGroup>

                  <InputRow>
                    <InputGroup>
                      <Label>Primary Area of Interest <span className="required">*</span></Label>
                      <Select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleInputChange}
                        $error={!!errors.areaOfInterest}
                      >
                        <option value="">Select an area</option>
                        {areasOfInterest.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </Select>
                      {errors.areaOfInterest && <ErrorText>{errors.areaOfInterest}</ErrorText>}
                    </InputGroup>

                    <InputGroup>
                      <Label>Experience Level <span className="required">*</span></Label>
                      <Select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        $error={!!errors.experienceLevel}
                      >
                        <option value="">Select your level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </Select>
                      {errors.experienceLevel && <ErrorText>{errors.experienceLevel}</ErrorText>}
                    </InputGroup>
                  </InputRow>

                  <InputGroup>
                    <Label>Preferred Track</Label>
                    <Select
                      name="preferredTrack"
                      value={formData.preferredTrack}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a track (optional)</option>
                      {tracks.map((track) => (
                        <option key={track} value={track}>{track}</option>
                      ))}
                    </Select>
                  </InputGroup>

                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      id="needAccommodation"
                      name="needAccommodation"
                      checked={formData.needAccommodation}
                      onChange={handleInputChange}
                    />
                    <CheckboxLabel htmlFor="needAccommodation">
                      I need accommodation assistance
                    </CheckboxLabel>
                  </CheckboxGroup>
                </FormCard>
              )}

              {currentStep === 3 && (
                <ReviewSection>
                  <h3>Review Your Application</h3>

                  <ReviewGroup>
                    <h4>Personal Information</h4>
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Organization:</strong> {formData.organization}</p>
                    <p><strong>Role:</strong> {formData.role || 'Not specified'}</p>
                    <p><strong>Location:</strong> {formData.city || 'Not specified'}</p>
                  </ReviewGroup>

                  <ReviewGroup>
                    <h4>Professional Links</h4>
                    <p><strong>LinkedIn:</strong> {formData.linkedin || 'Not provided'}</p>
                    <p><strong>GitHub:</strong> {formData.github || 'Not provided'}</p>
                    <p><strong>Portfolio:</strong> {formData.portfolio || 'Not provided'}</p>
                  </ReviewGroup>

                  {registrationType === 'team' && (
                    <ReviewGroup>
                      <h4>Team Details</h4>
                      <p><strong>Team Name:</strong> {formData.teamName}</p>
                      <p><strong>Team Size:</strong> {formData.teamSize} members</p>
                      <p><strong>Team Members:</strong></p>
                      <ul>
                        {teamMembers.map((member, i) => (
                          <li key={i}>{member.name} ({member.email})</li>
                        ))}
                      </ul>
                    </ReviewGroup>
                  )}

                  <ReviewGroup>
                    <h4>Hackathon Preferences</h4>
                    <p><strong>Motivation:</strong> {formData.whyJoin}</p>
                    <p><strong>Area of Interest:</strong> {formData.areaOfInterest}</p>
                    <p><strong>Experience:</strong> {formData.experienceLevel}</p>
                    <p><strong>Preferred Track:</strong> {formData.preferredTrack || 'No preference'}</p>
                  </ReviewGroup>
                </ReviewSection>
              )}
            </motion.div>
          </AnimatePresence>

          {currentStep === 0 && (
            <WhyJoinSection>
              <h3>Why Join Nortable 2026?</h3>
              <BenefitsGrid>
                <BenefitCard>
                  <div className="icon"><StarIcon /></div>
                  <div className="text">
                    <div className="title">Learn from</div>
                    <div className="subtitle">Industry Experts</div>
                  </div>
                </BenefitCard>
                <BenefitCard>
                  <div className="icon"><CodeIcon /></div>
                  <div className="text">
                    <div className="title">Build Real</div>
                    <div className="subtitle">World Solutions</div>
                  </div>
                </BenefitCard>
                <BenefitCard>
                  <div className="icon"><TrophyIcon /></div>
                  <div className="text">
                    <div className="title">Win Amazing</div>
                    <div className="subtitle">Prizes</div>
                  </div>
                </BenefitCard>
                <BenefitCard>
                  <div className="icon"><UsersIcon /></div>
                  <div className="text">
                    <div className="title">Network with</div>
                    <div className="subtitle">Top Innovators</div>
                  </div>
                </BenefitCard>
              </BenefitsGrid>
            </WhyJoinSection>
          )}

          <ButtonGroup>
            {currentStep > 0 && (
              <BackButton onClick={prevStep}>
                Back
              </BackButton>
            )}
            {currentStep < steps.length - 1 ? (
              <ContinueButton onClick={nextStep} style={{ marginLeft: currentStep === 0 ? 'auto' : '0', flex: currentStep > 0 ? 1 : 'none' }}>
                Continue
                <ArrowRightIcon />
              </ContinueButton>
            ) : (
              <ContinueButton onClick={handleSubmit} disabled={isSubmitting} style={{ flex: 1 }}>
                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                <ArrowRightIcon />
              </ContinueButton>
            )}
          </ButtonGroup>

          <FooterInfo>
            <FooterCard>
              <div className="icon"><ShieldIcon /></div>
              <div className="content">
                <h4>Trusted & Secure</h4>
                <p>Your data is safe with enterprise-grade security.</p>
              </div>
            </FooterCard>

            <FooterCard>
              <div className="icon"><GiftIcon /></div>
              <div className="content">
                <h4>What You Get</h4>
                <p>Swag, Goodies, Mentorship, Certificates & more!</p>
              </div>
            </FooterCard>

            <FooterCard>
              <div className="icon"><HeadphonesIcon /></div>
              <div className="content">
                <h4>Need Help?</h4>
                <p>Contact us at <a href="mailto:hello@nortable.dev">hello@nortable.dev</a></p>
              </div>
            </FooterCard>
          </FooterInfo>
        </RightPanel>
      </MainContainer>
    </PageWrapper>
  );
};

export default RegistrationForm;
