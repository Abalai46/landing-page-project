import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-2 md:pt-3 lg:pt-4 pb-24 md:pb-28 lg:pb-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
