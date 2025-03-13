import LazyImage from "./LazyImage";
import {MdDateRange} from "react-icons/md";

const NewsCard = ({
  category,
  title,
  date,
  description,
  image,
  link,
}: {
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer'>
      <h3 className='text-md font-bold uppercase mb-3'>{category}</h3>
      <LazyImage src={image} alt={title} className='w-full h-52 object-cover' />
      <div className='p-3 text-left h-40'>
        <h2 className='text-lg font-semibold mt-2'>{title}</h2>
        <p className='text-gray-500 text-sm mt-1 flex items-center gap-2'>
          <MdDateRange size={20} /> {date}
        </p>
        <p className='text-gray-700 text-sm mt-2 line-clamp-2'>
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>
      </div>
      <button
        className='mt-4 w-1/3 mx-auto block text-center bg-orange-500 text-white py-2 
          rounded-sm hover:bg-orange-600 transition'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          Đọc thêm
        </a>
      </button>
    </div>
  );
};

export default NewsCard;
