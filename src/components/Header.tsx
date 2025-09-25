import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="relative w-full mx-auto overflow-hidden" style={{ height: 'var(--header-h)' }}>
        <Image
          src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758788520/header-2_ymnsqq.png"
          alt="FTI Header"
          fill
          sizes="100vw"
          unoptimized
          className="object-contain"
          priority
        />
      </div>
    </header>
  );
}
