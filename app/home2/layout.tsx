import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="home2-style">
      {children}
    </div>
  );
}
