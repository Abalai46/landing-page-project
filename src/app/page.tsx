import Link from "next/link";
import fs from "fs";
import path from "path";

// Ensure this page runs on the Node.js runtime (not Edge) so that 'fs' is available
export const runtime = 'nodejs';

export default async function Home() {
  // Auto-discover QR pages from src/app
  const appDir = path.join(process.cwd(), "src", "app");
  const dirents = fs.readdirSync(appDir, { withFileTypes: true });
  const qrDirRegex = /^\d+-.+-qr-\d+$/i;
  const palette = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-orange-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-amber-600",
    "bg-cyan-600",
    "bg-indigo-600",
    "bg-red-600",
    "bg-emerald-600",
    "bg-fuchsia-600",
  ];

  const qrLinks = dirents
    .filter((d) => d.isDirectory() && qrDirRegex.test(d.name))
    .filter((d) => fs.existsSync(path.join(appDir, d.name, "page.tsx")))
    .map((d) => d.name)
    .map((dirname) => {
      const parts = dirname.split("-");
      const num = parts[0];
      const qrIndex = parts.findIndex((p) => p.toLowerCase() === "qr");
      const pageNo = qrIndex >= 0 && parts[qrIndex + 1] ? parts[qrIndex + 1] : "1";
      const nameTokens = qrIndex > 0 ? parts.slice(1, qrIndex) : parts.slice(1);
      const names = nameTokens.map((n) => n.toUpperCase()).join(", ");
      const title = `${num}. ${names} QR ${pageNo}`.trim();
      // Simple color selection based on hash
      const idx = Math.abs(
        [...dirname].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
      ) % palette.length;
      return { title, href: `/${dirname}`, color: palette[idx] };
    })
    .sort((a, b) => {
      const an = parseInt(a.title.split(".")[0] || "0", 10);
      const bn = parseInt(b.title.split(".")[0] || "0", 10);
      if (an !== bn) return an - bn;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="container mx-auto pt-1 sm:pt-2 pb-1.5 sm:pb-2 px-2 sm:px-4">
      

      {/* QR Links Section */}
      <section className="mt-2 sm:mt-3 mb-2 sm:mb-4">
        <div className="grid grid-cols-1 gap-1.5 sm:gap-2.5 max-w-md mx-auto">
          {qrLinks.map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="bg-white rounded-md sm:rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-2.5 sm:p-3.5 border border-gray-200 hover:border-gray-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 ${item.color} rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] sm:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      
    </div>
  );
}
