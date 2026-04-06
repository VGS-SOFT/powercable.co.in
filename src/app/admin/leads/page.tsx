import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerClient, type Lead } from '@/lib/supabase';
import { logoutAction, markLeadReadAction, deleteLeadAction } from '../actions';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
}

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
}

// Deterministic avatar colour from name
const AVATAR_COLORS = [
  'bg-violet-500', 'bg-blue-500', 'bg-emerald-500',
  'bg-orange-500', 'bg-pink-500', 'bg-teal-500',
];
function avatarColor(name: string) {
  let hash = 0;
  for (const c of name) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff;
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

export default async function LeadsDashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get('pc_admin_session');
  if (!session || session.value !== 'authenticated') redirect('/admin');

  const db = createServerClient();
  const { data: leads, error } = await db
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) console.error('Error fetching leads:', error);

  const allLeads: Lead[] = leads ?? [];
  const totalLeads  = allLeads.length;
  const unreadCount = allLeads.filter((l) => !l.is_read).length;
  const todayCount  = allLeads.filter((l) => {
    const d = new Date(l.created_at);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  }).length;

  return (
    <div className="min-h-screen" style={{ background: '#f5f5f7', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Top Nav */}
      <header style={{ background: '#ffffff', borderBottom: '1px solid #e8e8ed' }} className="px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          {/* Logo mark */}
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#b45309,#d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '-0.5px' }}>PC</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: 15, color: '#111' }}>Power Cable</span>
            <span style={{ fontSize: 12, color: '#999', marginLeft: 6 }}>Admin Panel</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span style={{ fontSize: 13, color: '#888' }}>Leads Dashboard</span>
          <form action={logoutAction}>
            <button
              type="submit"
              style={{ fontSize: 13, color: '#ef4444', background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 8, padding: '5px 14px', cursor: 'pointer' }}
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>

        {/* Page Title */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111', margin: 0 }}>Contact Form Leads</h1>
          <p style={{ fontSize: 14, color: '#888', marginTop: 4 }}>All enquiries submitted via the website contact form.</p>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Total Leads', value: totalLeads,  icon: '\ud83d\udce5', accent: '#6366f1' },
            { label: 'Unread',      value: unreadCount, icon: '\ud83d\udce8', accent: '#f59e0b' },
            { label: 'Today',       value: todayCount,  icon: '\ud83d\udcc5', accent: '#10b981' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: '#ffffff',
                border: '1px solid #e8e8ed',
                borderRadius: 16,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                {s.icon}
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#999', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
                <p style={{ fontSize: 28, fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.2 }}>{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leads Table Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e8e8ed', borderRadius: 20, overflow: 'hidden' }}>

          {/* Table Header */}
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: '#111' }}>Submissions</span>
            <span style={{
              background: '#f5f5f7', border: '1px solid #e8e8ed',
              borderRadius: 99, padding: '3px 12px',
              fontSize: 12, color: '#888',
            }}>{totalLeads} total</span>
          </div>

          {allLeads.length === 0 ? (
            <div style={{ padding: '80px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>\ud83d\udcec</div>
              <p style={{ fontSize: 15, color: '#999', margin: 0 }}>No leads yet.</p>
              <p style={{ fontSize: 13, color: '#bbb', marginTop: 4 }}>They\u2019ll appear here when someone submits the contact form.</p>
            </div>
          ) : (
            <div>
              {/* Column Headers */}
              <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 1fr 160px', gap: 12, padding: '10px 24px', borderBottom: '1px solid #f0f0f5', background: '#fafafa' }}>
                {['', 'Contact', 'Phone', 'Message', 'Actions'].map((h) => (
                  <span key={h} style={{ fontSize: 11, fontWeight: 600, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</span>
                ))}
              </div>

              {allLeads.map((lead, i) => (
                <div
                  key={lead.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr 1fr 1fr 160px',
                    gap: 12,
                    padding: '14px 24px',
                    alignItems: 'center',
                    borderBottom: i < allLeads.length - 1 ? '1px solid #f5f5f7' : 'none',
                    background: lead.is_read ? '#ffffff' : '#fafbff',
                    transition: 'background 0.2s',
                  }}
                >
                  {/* Avatar */}
                  <div>
                    <div
                      className={avatarColor(lead.name)}
                      style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff' }}
                    >
                      {getInitials(lead.name)}
                    </div>
                  </div>

                  {/* Contact */}
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {!lead.is_read && (
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1', display: 'inline-block', flexShrink: 0 }} />
                      )}
                      <span style={{ fontWeight: 600, fontSize: 14, color: '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lead.name}</span>
                    </div>
                    <a
                      href={`mailto:${lead.email}`}
                      style={{ fontSize: 12, color: '#6366f1', textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {lead.email}
                    </a>
                    <span style={{ fontSize: 11, color: '#bbb' }}>{formatDate(lead.created_at)}</span>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${lead.phone}`}
                    style={{ fontSize: 13, color: '#444', textDecoration: 'none', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {lead.phone}
                  </a>

                  {/* Message */}
                  <p
                    style={{ fontSize: 13, color: '#666', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}
                  >
                    {lead.message}
                  </p>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {!lead.is_read && (
                      <form action={markLeadReadAction.bind(null, lead.id)}>
                        <button
                          type="submit"
                          style={{
                            fontSize: 12, padding: '5px 12px',
                            borderRadius: 8, border: '1px solid #d1d5db',
                            background: '#f9fafb', color: '#374151',
                            cursor: 'pointer', fontWeight: 500,
                          }}
                        >
                          Mark read
                        </button>
                      </form>
                    )}
                    <form action={deleteLeadAction.bind(null, lead.id)}>
                      <button
                        type="submit"
                        style={{
                          fontSize: 12, padding: '5px 12px',
                          borderRadius: 8, border: '1px solid #fecaca',
                          background: '#fff5f5', color: '#ef4444',
                          cursor: 'pointer', fontWeight: 500,
                        }}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
