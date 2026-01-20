import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | KIM MEX Construction',
  description: 'Explore our comprehensive construction and engineering services in Cambodia, including Design & Build, Renovation, and Project Management.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
