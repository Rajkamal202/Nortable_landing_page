'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Wrapper,
  Inner,
  GlowAccent,
  LeftPanel,
  RolesGrid,
  RoleCard,
  RightPanel,
  FormCard,
  InputGroup,
  Label,
  InputWrapper,
  Select,
  TextArea,
  ErrorText,
  SubmitButton,
  SuccessCard,
  SuccessButton,
  FormSectionTitle,
  InputRow,
  SubText,
} from './styles';

const rolesData = [
  {
    title: 'Technical Mentoring',
    desc: 'Guide hackers online with codebase setup, debugging, AI integrations, or software architecture.',
  },
  {
    title: 'Operations & Logistics',
    desc: 'Manage Discord channels, coordinate schedules, monitor server traffic, and keep the virtual event running smoothly.',
  },
  {
    title: 'Design & Media',
    desc: 'Create graphics, assist with social media posts, edit community highlights, and support live streams.',
  },
  {
    title: 'Hospitality & Support',
    desc: 'Help out in the Discord helpdesk, assist check-ins/verifications, and ensure hackers have a welcoming online experience.',
  },
];

// Custom Premium SVG Icons
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const AgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ReferIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    internetAndDiscord: '',
    daysAvailable: '',
    prePostAvailability: '',
    linkedin: '',
    profession: '',
    motivation: '',
    referredBy: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.2,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile Number is required';
    }
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!formData.internetAndDiscord) {
      newErrors.internetAndDiscord = 'Please answer if you have stable internet and Discord access';
    }
    if (!formData.daysAvailable) {
      newErrors.daysAvailable = 'Please select your days of availability';
    }
    if (!formData.prePostAvailability) {
      newErrors.prePostAvailability = 'Please answer if you are available pre/post event';
    }
    if (!formData.linkedin.trim()) {
      newErrors.linkedin = 'LinkedIn Profile is required';
    } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(formData.linkedin.trim())) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL';
    }
    if (!formData.profession) {
      newErrors.profession = 'Please select what you currently do';
    }
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please share why you want to volunteer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      internetAndDiscord: '',
      daysAvailable: '',
      prePostAvailability: '',
      linkedin: '',
      profession: '',
      motivation: '',
      referredBy: '',
    });
    setIsSuccess(false);
  };

  return (
    <Wrapper ref={containerRef} id="volunteer">
      <GlowAccent />
      <Inner>
        <LeftPanel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Become a <span>Volunteer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Nortable is built by the community, for the community. Join our team of organizers and mentors to shape the developer ecosystem, gain hands-on event management experience, and connect with tech visionaries.
          </motion.p>
          <RolesGrid>
            {rolesData.map((role, i) => (
              <RoleCard
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
              </RoleCard>
            ))}
          </RolesGrid>
        </LeftPanel>

        <RightPanel>
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <FormCard
                key="volunteer-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                {/* Section 1: Personal Details */}
                <FormSectionTitle>Personal Details</FormSectionTitle>

                <InputRow>
                  <InputGroup>
                    <Label htmlFor="fullName">Name <span>*</span></Label>
                    <InputWrapper $error={!!errors.fullName}>
                      <UserIcon />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                      />
                    </InputWrapper>
                    {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
                  </InputGroup>

                  <InputGroup>
                    <Label htmlFor="email">Email ID <span>*</span></Label>
                    <InputWrapper $error={!!errors.email}>
                      <MailIcon />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@example.com"
                      />
                    </InputWrapper>
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  </InputGroup>
                </InputRow>

                <InputRow>
                  <InputGroup>
                    <Label htmlFor="phone">Mobile Number <span>*</span></Label>
                    <InputWrapper $error={!!errors.phone}>
                      <PhoneIcon />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                      />
                    </InputWrapper>
                    <SubText>Preferably WhatsApp</SubText>
                    {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                  </InputGroup>

                  <InputGroup>
                    <Label htmlFor="age">Your Age <span>*</span></Label>
                    <InputWrapper $error={!!errors.age}>
                      <AgeIcon />
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="21"
                        min="1"
                      />
                    </InputWrapper>
                    {errors.age && <ErrorText>{errors.age}</ErrorText>}
                  </InputGroup>
                </InputRow>

                <InputGroup>
                  <Label htmlFor="profession">What do you currently do? <span>*</span></Label>
                  <Select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    $error={!!errors.profession}
                  >
                    <option value="">Select your status</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="On a work break">On a work break</option>
                  </Select>
                  {errors.profession && <ErrorText>{errors.profession}</ErrorText>}
                </InputGroup>

                {/* Section 2: Location & Availability */}
                <FormSectionTitle>Location & Availability</FormSectionTitle>

                <InputGroup>
                  <Label htmlFor="internetAndDiscord">Do you have a stable internet connection and Discord access? <span>*</span></Label>
                  <Select
                    id="internetAndDiscord"
                    name="internetAndDiscord"
                    value={formData.internetAndDiscord}
                    onChange={handleInputChange}
                    $error={!!errors.internetAndDiscord}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  {errors.internetAndDiscord && <ErrorText>{errors.internetAndDiscord}</ErrorText>}
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="daysAvailable">Days you are available <span>*</span></Label>
                  <Select
                    id="daysAvailable"
                    name="daysAvailable"
                    value={formData.daysAvailable}
                    onChange={handleInputChange}
                    $error={!!errors.daysAvailable}
                  >
                    <option value="">Select availability days</option>
                    <option value="Friday - 10th July only">Friday - 10th July only</option>
                    <option value="Saturday - 11th July only">Saturday - 11th July only</option>
                    <option value="Sunday - 12th July only">Sunday - 12th July only</option>
                    <option value="All days">All days</option>
                  </Select>
                  <SubText>Volunteering shifts would be coordinated online across time zones</SubText>
                  {errors.daysAvailable && <ErrorText>{errors.daysAvailable}</ErrorText>}
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="prePostAvailability">Apart from main days - would you be available to volunteer pre & post event? <span>*</span></Label>
                  <Select
                    id="prePostAvailability"
                    name="prePostAvailability"
                    value={formData.prePostAvailability}
                    onChange={handleInputChange}
                    $error={!!errors.prePostAvailability}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <SubText>This would be from 1st July to 15th July if needed? (Virtual)</SubText>
                  {errors.prePostAvailability && <ErrorText>{errors.prePostAvailability}</ErrorText>}
                </InputGroup>

                {/* Section 3: Profile & Motivation */}
                <FormSectionTitle>Profile & Reference</FormSectionTitle>

                <InputRow>
                  <InputGroup>
                    <Label htmlFor="linkedin">Share your Linkedin Profile <span>*</span></Label>
                    <InputWrapper $error={!!errors.linkedin}>
                      <LinkedinIcon />
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </InputWrapper>
                    {errors.linkedin && <ErrorText>{errors.linkedin}</ErrorText>}
                  </InputGroup>

                  <InputGroup>
                    <Label htmlFor="referredBy">Referred by</Label>
                    <InputWrapper>
                      <ReferIcon />
                      <input
                        type="text"
                        id="referredBy"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        placeholder="Name of referee"
                      />
                    </InputWrapper>
                    <SubText>Please mention if someone has referred you</SubText>
                  </InputGroup>
                </InputRow>

                <InputGroup>
                  <Label htmlFor="motivation">Why do you want to volunteer? <span>*</span></Label>
                  <TextArea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Tell us what excites you about volunteering and what value you can bring..."
                    $error={!!errors.motivation}
                  />
                  {errors.motivation && <ErrorText>{errors.motivation}</ErrorText>}
                </InputGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Submitting Application...' : 'Apply to Volunteer'}
                </SubmitButton>
              </FormCard>
            ) : (
              <SuccessCard
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
                >
                  <CheckIcon />
                </motion.div>
                <h2>Application Sent!</h2>
                <p>
                  Thank you for applying to volunteer, <strong>{formData.fullName}</strong>. Our organizing crew will review your profile and reach out to you via <strong>{formData.email}</strong> soon!
                </p>
                <SuccessButton onClick={resetForm}>
                  Apply for Someone Else
                </SuccessButton>
              </SuccessCard>
            )}
          </AnimatePresence>
        </RightPanel>
      </Inner>
    </Wrapper>
  );
};

export default VolunteerSection;
