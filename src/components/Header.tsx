import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
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
