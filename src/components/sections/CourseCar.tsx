const CourseCard = ({ image, title } : { image: string; title: string }) => {
  return (
    <div className="bg-[#1a1a2e] text-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
          Đăng ký tập thử →
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
