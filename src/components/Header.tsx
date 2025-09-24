import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="relative w-full mx-auto overflow-hidden" style={{ height: 'var(--header-h)' }}>
        <Image
          src="/header-1.png"
          alt="FTI Header"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </header>
  );
}
