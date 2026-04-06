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
    <div className="min-h-screen bg-dark-400">

      {/* Top Bar */}
      <header className="bg-dark-100 border-b border-copper-900/50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-copper-gradient flex items-center justify-center">
            <span className="text-white font-bold text-xs">PC</span>
          </div>
          <div>
            <span className="font-display font-bold text-white text-base">Power Cable</span>
            <span className="text-copper-500 text-xs ml-2">Admin</span>
          </div>
        </div>
        <form action={logoutAction}>
          <button type="submit" className="text-sm text-white/40 hover:text-copper-400 transition-colors">
            Sign Out
          </button>
        </form>
      </header>

      <main className="container-custom py-8">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Leads', value: totalLeads, color: 'text-copper-400' },
            { label: 'Unread',      value: unreadCount, color: 'text-yellow-400' },
            { label: 'Today',       value: todayCount,  color: 'text-green-400' },
          ].map((s) => (
            <div key={s.label} className="bg-dark-100 border border-copper-900/40 rounded-xl p-5">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`font-display text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-dark-100 border border-copper-900/40 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-copper-900/40 flex items-center justify-between">
            <h2 className="font-display font-semibold text-white text-lg">Contact Form Leads</h2>
            <span className="text-white/30 text-sm">{totalLeads} total</span>
          </div>

          {allLeads.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-4xl mb-3">📭</p>
              <p className="text-white/40">No leads yet. They\u2019ll appear here once someone submits the contact form.</p>
            </div>
          ) : (
            <div className="divide-y divide-copper-900/30">
              {allLeads.map((lead) => (
                <div
                  key={lead.id}
                  className={`px-6 py-5 flex flex-col sm:flex-row sm:items-start gap-4 transition-colors ${
                    lead.is_read ? 'opacity-60' : 'bg-copper-900/5'
                  }`}
                >
                  {/* Unread dot */}
                  <div className="flex-shrink-0 pt-1">
                    {!lead.is_read && (
                      <span className="block w-2 h-2 rounded-full bg-copper-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <span className="font-semibold text-white">{lead.name}</span>
                      <a href={`mailto:${lead.email}`} className="text-copper-400 text-sm hover:underline">{lead.email}</a>
                      <a href={`tel:${lead.phone}`} className="text-white/50 text-sm hover:text-copper-400 transition-colors">{lead.phone}</a>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{lead.message}</p>
                    <p className="text-white/25 text-xs mt-2">{formatDate(lead.created_at)}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {!lead.is_read && (
                      <form action={markLeadReadAction.bind(null, lead.id)}>
                        <button
                          type="submit"
                          className="px-3 py-1.5 text-xs border border-copper-700 text-copper-400 rounded-lg hover:bg-copper-900/30 transition-colors"
                        >
                          Mark Read
                        </button>
                      </form>
                    )}
                    <form action={deleteLeadAction.bind(null, lead.id)}>
                      <button
                        type="submit"
                        className="px-3 py-1.5 text-xs border border-red-800/50 text-red-400 rounded-lg hover:bg-red-900/20 transition-colors"
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
