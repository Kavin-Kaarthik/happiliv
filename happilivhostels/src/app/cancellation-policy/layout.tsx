import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation Policy - HappiLiv Hostels',
  description: 'Review HappiLiv\'s cancellation policy to understand our flexible booking terms and refund conditions.',
};

export default function CancellationPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
