'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts';
import { UserCheck, IndianRupee, CalendarPlus, Users, Search, UserPlus } from 'lucide-react';
import {
  StatRow,
  StatCard,
  ChartGrid,
  ChartCard,
  FilterBtn,
  Section,
  SectionHead,
  Empty,
} from './styles';
import type { Stats, TrackDatum, DailyDatum } from './AdminBoard';

const fmtINR = (n: number) => '₹' + Number(n || 0).toLocaleString('en-IN');

const shortTrack = (t: string) => (t.length > 16 ? t.slice(0, 15) + '…' : t);
const fmtDay = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export default function StatsView({
  stats,
  trackBreakdown,
  daily,
}: {
  stats: Stats;
  trackBreakdown: TrackDatum[];
  daily: DailyDatum[];
}) {
  return (
    <>
      <StatRow>
        <StatCard>
          <div className="v">{stats.total.toLocaleString('en-IN')}</div>
          <div className="k">
            <UserCheck size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
            Registrations
          </div>
        </StatCard>
        <StatCard>
          <div className="v">{fmtINR(stats.revenue)}</div>
          <div className="k">
            <IndianRupee size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
            Revenue
          </div>
        </StatCard>
        <StatCard>
          <div className="v">{stats.today.toLocaleString('en-IN')}</div>
          <div className="k">
            <CalendarPlus size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
            Today
          </div>
        </StatCard>
        <StatCard>
          <div className="v">{stats.have_team.toLocaleString('en-IN')}</div>
          <div className="k">
            <Users size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
            With a Team
          </div>
        </StatCard>
        <StatCard>
          <div className="v">{stats.solo.toLocaleString('en-IN')}</div>
          <div className="k">
            <UserPlus size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
            Solo
          </div>
        </StatCard>
        <StatCard>
          <div className="v">{stats.looking.toLocaleString('en-IN')}</div>
          <div className="k">
            <Search size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
            Looking for Team
          </div>
        </StatCard>
      </StatRow>

      <div style={{ marginBottom: '1.5rem' }}>
        <FilterBtn as="a" href="/api/admin/export?type=registrations" $variant="ghost">
          Export all registrations (CSV)
        </FilterBtn>
      </div>

      <ChartGrid>
        <ChartCard>
          <h3>Registrations — last 30 days</h3>
          <div className="chart">
            {daily.length === 0 ? (
              <Empty>No data yet.</Empty>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={daily} margin={{ top: 5, right: 10, left: -18, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis
                    dataKey="day"
                    tickFormatter={fmtDay}
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <Tooltip
                    contentStyle={{
                      background: '#0c0f13',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10,
                      color: '#fff',
                      fontSize: 12,
                    }}
                    labelFormatter={(l) => fmtDay(l as string)}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#48d64c"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </ChartCard>

        <ChartCard>
          <h3>By track</h3>
          <div className="chart">
            {trackBreakdown.length === 0 ? (
              <Empty>No data yet.</Empty>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={trackBreakdown.map((t) => ({ ...t, label: shortTrack(t.track) }))}
                  margin={{ top: 5, right: 10, left: -18, bottom: 0 }}
                >
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                    stroke="rgba(255,255,255,0.1)"
                    interval={0}
                    angle={-12}
                    textAnchor="end"
                    height={50}
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                    contentStyle={{
                      background: '#0c0f13',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10,
                      color: '#fff',
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="count" fill="#48d64c" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </ChartCard>
      </ChartGrid>
    </>
  );
}
