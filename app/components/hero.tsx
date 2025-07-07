import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero1.jpg"
          alt="Healthcare professionals caring for elderly patients"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              환자와 함께하는 일
            </h1>

            {/* Subheading */}
            <p className="text-4xl md:text-5xl text-white/90 font-bold mb-8 leading-relaxed">보다 가까이 있다는 것 입니다.</p>

            {/* CTA Button */}
            
            {/* Additional Info */}
            <div className="mt-12 text-white/80">
              <p className="text-sm">그래서 에스웰은 보호자 <br />가 
가장 안심할 수 있는 병원이 되려합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 bg-black/50 text-white px-3 py-1 rounded text-sm">1/4</div>
    </section>
  )
}
