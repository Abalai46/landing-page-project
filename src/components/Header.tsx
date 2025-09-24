import Image from 'next/image';

export default function Header() {
  return (
    <header className="md:sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full">
        <Image
          src="/header-1.png"
          alt="FTI Header"
          width={1024}
          height={200}
          className="h-auto w-auto max-w-full mx-auto object-contain"
          priority
        />
      </div>
    </header>
  );
}
