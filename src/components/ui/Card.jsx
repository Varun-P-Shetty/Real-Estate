export default function Card({ image, name, title, rating, text }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg border border-gray-100 p-6 text-center ">
      {/* Rounded Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
      />

      {/* Name & Title */}
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500 text-sm">{title}</p>

      {/* Rating */}
      <div className="flex justify-center mt-2 text-yellow-500">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3">
        {text}
      </p>
    </div>
  );
}
