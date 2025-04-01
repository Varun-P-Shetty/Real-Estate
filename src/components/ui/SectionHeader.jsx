export default function SectionHeader({ title, subtitle, description }) {
    return (
      <div className="text-center">
        {/* Title & Subtitle */}
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <span className="text-3xl underline">{subtitle}</span>
        </div>
  
        {/* Description */}
        <p className="text-[15px] sm:text-[18px] text-gray-600 mb-6 mt-2">
          {description}
        </p>
      </div>
    );
  }
  