import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full">
        <Image
          src="/footer-1.png"
          alt="FTI Footer"
          width={1024}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </footer>
  );
}
