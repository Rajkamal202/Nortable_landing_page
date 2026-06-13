/**
 * Single source of truth for the hackathon's dates, limits, and schedule.
 * Update these values to change every place they appear across the app
 * (dashboard countdown, schedule, submission deadline gate, etc.).
 */

// Hacking begins
export const KICKOFF = new Date('2026-07-18T10:00:00');
// Submissions lock at this moment
export const DEADLINE = new Date('2026-07-20T14:00:00');
// Winners announced
export const AWARDS = new Date('2026-07-20T17:00:00');

// Max members allowed per team (including the team lead)
export const MAX_TEAM_SIZE = 4;

// Human-readable build window, shown in the Overview stat strip
export const BUILD_WINDOW_HOURS = 52;

export interface ScheduleEntry {
  /** lucide-react icon name, resolved by the consuming component */
  icon: 'Calendar' | 'Code2' | 'Flag' | 'Trophy';
  date: string;
  title: string;
  note: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  { icon: 'Calendar', date: 'Jul 18, 10:00 AM', title: 'Opening Ceremony & Kickoff', note: 'Hacking begins' },
  { icon: 'Code2', date: 'Jul 18 – 20', title: 'Build Window', note: `${BUILD_WINDOW_HOURS} hours to ship` },
  { icon: 'Flag', date: 'Jul 20, 02:00 PM', title: 'Submission Deadline', note: 'Repo + live link due' },
  { icon: 'Trophy', date: 'Jul 20, 05:00 PM', title: 'Judging & Awards', note: 'Winners announced' },
];
