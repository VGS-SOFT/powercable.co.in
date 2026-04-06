import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Power Cable',
  description: 'Premium Copper Products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
