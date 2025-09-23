import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      title: "เปิดตัวบริการ Cloud Migration ใหม่",
      summary: "FTI Technology Services เปิดตัวบริการย้ายระบบไปยัง Cloud ที่ครอบคลุมและปลอดภัย",
      date: "15 มีนาคม 2024",
      category: "บริการใหม่",
      readTime: "3 นาที",
      color: "bg-blue-500"
    },
    {
      title: "ความสำเร็จในการพัฒนาระบบ ERP สำหรับบริษัทชั้นนำ",
      summary: "เราได้ส่งมอบระบบ ERP ที่ช่วยเพิ่มประสิทธิภาพการทำงานให้กับลูกค้าได้มากกว่า 40%",
      date: "8 มีนาคม 2024",
      category: "ความสำเร็จ",
      readTime: "5 นาที",
      color: "bg-green-500"
    },
    {
      title: "การอัพเดทความปลอดภัยสำหรับระบบทั้งหมด",
      summary: "เราได้ปรับปรุงมาตรฐานความปลอดภัยให้สอดคล้องกับมาตรฐานสากล ISO 27001",
      date: "1 มีนาคม 2024",
      category: "ความปลอดภัย",
      readTime: "4 นาที",
      color: "bg-red-500"
    },
    {
      title: "เทคโนโลยี AI และ Machine Learning ในปี 2024",
      summary: "แนวโน้มการใช้งาน AI และ ML ที่จะเปลี่ยนแปลงวงการเทคโนโลยีในปีนี้",
      date: "22 กุมภาพันธ์ 2024",
      category: "เทคโนโลยี",
      readTime: "6 นาที",
      color: "bg-purple-500"
    },
    {
      title: "การเปิดสำนักงานใหม่ในภูมิภาคตะวันออก",
      summary: "เราขยายการให้บริการไปยังภาคตะวันออกเพื่อให้บริการลูกค้าได้ใกล้ชิดมากขึ้น",
      date: "14 กุมภาพันธ์ 2024",
      category: "ข่าวบริษัท",
      readTime: "2 นาที",
      color: "bg-orange-500"
    },
    {
      title: "การฝึกอบรมทีมงานด้านเทคโนโลยีใหม่",
      summary: "ทีมงานของเราได้รับการฝึกอบรมเทคโนโลยีล่าสุดเพื่อให้บริการที่ดีที่สุด",
      date: "7 กุมภาพันธ์ 2024",
      category: "การพัฒนา",
      readTime: "3 นาที",
      color: "bg-indigo-500"
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ข่าวสารและอัพเดท</h1>
          <p className="text-xl text-gray-600">ติดตามข่าวสารและความเคลื่อนไหวล่าสุดจากเรา</p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mr-4">
                ข่าวเด่น
              </span>
              <span className="text-sm opacity-90">{newsItems[0].date}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{newsItems[0].title}</h2>
            <p className="text-lg opacity-90 mb-6">{newsItems[0].summary}</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              อ่านเพิ่มเติม
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((news, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className={`${news.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {news.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{news.date}</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                    อ่านเพิ่มเติม →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            รับข่าวสารล่าสุด
          </h2>
          <p className="text-gray-600 mb-6">
            สมัครรับข่าวสารและอัพเดทล่าสุดจากเราทางอีเมล
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              สมัคร
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">หมวดหมู่ข่าวสาร</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['บริการใหม่', 'ความสำเร็จ', 'เทคโนโลยี', 'ข่าวบริษัท', 'การพัฒนา', 'ความปลอดภัย'].map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
