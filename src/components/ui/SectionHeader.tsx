import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {label && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}{' '}
        {highlight && (
          <span className="text-copper-gradient">{highlight}</span>
        )}
      </h2>
      <div className={cn('copper-divider mb-4', centered && 'mx-auto')} />
      {description && (
        <p className="text-copper-200/70 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
