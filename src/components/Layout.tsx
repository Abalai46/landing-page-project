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
        style={{
          paddingTop: 'calc(var(--header-h) + var(--content-gap, 12px))',
          paddingBottom: 'calc(var(--footer-h) + var(--content-gap, 12px))',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
