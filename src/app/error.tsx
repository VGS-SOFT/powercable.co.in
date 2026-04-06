'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid-bg min-h-screen flex items-center justify-center">
      <div className="container-custom text-center py-20">
        <div className="text-5xl mb-6">⚠️</div>
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Something Went Wrong
        </h2>
        <p className="text-white/50 max-w-md mx-auto mb-8">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="px-8 py-4 bg-copper-500 hover:bg-copper-400 text-white font-semibold rounded-full transition-all duration-300 shadow-copper hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-copper-600 text-copper-400 font-semibold rounded-full hover:bg-copper-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
