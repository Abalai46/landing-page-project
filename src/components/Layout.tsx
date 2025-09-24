import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-4 pb-6 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
