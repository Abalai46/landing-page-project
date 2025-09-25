export const metadata = {
  title: "10. CISPI, WEIS QR 2",
  description: "Landing page for 10. CISPI, WEIS QR 2",
};

export default function CispiWeisQr2Page() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto w-full text-center bg-white rounded-lg shadow-sm sm:shadow p-0 overflow-hidden">
          <div className="mt-0 text-left pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 space-y-4 sm:space-y-6">
            <figure>
              <img
                src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758789973/10_MICROSITE_CISPI_dqdnmi.jpg"
                alt="CISPI Microsite (QR 2)"
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/dlnhxcn9m/image/upload/v1758789973/10_MICROSITE_WEIS_eav4qw.jpg"
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
