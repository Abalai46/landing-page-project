import Link from "next/link";

export default function Careers() {
  const jobPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Development",
      location: "กรุงเทพมหานคร",
      type: "Full-time",
      experience: "3-5 ปี",
      salary: "50,000 - 80,000 บาท",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      color: "bg-blue-500"
    },
    {
      title: "Mobile App Developer",
      department: "Development",
      location: "กรุงเทพมหานคร / Remote",
      type: "Full-time",
      experience: "2-4 ปี",
      salary: "40,000 - 65,000 บาท",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      color: "bg-green-500"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "กรุงเทพมหานคร",
      type: "Full-time",
      experience: "3-6 ปี",
      salary: "55,000 - 85,000 บาท",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
      color: "bg-purple-500"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "กรุงเทพมหานคร / Hybrid",
      type: "Full-time",
      experience: "2-4 ปี",
      salary: "35,000 - 55,000 บาท",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      color: "bg-pink-500"
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "กรุงเทพมหานคร",
      type: "Full-time",
      experience: "4-7 ปี",
      salary: "60,000 - 90,000 บาท",
      skills: ["Agile", "Scrum", "JIRA", "Leadership", "Communication"],
      color: "bg-orange-500"
    },
    {
      title: "Junior Developer (Internship)",
      department: "Development",
      location: "กรุงเทพมหานคร",
      type: "Internship",
      experience: "0-1 ปี",
      salary: "15,000 - 25,000 บาท",
      skills: ["HTML", "CSS", "JavaScript", "Git", "Learning Mindset"],
      color: "bg-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "เงินเดือนที่แข่งขันได้",
      description: "เงินเดือนที่เหมาะสมกับประสบการณ์และความสามารถ"
    },
    {
      icon: "🏥",
      title: "ประกันสุขภาพ",
      description: "ประกันสุขภาพครอบคลุมและประกันชีวิต"
    },
    {
      icon: "📚",
      title: "การพัฒนาทักษะ",
      description: "งบประมาณสำหรับการเรียนรู้และพัฒนาทักษะใหม่ๆ"
    },
    {
      icon: "🏠",
      title: "Work from Home",
      description: "ความยืดหยุ่นในการทำงานจากที่บ้าน"
    },
    {
      icon: "🎯",
      title: "โบนัสผลงาน",
      description: "โบนัสตามผลงานและความสำเร็จของโครงการ"
    },
    {
      icon: "🌟",
      title: "สภาพแวดล้อมที่ดี",
      description: "ทีมงานที่เป็นมิตรและสภาพแวดล้อมการทำงานที่ดี"
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ร่วมงานกับเรา</h1>
          <p className="text-xl text-gray-600">เป็นส่วนหนึ่งของทีมที่สร้างสรรค์เทคโนโลยีเพื่ออนาคต</p>
        </div>

        {/* Company Culture */}
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">วัฒนธรรมองค์กร</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              เราเชื่อในการทำงานเป็นทีม การเรียนรู้อย่างต่อเนื่อง และการสร้างสรรค์นวัตกรรมที่มีคุณค่า 
              ที่นี่คุณจะได้พัฒนาตัวเองและเติบโตไปพร้อมกับเรา
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">สวัสดิการและผลประโยชน์</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">ตำแหน่งงานที่เปิดรับ</h2>
          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className={`${job.color} h-1`}></div>
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 mr-4">{job.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.type === 'Full-time' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.experience}
                        </span>
                        <span className="flex items-center font-medium text-green-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {job.salary}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        สมัครงาน
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">ขั้นตอนการสมัครงาน</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">ส่งใบสมัคร</h3>
              <p className="text-sm text-gray-600">ส่ง Resume และ Portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">คัดเลือกเอกสาร</h3>
              <p className="text-sm text-gray-600">ตรวจสอบคุณสมบัติ</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">สัมภาษณ์</h3>
              <p className="text-sm text-gray-600">สัมภาษณ์และทดสอบทักษะ</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">เริ่มงาน</h3>
              <p className="text-sm text-gray-600">ยินดีต้อนรับสู่ทีม!</p>
            </div>
          </div>
        </div>

        {/* Contact HR */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            มีคำถามเกี่ยวกับการสมัครงาน?
          </h2>
          <p className="text-gray-600 mb-6">
            ติดต่อทีม HR ของเราเพื่อสอบถามข้อมูลเพิ่มเติม
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ติดต่อ HR
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a 
              href="mailto:hr@fti-tech.com"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              hr@fti-tech.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
