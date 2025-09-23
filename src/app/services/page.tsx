import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "พัฒนาซอฟต์แวร์",
      description: "พัฒนาแอปพลิเคชันและระบบต่างๆ ตามความต้องการของลูกค้า",
      features: ["Web Application", "Mobile Application", "Desktop Application", "API Development"],
      color: "bg-blue-500"
    },
    {
      title: "ระบบฐานข้อมูล",
      description: "ออกแบบและจัดการระบบฐานข้อมูลที่มีประสิทธิภาพ",
      features: ["Database Design", "Data Migration", "Performance Optimization", "Backup & Recovery"],
      color: "bg-green-500"
    },
    {
      title: "Cloud Services",
      description: "บริการด้าน Cloud Computing และการจัดการโครงสร้างพื้นฐาน",
      features: ["Cloud Migration", "Infrastructure Management", "DevOps", "Security"],
      color: "bg-purple-500"
    },
    {
      title: "ปรึกษาด้าน IT",
      description: "ให้คำปรึกษาด้านเทคโนโลジีและการวางแผนระบบ",
      features: ["IT Strategy", "System Analysis", "Technology Consulting", "Digital Transformation"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          กลับสู่หน้าหลัก
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">บริการของเรา</h1>
          <p className="text-xl text-gray-600">โซลูชันด้านเทคโนโลยีที่ครอบคลุมและมีคุณภาพ</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className={`${service.color} h-2`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">ความเชี่ยวชาญ:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            สนใจบริการของเรา?
          </h2>
          <p className="text-gray-600 mb-6">
            ติดต่อเราเพื่อปรึกษาและขอใบเสนอราคา
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ติดต่อเรา
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
