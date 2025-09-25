export const metadata = {
  title: "9. WEIS QR 2",
  description: "Landing page for 9. WEIS QR 2",
};

export default function WeisQr2NinePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto w-full text-center bg-white rounded-lg shadow-sm sm:shadow p-0 overflow-hidden">
          <div className="mt-0 text-left pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8">
            <figure>
              <img
                src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758789392/09_WEIS_MICROSITE-02_lovldp.jpg"
                alt="WEIS Microsite (QR 2)"
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
