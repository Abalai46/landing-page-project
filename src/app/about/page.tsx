import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl text-gray-600">FTI Technology Services</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">วิสัยทัศน์</h2>
            <p className="text-gray-600 leading-relaxed">
              เป็นผู้นำด้านการให้บริการเทคโนโลยีสารสนเทศที่มีคุณภาพ และเป็นที่ไว้วางใจของลูกค้า 
              ด้วยการนำเสนอโซลูชันที่ทันสมัยและตอบสนองความต้องการของธุรกิจในยุคดิจิทัล
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">พันธกิจ</h2>
            <ul className="text-gray-600 leading-relaxed space-y-2">
              <li>• พัฒนาและให้บริการเทคโนโลยีที่มีคุณภาพสูง</li>
              <li>• สร้างความพึงพอใจสูงสุดให้กับลูกค้า</li>
              <li>• พัฒนาบุคลากรให้มีความเชี่ยวชาญด้านเทคโนโลยี</li>
              <li>• สนับสนุนการเติบโตของธุรกิจด้วยนวัตกรรม</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">ค่านิยมองค์กร</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">คุณภาพ</h3>
                <p className="text-sm text-gray-600">มุ่งมั่นในการส่งมอบงานที่มีคุณภาพสูงสุด</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">นวัตกรรม</h3>
                <p className="text-sm text-gray-600">พัฒนาเทคโนโลยีใหม่ๆ อย่างต่อเนื่อง</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">ความไว้วางใจ</h3>
                <p className="text-sm text-gray-600">สร้างความเชื่อมั่นกับลูกค้าและพันธมิตร</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">บริการ</h3>
                <p className="text-sm text-gray-600">ให้บริการที่เป็นเลิศและตอบสนองความต้องการ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
