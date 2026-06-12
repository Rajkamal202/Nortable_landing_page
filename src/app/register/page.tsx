'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '@/components';
import { supabase } from '@/libs/supabaseClient';
import {
  PageWrapper,
  HeroBanner,
  BannerInner,
  BannerLeft,
  BannerRight,
  TabBar,
  TabBarInner,
  TabButton,
  MainLayout,
  ContentColumn,
  HackathonHeader,
  HeaderMeta,
  JoinButton,
  EligibilityBox,
  SectionBlock,
  SidebarCard,
  DeadlineRow,
  DeadlineDetail,
  InfoGrid,
  InfoCell,
  PrizeParticipants,
  PrizeCell,
  TagsSection,
  Tag,
  ManagedBy,
  SidebarCTA,
  JoinCTAButton,
  Grid,
  PrizeCard,
  TrackCard,
  JudgeCard,
  SuccessWrapper,
  TicketCard,
  SubmitButton,
  // Auth
  AuthOverlay,
  AuthCard,
  AuthCloseBtn,
  AuthHeading,
  AuthLoginLink,
  AuthButtonsStack,
  AuthSocialButton,
  AuthEmailLink,
  AuthCheckboxRow,
  AuthTerms,
  AuthForm,
  AuthFieldGroup,
  AuthLabel,
  AuthInput,
  AuthSubmitBtn,
  AuthErrorText,
  AuthSuccessText,
  AuthSpinner,
  AuthLoggedInAlert,
  // Registration Form
  RegPageContainer,
  RegPageInner,
  RegLayout,
  RegMain,
  RegAside,
  RegPageHeader,
  RegForm,
  StepSection,
  StepHeading,
  RegFieldGroup,
  RegLabel,
  RegHelperText,
  RegInput,
  RegTextarea,
  RegSelect,
  PillRadioGroup,
  PillRadio,
  TeammateSection,
  TeammateHeader,
  TeammateCard,
  RemoveTeammateBtn,
  AddTeammateBtn,
  OrderSummaryCard,
  SecureNote,
  EligibilitySection,
  CheckboxRow,
  RegActions,
  RegSubmitBtn,
  RegCancelBtn,
  RegErrorText,
} from './styles';

/* ──────── SVG Icons ──────── */
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const UnlockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* Social Brand Icons */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1rem', height: '1rem' }}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

/* ──────── Data ──────── */
const TABS = ['Overview', 'Prizes', 'Tracks', 'Judges', 'Rules', 'FAQ'] as const;
type TabKey = typeof TABS[number];

const tracksList = [
  { title: 'AI & Advanced Computing', desc: 'Build smart AI tools, integrations, or agents using the Model Context Protocol (MCP) or OpenAI APIs.' },
  { title: 'Fintech & Decentralized Systems', desc: 'Construct secure transaction pipelines, payment gateways, or DeFi protocols.' },
  { title: 'Open Innovation & Scale', desc: 'Solve critical issues using highly scalable system architectures and developer utilities.' },
];

const prizesList = [
  { place: 'Grand Prize — AI/ML Track', amount: '₹50,000', desc: 'Awarded to the most innovative and polished virtual AI agent or tool.' },
  { place: 'Grand Prize — Fintech Track', amount: '₹30,000', desc: 'Awarded to the top secure decentralized primitive or fintech application.' },
  { place: 'Grand Prize — Open Track', amount: '₹20,000', desc: 'Awarded to the most optimized software architecture or developer tool.' },
  { place: 'All Qualified Submissions', amount: '₹15,000+', desc: 'Developer kit including AWS credits, GitHub tokens, and developer resource vouchers.' },
];

const judgesList = [
  { name: 'Richard Young', title: 'Director of AI Solutions', org: 'OpenAI', avatar: '🧠' },
  { name: 'Clay Miner', title: 'Head of Solutions Strategy', org: 'Microsoft', avatar: '💻' },
  { name: 'Anish Mathur', title: 'Lead Engineer (Cloud Platform)', org: 'Google', avatar: '⚡' },
  { name: 'Philipp Krenn', title: 'Developer Relations Manager', org: 'Elastic', avatar: '🔍' },
  { name: 'Elijah Davis', title: 'Solutions Architect', org: 'AWS', avatar: '☁️' },
  { name: 'Nick Veenhof', title: 'Director of Contributor Success', org: 'GitHub', avatar: '🐙' },
];

const experienceLevels = ['Beginner (0–1 years)', 'Intermediate (1–3 years)', 'Advanced (3–5 years)', 'Expert (5+ years)'];
const hearAboutOptions = ['Social Media', 'Friend / Referral', 'College / University', 'Discord / Slack', 'Other'];
const goalOptions = ['Build & learn new tech', 'Win prizes', 'Networking & career growth', 'Portfolio project', 'Fun & community'];

type Teammate = { name: string; email: string };
type PageView = 'overview' | 'auth' | 'register' | 'success';

const BASE_FEE = 100;
const PER_TEAMMATE_FEE = 100;
const MAX_TEAMMATES = 3;

/* ──────── Component ──────── */
export default function RegisterPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<TabKey>('Overview');
  const [pageView, setPageView] = useState<PageView>('overview');

  // Auth Overlay States
  const [authNewsletter, setAuthNewsletter] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Registration form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [teamStatus, setTeamStatus] = useState<'solo' | 'looking' | 'have_team'>('solo');
  const [teamBio, setTeamBio] = useState('');
  const [teammates, setTeammates] = useState<Teammate[]>([]);
  const [trackSelection, setTrackSelection] = useState(tracksList[0].title);
  const [experience, setExperience] = useState('');
  const [hearAbout, setHearAbout] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('');
  const [agreeEligibility, setAgreeEligibility] = useState(false);
  const [agreeRules, setAgreeRules] = useState(false);
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});
  const [regSubmitting, setRegSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState<{ name: string; track: string; serial: string; totalPaid: number } | null>(null);

  // Registration checker: existing registration lookup
  const [existingReg, setExistingReg] = useState<any | null>(null);
  const [regCheckLoading, setRegCheckLoading] = useState(false);

  // On load (and whenever the user changes), check if they already registered.
  useEffect(() => {
    let cancelled = false;
    const checkRegistration = async () => {
      if (!user) {
        setExistingReg(null);
        return;
      }
      setRegCheckLoading(true);
      try {
        const { data, error } = await supabase
          .from('registrations')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        if (!cancelled) {
          if (error) {
            console.error('[v0] Registration lookup error:', error.message);
            setExistingReg(null);
          } else {
            setExistingReg(data ?? null);
          }
        }
      } catch (err) {
        if (!cancelled) setExistingReg(null);
      } finally {
        if (!cancelled) setRegCheckLoading(false);
      }
    };
    checkRegistration();
    return () => {
      cancelled = true;
    };
  }, [user]);

  // Auto-fill registration form with authenticated user details
  useEffect(() => {
    if (user) {
      if (!fullName) setFullName(user.user_metadata?.full_name || '');
      if (!email) setEmail(user.email || '');
    }
  }, [user, fullName, email]);

  // Transition to register view if user logs in while viewing auth modal
  useEffect(() => {
    if (user && pageView === 'auth') {
      setPageView('register');
    }
  }, [user, pageView]);

  // Computed pricing
  const totalPrice = BASE_FEE + teammates.length * PER_TEAMMATE_FEE;

  // Auth handlers
  const handleJoinClick = () => {
    if (user) {
      if (existingReg) {
        handleViewTicket();
      } else {
        setPageView('register');
      }
    } else {
      setPageView('auth');
    }
  };

  const handleViewTicket = () => {
    if (existingReg) {
      setTicketData({
        name: existingReg.full_name,
        track: existingReg.track_selection,
        serial: existingReg.ticket_serial,
        totalPaid: existingReg.total_price,
      });
      setPageView('success');
    }
  };

  const handleAuthClose = () => {
    setPageView('overview');
    setShowEmailForm(false);
    setAuthError('');
    setAuthSuccess('');
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');
    if (!authEmail.trim() || !authPassword.trim() || !authName.trim()) {
      setAuthError('All fields are required');
      return;
    }
    setAuthSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: authEmail,
        password: authPassword,
        options: {
          data: {
            full_name: authName,
          },
        },
      });
      if (error) throw error;
      
      if (data?.session) {
        setAuthSuccess('Account created and signed in successfully!');
        setTimeout(() => {
          setPageView('register');
          handleAuthClose();
        }, 1500);
      } else {
        setAuthSuccess('Account created successfully! Please check your email to confirm.');
      }
    } catch (err: any) {
      setAuthError(err.message || 'An error occurred during signup');
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleEmailLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');
    if (!authEmail.trim() || !authPassword.trim()) {
      setAuthError('Email and password are required');
      return;
    }
    setAuthSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });
      if (error) throw error;
      
      setAuthSuccess('Logged in successfully!');
      setTimeout(() => {
        setPageView('register');
        handleAuthClose();
      }, 1000);
    } catch (err: any) {
      setAuthError(err.message || 'Invalid email or password');
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleOAuthSignIn = async (provider: 'github' | 'google' | 'facebook' | 'linkedin') => {
    setAuthError('');
    setAuthSuccess('');
    try {
      const p = provider === 'linkedin' ? 'linkedin_oidc' : provider;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: p as any,
        options: {
          redirectTo: window.location.origin + window.location.pathname + '?auth_callback=true',
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setAuthError(err.message || 'OAuth initialization failed');
    }
  };

  // Teammate handlers
  const addTeammate = () => {
    if (teammates.length < MAX_TEAMMATES) {
      setTeammates([...teammates, { name: '', email: '' }]);
    }
  };

  const removeTeammate = (index: number) => {
    setTeammates(teammates.filter((_, i) => i !== index));
  };

  const updateTeammate = (index: number, field: keyof Teammate, value: string) => {
    const updated = [...teammates];
    updated[index] = { ...updated[index], [field]: value };
    setTeammates(updated);
  };

  // Registration validation
  const validateReg = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!college.trim()) errs.college = 'College/Company is required';
    if (!experience) errs.experience = 'Please select your experience level';
    if (!primaryGoal) errs.primaryGoal = 'Please select your primary goal';

    // Validate teammates
    teammates.forEach((tm, i) => {
      if (!tm.name.trim()) errs[`tm_name_${i}`] = 'Name required';
      if (!tm.email.trim() || !/\S+@\S+\.\S+/.test(tm.email)) errs[`tm_email_${i}`] = 'Valid email required';
    });

    if (!agreeEligibility) errs.eligibility = 'You must agree to the eligibility requirements';
    if (!agreeRules) errs.rules = 'You must agree to the rules';

    setRegErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateReg()) return;

    setRegSubmitting(true);
    const serial = 'NRT-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000);

    try {
      if (user) {
        const payload = {
          user_id: user.id,
          full_name: fullName,
          email: email,
          phone: phone,
          college: college,
          team_status: teamStatus,
          team_bio: teamStatus === 'looking' ? teamBio : null,
          teammates: teamStatus === 'have_team' ? teammates : null,
          track_selection: trackSelection,
          experience: experience,
          hear_about: hearAbout || null,
          primary_goal: primaryGoal,
          total_price: totalPrice,
          ticket_serial: serial,
        };
        const { error } = await supabase.from('registrations').insert(payload);

        if (error) {
          console.error('Supabase DB Insert Error:', error);
          setRegErrors({ database: `Auth succeeded, but database write failed: ${error.message}. Please make sure you have executed the schema SQL in your Supabase SQL editor.` });
          setRegSubmitting(false);
          return;
        }

        // Mark user as registered so the hub CTA switches to "View Ticket".
        setExistingReg({ ...payload, created_at: new Date().toISOString() });
      } else {
        setRegErrors({ auth: 'You must be signed in to submit this registration.' });
        setRegSubmitting(false);
        return;
      }

      setTicketData({ name: fullName, track: trackSelection, serial, totalPaid: totalPrice });
      setPageView('success');
    } catch (err: any) {
      console.error('Registration insertion exception:', err);
      setRegErrors({ form: err.message || 'An unexpected error occurred during submission.' });
    } finally {
      setRegSubmitting(false);
    }
  };

  const handleCancelReg = () => setPageView('overview');

  /* ──────── Tab Content Renderers ──────── */
  const renderOverview = () => (
    <SectionBlock>
      <h3>About the Challenge</h3>
      <p>
        <strong>Nortable 2026</strong> is designed for developers, creators, and system engineers looking to turn raw ideas
        into deployment-ready projects. Over a non-stop <strong>36-hour hacking window</strong>, you will build software prototypes
        and pitch them to top engineering judges.
      </p>
      <p>
        Since the hackathon is <strong>100% virtual</strong>, you can participate from any location globally. Teams can range from
        <strong> 1 to 4 members</strong>. Beginners and advanced developers are equally welcome—our mentors will be available
        on Discord 24/7 to guide you through debugging, design, and pitch packaging.
      </p>
      <h3>How to Participate</h3>
      <ul>
        <li>Grab your digital registration pass (₹100 non-refundable entry fee per person).</li>
        <li>Select your primary track (AI, Fintech, or Open Innovation).</li>
        <li>Build your prototype during the hacking window (July 18–19).</li>
        <li>Submit your project repository and a short pitch video to our portal.</li>
      </ul>
    </SectionBlock>
  );

  const renderPrizes = () => (
    <SectionBlock>
      <h3>Prizes & Bounties</h3>
      <Grid $cols={2}>
        {prizesList.map((prize, i) => (
          <PrizeCard key={i}>
            <div className="place">{prize.place}</div>
            <div className="amount">{prize.amount}</div>
            <p>{prize.desc}</p>
          </PrizeCard>
        ))}
      </Grid>
    </SectionBlock>
  );

  const renderTracks = () => (
    <SectionBlock>
      <h3>Evaluation Tracks</h3>
      <Grid $cols={3}>
        {tracksList.map((track, i) => (
          <TrackCard key={i}>
            <h4>{track.title}</h4>
            <p>{track.desc}</p>
          </TrackCard>
        ))}
      </Grid>
    </SectionBlock>
  );

  const renderJudges = () => (
    <SectionBlock>
      <h3>Panel Judges</h3>
      <Grid $cols={2}>
        {judgesList.map((judge, i) => (
          <JudgeCard key={i}>
            <div className="avatar">{judge.avatar}</div>
            <div className="meta">
              <span className="name">{judge.name}</span>
              <span className="role">{judge.title}</span>
              <span className="org">@{judge.org}</span>
            </div>
          </JudgeCard>
        ))}
      </Grid>
    </SectionBlock>
  );

  const renderRules = () => (
    <SectionBlock>
      <h3>Rules & Guidelines</h3>
      <ul>
        <li>Teams of <strong>1–4 members</strong>. All team members must be registered.</li>
        <li>All code must be written during the 36-hour hacking window.</li>
        <li>Projects must be submitted before the deadline. Late submissions will not be reviewed.</li>
        <li>Participants must adhere to the <strong>Code of Conduct</strong>.</li>
        <li>Use of open-source libraries is permitted with proper credits.</li>
        <li>Judges&apos; decisions are <strong>final and binding</strong>.</li>
      </ul>
    </SectionBlock>
  );

  const renderFAQ = () => (
    <SectionBlock>
      <h3>Frequently Asked Questions</h3>
      <p><strong>How much does it cost?</strong><br />₹100 per person. Each teammate you add costs an additional ₹100.</p>
      <p><strong>Can I participate solo?</strong><br />Yes! Teams of 1–4 members are welcome.</p>
      <p><strong>Is this virtual or in-person?</strong><br />100% virtual. Participate from anywhere.</p>
      <p><strong>What if I&apos;m a beginner?</strong><br />Beginners are welcome. Mentors available 24/7 on Discord.</p>
    </SectionBlock>
  );

  const tabContentMap: Record<TabKey, () => React.ReactNode> = {
    Overview: renderOverview, Prizes: renderPrizes, Tracks: renderTracks,
    Judges: renderJudges, Rules: renderRules, FAQ: renderFAQ,
  };

  /* ──────── RENDER ──────── */
  return (
    <PageWrapper>
      {/* ═══ HERO BANNER ═══ */}
      <HeroBanner>
        <BannerInner>
          <BannerLeft>
            <h1>
              Building the future with{' '}
              <span className="green">code, creativity & community</span>
            </h1>
          </BannerLeft>
          <BannerRight>
            <p>{"India's"} premier 36-hour virtual hackathon. Over ₹1,00,000 in cash prizes. Build. Ship. Win.</p>
          </BannerRight>
        </BannerInner>
      </HeroBanner>

      {/* Show tab bar only on overview */}
      {pageView === 'overview' && (
        <>
          <TabBar>
            <TabBarInner>
              {TABS.map((tab) => (
                <TabButton key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                  {tab}
                </TabButton>
              ))}
            </TabBarInner>
          </TabBar>

          <MainLayout>
            <ContentColumn>
              <HackathonHeader>
                <h2>Nortable 2026</h2>
                <p className="subtitle">36-Hour Virtual Hackathon — AI · Fintech · Open Innovation</p>
                <HeaderMeta>
                  <JoinButton onClick={handleJoinClick}>
                    {existingReg ? 'View Ticket' : 'Join Hackathon'}
                  </JoinButton>
                  <EligibilityBox>
                    <div className="eligibility-title">Who can participate</div>
                    <ul>
                      <li>Students (18+) and working professionals</li>
                      <li>Any skill level — beginner to expert</li>
                      <li>Teams of 1–4 members</li>
                    </ul>
                    <a className="view-rules" onClick={() => setActiveTab('Rules')}>View full rules →</a>
                  </EligibilityBox>
                </HeaderMeta>
              </HackathonHeader>

              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                  {tabContentMap[activeTab]()}
                </motion.div>
              </AnimatePresence>
            </ContentColumn>

            <SidebarCard>
              <DeadlineRow>
                <span className="deadline-badge">🟢 Registration Open</span>
                <span className="view-schedule" onClick={() => setActiveTab('Rules')}>View schedule</span>
              </DeadlineRow>
              <DeadlineDetail>
                <div className="label">Submission Deadline</div>
                <div className="value">Jul 19, 2026 at <span className="green">11:59 PM IST</span></div>
              </DeadlineDetail>
              <InfoGrid>
                <InfoCell $border><GlobeIcon /><span>Online</span></InfoCell>
                <InfoCell><UnlockIcon /><span>Public</span></InfoCell>
              </InfoGrid>
              <PrizeParticipants>
                <PrizeCell $border><div className="amount">₹1,00,000+</div><div className="label">in prizes</div></PrizeCell>
                <PrizeCell><div className="count">5,000+</div><div className="label">participants</div></PrizeCell>
              </PrizeParticipants>
              <TagsSection><TagIcon /><Tag>AI/ML</Tag><Tag>Fintech</Tag><Tag>Open Source</Tag><Tag>Hackathon</Tag></TagsSection>
              <ManagedBy><UsersIcon /><span>Managed by <a href="#">Nortable Team</a></span></ManagedBy>
              <SidebarCTA>
                <JoinCTAButton onClick={handleJoinClick}>
                  {existingReg ? 'View Your Ticket' : 'Join Hackathon — ₹100'}
                </JoinCTAButton>
                <p className="questions">Questions? <a href="#">Contact organizers</a></p>
              </SidebarCTA>
            </SidebarCard>
          </MainLayout>
        </>
      )}

      {/* ═══ FULL-PAGE REGISTRATION FORM (premium dark) ═══ */}
      {pageView === 'register' && (
        <RegPageContainer>
          <RegPageInner>
          {user && (
            <AuthLoggedInAlert>
              <div className="info">
                <span>Signed in as <strong>{user.email}</strong></span>
              </div>
              <button type="button" className="signout-btn" onClick={async () => { await signOut(); setPageView('overview'); }}>
                Sign Out
              </button>
            </AuthLoggedInAlert>
          )}

          <RegLayout>
            <RegMain>
              <RegPageHeader>
                <div className="eyebrow">Nortable 2026 · Virtual Hackathon</div>
                <h2>Complete your registration</h2>
                <p>
                  Secure your builder pass and lock in your track. Registration is{' '}
                  <a href="#">₹100 per person</a> — teammates can be added below.
                </p>
              </RegPageHeader>

              <RegForm onSubmit={handleRegSubmit}>
                {/* ── STEP 1: Personal Info ── */}
                <StepSection>
                  <StepHeading><span className="num">1</span> Your details</StepHeading>
                  <RegFieldGroup>
              <RegLabel $required>Full Name</RegLabel>
              <RegInput
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); if (regErrors.fullName) setRegErrors(p => ({ ...p, fullName: '' })); }}
              />
              {regErrors.fullName && <RegErrorText>{regErrors.fullName}</RegErrorText>}
            </RegFieldGroup>

            <RegFieldGroup>
              <RegLabel $required>Email Address</RegLabel>
              <RegInput
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (regErrors.email) setRegErrors(p => ({ ...p, email: '' })); }}
              />
              {regErrors.email && <RegErrorText>{regErrors.email}</RegErrorText>}
            </RegFieldGroup>

            <RegFieldGroup>
              <RegLabel $required>Phone Number</RegLabel>
              <RegInput
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); if (regErrors.phone) setRegErrors(p => ({ ...p, phone: '' })); }}
              />
              {regErrors.phone && <RegErrorText>{regErrors.phone}</RegErrorText>}
            </RegFieldGroup>

            <RegFieldGroup>
              <RegLabel $required>College / Company Name</RegLabel>
              <RegHelperText>If not working, please put &quot;NA&quot;</RegHelperText>
              <RegInput
                type="text"
                placeholder="e.g. IIT Bombay"
                value={college}
                onChange={(e) => { setCollege(e.target.value); if (regErrors.college) setRegErrors(p => ({ ...p, college: '' })); }}
              />
              {regErrors.college && <RegErrorText>{regErrors.college}</RegErrorText>}
            </RegFieldGroup>
                </StepSection>

                {/* ── STEP 2: Team ── */}
                <StepSection>
                  <StepHeading><span className="num">2</span> Team setup</StepHeading>
                  <RegFieldGroup>
              <RegLabel $required>Do you have teammates?</RegLabel>
              <PillRadioGroup>
                <PillRadio $active={teamStatus === 'solo'}>
                  <input type="radio" name="teamStatus" checked={teamStatus === 'solo'} onChange={() => { setTeamStatus('solo'); setTeammates([]); }} />
                  <span className="check-circle"><svg viewBox="0 0 12 12"><polyline points="2.5 6 5 8.5 9.5 3.5" /></svg></span> Working solo
                </PillRadio>
                <PillRadio $active={teamStatus === 'looking'}>
                  <input type="radio" name="teamStatus" checked={teamStatus === 'looking'} onChange={() => { setTeamStatus('looking'); setTeammates([]); }} />
                  <span className="check-circle"><svg viewBox="0 0 12 12"><polyline points="2.5 6 5 8.5 9.5 3.5" /></svg></span> Looking for teammates
                </PillRadio>
                <PillRadio $active={teamStatus === 'have_team'}>
                  <input type="radio" name="teamStatus" checked={teamStatus === 'have_team'} onChange={() => setTeamStatus('have_team')} />
                  <span className="check-circle"><svg viewBox="0 0 12 12"><polyline points="2.5 6 5 8.5 9.5 3.5" /></svg></span> Already have a team
                </PillRadio>
              </PillRadioGroup>
            </RegFieldGroup>

            {/* Bio textarea when looking for teammates */}
            {teamStatus === 'looking' && (
              <RegFieldGroup>
                <RegTextarea
                  placeholder="Introduce yourself, any ideas you have, and what kind of teammates you're looking for."
                  value={teamBio}
                  onChange={(e) => setTeamBio(e.target.value)}
                />
              </RegFieldGroup>
            )}

            {/* ── Add Teammates Section ── */}
            {teamStatus === 'have_team' && (
              <TeammateSection>
                <TeammateHeader>
                  <span className="tm-title">Team Members</span>
                  <span className="tm-cost">+₹100 per teammate</span>
                </TeammateHeader>

                <AnimatePresence>
                  {teammates.map((tm, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <TeammateCard>
                        <div className="teammate-label">Teammate {i + 1}</div>
                        <div>
                          <RegInput
                            type="text"
                            placeholder="Full Name"
                            value={tm.name}
                            onChange={(e) => { updateTeammate(i, 'name', e.target.value); if (regErrors[`tm_name_${i}`]) setRegErrors(p => ({ ...p, [`tm_name_${i}`]: '' })); }}
                          />
                          {regErrors[`tm_name_${i}`] && <RegErrorText>{regErrors[`tm_name_${i}`]}</RegErrorText>}
                        </div>
                        <div>
                          <RegInput
                            type="email"
                            placeholder="Email Address"
                            value={tm.email}
                            onChange={(e) => { updateTeammate(i, 'email', e.target.value); if (regErrors[`tm_email_${i}`]) setRegErrors(p => ({ ...p, [`tm_email_${i}`]: '' })); }}
                          />
                          {regErrors[`tm_email_${i}`] && <RegErrorText>{regErrors[`tm_email_${i}`]}</RegErrorText>}
                        </div>
                        <RemoveTeammateBtn type="button" onClick={() => removeTeammate(i)}>
                          Remove
                        </RemoveTeammateBtn>
                      </TeammateCard>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <AddTeammateBtn type="button" onClick={addTeammate} disabled={teammates.length >= MAX_TEAMMATES}>
                  <PlusIcon />
                  {teammates.length >= MAX_TEAMMATES
                    ? `Max ${MAX_TEAMMATES} teammates reached`
                    : `Add Teammate (+₹100)`}
                </AddTeammateBtn>
              </TeammateSection>
            )}
                </StepSection>

                {/* ── STEP 3: Project & experience ── */}
                <StepSection>
                  <StepHeading><span className="num">3</span> Track &amp; experience</StepHeading>
                  <RegFieldGroup>
              <RegLabel $required>Select your primary track</RegLabel>
              <RegSelect value={trackSelection} onChange={(e) => setTrackSelection(e.target.value)}>
                {tracksList.map((t, i) => <option key={i} value={t.title}>{t.title}</option>)}
              </RegSelect>
            </RegFieldGroup>

            {/* ── Experience Level ── */}
            <RegFieldGroup>
              <RegLabel $required>Describe your level of experience with coding/development</RegLabel>
              <RegSelect value={experience} onChange={(e) => { setExperience(e.target.value); if (regErrors.experience) setRegErrors(p => ({ ...p, experience: '' })); }}>
                <option value="" disabled>Make a selection</option>
                {experienceLevels.map((lvl, i) => <option key={i} value={lvl}>{lvl}</option>)}
              </RegSelect>
              {regErrors.experience && <RegErrorText>{regErrors.experience}</RegErrorText>}
            </RegFieldGroup>

            {/* ── How did you hear about us? ── */}
            <RegFieldGroup>
              <RegLabel>How did you hear about Nortable 2026?</RegLabel>
              <PillRadioGroup>
                {hearAboutOptions.map((opt) => (
                  <PillRadio key={opt} $active={hearAbout === opt}>
                    <input type="radio" name="hearAbout" checked={hearAbout === opt} onChange={() => setHearAbout(opt)} />
                    <span className="check-circle"><svg viewBox="0 0 12 12"><polyline points="2.5 6 5 8.5 9.5 3.5" /></svg></span> {opt}
                  </PillRadio>
                ))}
              </PillRadioGroup>
            </RegFieldGroup>

            {/* ── Primary Goal ── */}
            <RegFieldGroup>
              <RegLabel $required>What is your primary goal for this hackathon?</RegLabel>
              <RegSelect value={primaryGoal} onChange={(e) => { setPrimaryGoal(e.target.value); if (regErrors.primaryGoal) setRegErrors(p => ({ ...p, primaryGoal: '' })); }}>
                <option value="" disabled>Select all that apply</option>
                {goalOptions.map((g, i) => <option key={i} value={g}>{g}</option>)}
              </RegSelect>
              {regErrors.primaryGoal && <RegErrorText>{regErrors.primaryGoal}</RegErrorText>}
            </RegFieldGroup>
                </StepSection>

                {/* ── STEP 4: Eligibility ── */}
                <StepSection>
                  <StepHeading><span className="num">4</span> Confirm &amp; agree</StepHeading>
                  <EligibilitySection>
              <CheckboxRow>
                <input type="checkbox" checked={agreeEligibility} onChange={(e) => { setAgreeEligibility(e.target.checked); if (regErrors.eligibility) setRegErrors(p => ({ ...p, eligibility: '' })); }} />
                <span>
                  I have read and agree to the eligibility requirements for this hackathon:
                  <br />– Above legal age of majority in country of residence
                  <br />– Team max size: 4 eligible individuals
                  <br />– This hackathon is 100% virtual
                </span>
              </CheckboxRow>
              {regErrors.eligibility && <RegErrorText>{regErrors.eligibility}</RegErrorText>}

              <CheckboxRow>
                <input type="checkbox" checked={agreeRules} onChange={(e) => { setAgreeRules(e.target.checked); if (regErrors.rules) setRegErrors(p => ({ ...p, rules: '' })); }} />
                <span>
                  I have read and agree to be bound by the <a href="#">Official Rules</a> and the Nortable <a href="#">Terms of Service</a>
                </span>
              </CheckboxRow>
              {regErrors.rules && <RegErrorText>{regErrors.rules}</RegErrorText>}
            </EligibilitySection>

            {regErrors.database && (
              <div style={{ color: '#fca5a5', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '0.75rem', fontSize: '0.82rem' }}>
                {regErrors.database}
              </div>
            )}

            {/* ── Action Buttons ── */}
            <RegActions>
              <RegSubmitBtn type="submit" disabled={regSubmitting}>
                {regSubmitting ? 'Processing...' : `Register — Pay ₹${totalPrice}`}
              </RegSubmitBtn>
              <RegCancelBtn type="button" onClick={handleCancelReg}>Cancel</RegCancelBtn>
            </RegActions>
                </StepSection>
              </RegForm>
            </RegMain>

            {/* ── Sticky Order Summary ── */}
            <RegAside>
              <OrderSummaryCard>
                <div className="os-title">Order summary</div>
                <div className="os-rows">
                  <div className="os-row">
                    <span>Builder pass (you)</span>
                    <span className="amount">₹{BASE_FEE}</span>
                  </div>
                  {teammates.length > 0 && (
                    <div className="os-row">
                      <span>Teammates ({teammates.length} × ₹{PER_TEAMMATE_FEE})</span>
                      <span className="amount">₹{teammates.length * PER_TEAMMATE_FEE}</span>
                    </div>
                  )}
                  <div className="os-row">
                    <span>Track</span>
                    <span className="amount" style={{ textAlign: 'right', maxWidth: '60%' }}>{trackSelection.split(' ')[0]}…</span>
                  </div>
                </div>
                <div className="os-divider" />
                <div className="os-total">
                  <span>Total</span>
                  <span className="total-amount">₹{totalPrice}</span>
                </div>
                <SecureNote>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    Encrypted, secure checkout
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    Instant digital pass on confirmation
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    Access to Discord &amp; mentors
                  </li>
                </SecureNote>
              </OrderSummaryCard>
            </RegAside>
          </RegLayout>
          </RegPageInner>
        </RegPageContainer>
      )}

      {/* ═══ SUCCESS PAGE ═══ */}
      {pageView === 'success' && ticketData && (
        <RegPageContainer>
          <SuccessWrapper>
            <h3>{existingReg ? "You're Registered!" : 'Registration Confirmed!'}</h3>
            <p className="sub">
              {existingReg
                ? 'Here is your digital pass and submitted details'
                : 'Your pass has been generated successfully'}
            </p>

            <TicketCard>
              <div className="top">
                <div className="logo">NORTABLE 2026</div>
                <div className="avatar-circle">👨‍💻</div>
                <div className="name">{ticketData.name}</div>
                <div className="track">{ticketData.track}</div>
              </div>
              <div className="bottom">
                <div className="serial">{ticketData.serial}</div>
                <div className="info-row">
                  <span>Access<strong>VIRTUAL</strong></span>
                  <span>Entry<strong>₹{ticketData.totalPaid} PAID</strong></span>
                </div>
              </div>
            </TicketCard>

            {existingReg && (
              <SectionBlock style={{ width: '100%', maxWidth: '480px', marginTop: '1.5rem' }}>
                <h3>Your Registration</h3>
                <InfoGrid>
                  <InfoCell $border><span>Email</span><strong>{existingReg.email}</strong></InfoCell>
                  <InfoCell><span>Phone</span><strong>{existingReg.phone || '—'}</strong></InfoCell>
                </InfoGrid>
                <InfoGrid>
                  <InfoCell $border><span>College / Company</span><strong>{existingReg.college || '—'}</strong></InfoCell>
                  <InfoCell><span>Track</span><strong>{existingReg.track_selection}</strong></InfoCell>
                </InfoGrid>
                <InfoGrid>
                  <InfoCell $border><span>Team Status</span><strong>{existingReg.team_status}</strong></InfoCell>
                  <InfoCell><span>Experience</span><strong>{existingReg.experience || '—'}</strong></InfoCell>
                </InfoGrid>
                {Array.isArray(existingReg.teammates) && existingReg.teammates.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <strong>Teammates</strong>
                    <ul>
                      {existingReg.teammates.map((t: Teammate, i: number) => (
                        <li key={i}>{t.name} — {t.email}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </SectionBlock>
            )}

            <SubmitButton style={{ width: '100%', maxWidth: '340px' }} onClick={() => setPageView('overview')}>
              Back to Hub
            </SubmitButton>
          </SuccessWrapper>
        </RegPageContainer>
      )}

      {/* ═══ AUTH / SIGNUP OVERLAY ═══ */}
      <AnimatePresence>
        {pageView === 'auth' && (
          <AuthOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AuthCard
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <AuthCloseBtn onClick={handleAuthClose} aria-label="Close"><CloseIcon /></AuthCloseBtn>

              {!showEmailForm ? (
                <>
                  <AuthHeading>
                    <h1>
                      {isSignUp
                        ? 'Join Nortable to register for Nortable 2026 Hackathon'
                        : 'Log in to register for Nortable 2026 Hackathon'}
                    </h1>
                    <p>Plus find and participate in other great hackathons to improve your skills and win prizes</p>
                  </AuthHeading>

                  {isSignUp ? (
                    <AuthLoginLink>
                      Already have an account? <a onClick={() => { setIsSignUp(false); setAuthError(''); setAuthSuccess(''); }}>Log in</a>
                    </AuthLoginLink>
                  ) : (
                    <AuthLoginLink>
                      Don&apos;t have an account? <a onClick={() => { setIsSignUp(true); setAuthError(''); setAuthSuccess(''); }}>Sign up</a>
                    </AuthLoginLink>
                  )}

                  {authError && <AuthErrorText>{authError}</AuthErrorText>}

                  <AuthButtonsStack>
                    <AuthSocialButton $bg="#24292e" $hoverBg="#2f363d" onClick={() => handleOAuthSignIn('github')}>
                      <GitHubIcon />
                      {isSignUp ? 'Sign up with GitHub' : 'Log in with GitHub'}
                    </AuthSocialButton>
                    <AuthSocialButton $bg="#2563EB" $hoverBg="#1d4ed8" onClick={() => handleOAuthSignIn('google')}>
                      <GoogleIcon />
                      {isSignUp ? 'Sign up with Google' : 'Log in with Google'}
                    </AuthSocialButton>
                    <AuthSocialButton $bg="#1877F2" $hoverBg="#1565c0" onClick={() => handleOAuthSignIn('facebook')}>
                      <FacebookIcon />
                      {isSignUp ? 'Sign up with Facebook' : 'Log in with Facebook'}
                    </AuthSocialButton>
                    <AuthSocialButton $bg="#0A66C2" $hoverBg="#084e96" onClick={() => handleOAuthSignIn('linkedin')}>
                      <LinkedInIcon />
                      {isSignUp ? 'Sign up with LinkedIn' : 'Log in with LinkedIn'}
                    </AuthSocialButton>
                  </AuthButtonsStack>

                  <AuthEmailLink>
                    or{' '}
                    <a onClick={() => { setShowEmailForm(true); setAuthError(''); setAuthSuccess(''); }}>
                      {isSignUp ? 'sign up with email' : 'log in with email'}
                    </a>
                  </AuthEmailLink>

                  {isSignUp && (
                    <AuthCheckboxRow>
                      <input type="checkbox" checked={authNewsletter} onChange={(e) => setAuthNewsletter(e.target.checked)} />
                      <span>Subscribe me to Nortable&apos;s weekly newsletter (hackathons, community updates, and awesome projects)</span>
                    </AuthCheckboxRow>
                  )}

                  {isSignUp && (
                    <AuthTerms>
                      By creating an account, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </AuthTerms>
                  )}
                </>
              ) : (
                <>
                  <AuthHeading>
                    <h1>{isSignUp ? 'Create your Nortable Account' : 'Log in with Email'}</h1>
                    <p>Enter your details below to {isSignUp ? 'create an account' : 'log in to your account'}</p>
                  </AuthHeading>

                  {isSignUp ? (
                    <AuthLoginLink>
                      Already have an account? <a onClick={() => { setIsSignUp(false); setAuthError(''); setAuthSuccess(''); }}>Log in</a>
                    </AuthLoginLink>
                  ) : (
                    <AuthLoginLink>
                      Don&apos;t have an account? <a onClick={() => { setIsSignUp(true); setAuthError(''); setAuthSuccess(''); }}>Sign up</a>
                    </AuthLoginLink>
                  )}

                  <AuthForm onSubmit={isSignUp ? handleEmailSignUp : handleEmailLogIn}>
                    {authError && <AuthErrorText>{authError}</AuthErrorText>}
                    {authSuccess && <AuthSuccessText>{authSuccess}</AuthSuccessText>}

                    {isSignUp && (
                      <AuthFieldGroup>
                        <AuthLabel>Full Name</AuthLabel>
                        <AuthInput
                          type="text"
                          placeholder="Your full name"
                          value={authName}
                          onChange={(e) => setAuthName(e.target.value)}
                        />
                      </AuthFieldGroup>
                    )}

                    <AuthFieldGroup>
                      <AuthLabel>Email Address</AuthLabel>
                      <AuthInput
                        type="email"
                        placeholder="your@email.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                      />
                    </AuthFieldGroup>

                    <AuthFieldGroup>
                      <AuthLabel>Password</AuthLabel>
                      <AuthInput
                        type="password"
                        placeholder="••••••••"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                      />
                    </AuthFieldGroup>

                    <AuthSubmitBtn type="submit" disabled={authSubmitting}>
                      {authSubmitting && <AuthSpinner />}
                      {authSubmitting
                        ? 'Processing...'
                        : isSignUp
                        ? 'Create Account'
                        : 'Log In'}
                    </AuthSubmitBtn>
                  </AuthForm>

                  <AuthEmailLink>
                    or <a onClick={() => { setShowEmailForm(false); setAuthError(''); setAuthSuccess(''); }}>use social login</a>
                  </AuthEmailLink>
                </>
              )}
            </AuthCard>
          </AuthOverlay>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
