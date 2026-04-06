'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2 focus:ring-offset-dark-400 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-copper-500 text-white hover:bg-copper-400 shadow-copper hover:shadow-copper-lg hover:-translate-y-0.5',
    outline:
      'border-2 border-copper-500 text-copper-400 hover:bg-copper-500 hover:text-white hover:-translate-y-0.5',
    ghost:
      'text-copper-400 hover:text-copper-300 hover:bg-copper-900/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
