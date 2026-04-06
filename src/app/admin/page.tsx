'use client';
import { useActionState } from 'react';
import { loginAction } from './actions';

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, { error: '' });

  return (
    <div className="grid-bg min-h-screen flex items-center justify-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 w-full max-w-sm mx-auto px-6">

        {/* Logo */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full mb-4">
            Admin Panel
          </span>
          <h1 className="font-display text-2xl font-bold text-white">Power Cable</h1>
          <p className="text-white/40 text-sm mt-1">Sign in to access your dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-dark-100 border border-copper-900/50 rounded-2xl p-8 shadow-card">
          <form action={formAction} className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-white/70">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-dark-200 border border-copper-900/50 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-copper-500 transition-colors"
              />
            </div>

            {state.error && (
              <p className="text-sm text-red-400 bg-red-900/20 border border-red-800/40 rounded-lg px-4 py-2">
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full py-3 bg-copper-500 hover:bg-copper-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-copper"
            >
              {pending ? 'Signing in\u2026' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          powercable.co.in &mdash; Admin Dashboard
        </p>
      </div>
    </div>
  );
}
