import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="relative w-full mx-auto overflow-hidden" style={{ height: 'var(--footer-h)' }}>
        <Image
          src="/footer-1.png"
          alt="FTI Footer"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </footer>
  );
}
