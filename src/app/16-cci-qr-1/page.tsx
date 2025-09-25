export const metadata = {
  title: "16. CCI QR 1",
  description: "Landing page for 16. CCI QR 1",
};

export default function CciQr1Page() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto w-full text-center bg-white rounded-lg shadow-sm sm:shadow p-0 overflow-hidden">
          <div className="mt-0 text-left pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8">
            <figure>
              <img
                src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758801641/16_CCI_MICROSITE-01_voo1m9.jpg"
                alt="CCI Microsite (16 QR 1)"
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
