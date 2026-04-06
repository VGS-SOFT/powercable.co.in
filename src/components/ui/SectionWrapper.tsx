import { cn } from '@/lib/utils';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  withGrid?: boolean;
};

export default function SectionWrapper({
  children,
  className,
  id,
  withGrid = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full py-16 lg:py-24',
        withGrid && 'grid-bg',
        className
      )}
    >
      <div className="container-custom relative z-10">{children}</div>
    </section>
  );
}
