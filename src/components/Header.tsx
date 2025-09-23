import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full">
        <Image
          src="/header-1.png"
          alt="FTI Header"
          width={1024}
          height={200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </header>
  );
}
