import BlogSection from './component/BlogSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HappiLiv Blog - Hostel Life & Travel Tips',
  description: 'Explore our blog for insights on hostel life, travel tips, and stories from our community. Get the latest updates and guides.',
};

export default function BlogPage() {
  return <div><BlogSection /></div>;
}