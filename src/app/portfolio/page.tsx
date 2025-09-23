import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "ระบบจัดการคลังสินค้า",
      description: "ระบบจัดการคลังสินค้าแบบครบวงจร สำหรับบริษัทขนาดกลาง",
      technology: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Application",
      status: "เสร็จสิ้น",
      color: "bg-blue-500"
    },
    {
      title: "แอปพลิเคชันขายของออนไลน์",
      description: "แอปมือถือสำหรับการขายสินค้าออนไลน์ พร้อมระบบชำระเงิน",
      technology: ["React Native", "Firebase", "Stripe API"],
      category: "Mobile Application",
      status: "เสร็จสิ้น",
      color: "bg-green-500"
    },
    {
      title: "ระบบบริหารจัดการโรงเรียน",
      description: "ระบบจัดการข้อมูลนักเรียน ครู และการเรียนการสอน",
      technology: ["Vue.js", "Laravel", "MySQL", "Docker"],
      category: "Web Application",
      status: "กำลังพัฒนา",
      color: "bg-purple-500"
    },
    {
      title: "ระบบ CRM สำหรับธุรกิจ",
      description: "ระบบบริหารความสัมพันธ์ลูกค้า พร้อมระบบรายงาน",
      technology: ["Angular", "Spring Boot", "PostgreSQL"],
      category: "Enterprise System",
      status: "เสร็จสิ้น",
      color: "bg-orange-500"
    },
    {
      title: "แพลตฟอร์มการเรียนออนไลน์",
      description: "ระบบการเรียนการสอนออนไลน์ พร้อมระบบสอบและประเมินผล",
      technology: ["Next.js", "Prisma", "Supabase", "Tailwind"],
      category: "E-Learning Platform",
      status: "กำลังพัฒนา",
      color: "bg-indigo-500"
    },
    {
      title: "ระบบจองห้องประชุม",
      description: "ระบบจองห้องประชุมออนไลน์ พร้อมปฏิทินและการแจ้งเตือน",
      technology: ["React", "Django", "Redis", "Celery"],
      category: "Booking System",
      status: "เสร็จสิ้น",
      color: "bg-red-500"
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ผลงานของเรา</h1>
          <p className="text-xl text-gray-600">โครงการที่เราได้พัฒนาและส่งมอบให้กับลูกค้า</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className={`${project.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'เสร็จสิ้น' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800 text-sm">เทคโนโลยีที่ใช้:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">สถิติผลงาน</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">โครงการที่เสร็จสิ้น</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600">ลูกค้าที่พึงพอใจ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">ปีประสบการณ์</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">การสนับสนุน</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            สนใจให้เราพัฒนาโครงการให้คุณ?
          </h2>
          <p className="text-gray-600 mb-6">
            ติดต่อเราเพื่อปรึกษาและวางแผนโครงการของคุณ
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            เริ่มโครงการใหม่
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
