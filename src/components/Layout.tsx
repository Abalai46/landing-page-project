import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main
        className="flex-1"
        style={{ paddingTop: 0, paddingBottom: 'var(--footer-h)' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
