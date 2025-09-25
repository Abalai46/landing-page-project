import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="relative w-full mx-auto overflow-hidden" style={{ height: 'var(--footer-h)' }}>
        <Image
          src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758773798/footer-1_k0ngk0.png"
          alt="FTI Footer"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>
    </footer>
  );
}
