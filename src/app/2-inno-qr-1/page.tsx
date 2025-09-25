export const metadata = {
  title: "2. INNO QR 1",
  description: "Landing page for INNO QR 1",
};

export default function InnoQr1Page() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto w-full text-center bg-white rounded-lg shadow-sm sm:shadow p-0 overflow-hidden">
          <div className="mt-0 space-y-4 sm:space-y-6 text-left pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8">
            {/* ภาพที่ 1 */}
            <figure>
              <img
                src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758787396/02_INNO_MICROSITE-01_yep9a4.jpg"
                alt="INNO Microsite Part 1"
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
            </figure>
            {/* ภาพที่ 2 */}
            <figure>
              <img
                src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758787393/02_INNO_MICROSITE-02_kadiyo.jpg"
                alt="INNO Microsite Part 2"
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
