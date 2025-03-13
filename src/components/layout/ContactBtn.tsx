import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const FloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay nền xám */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#000000cc] bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)} // Click nền xám để đóng menu
        ></div>
      )}

      <div className="fixed flex flex-col-reverse gap-3 left-5 top-2/3 z-50">
        {/* Nút chính */}
        <button
          className="w-14 h-14 bg-orange-500 rounded-full flex items-center flex-col-reverse justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose className="text-white text-2xl" />
          ) : (
            <IoChatbubbleEllipsesSharp className="text-white text-2xl" />
          )}
        </button>

        {/* Menu mở rộng */}
        <div
          className={`mt-4 space-y-3 transition-all duration-300 z99 ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full shadow-lg">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <span className="text-white font-semibold">0378.446.607</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full shadow-lg">
              <SiZalo className="text-white text-lg" />
            </div>
            <a href="" className="text-white font-semibold">Chat trên Zalo</a>
          </div>

          {/* <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full shadow-lg">
              <FaMapMarkerAlt className="text-white text-lg" />
            </div>
            <span className="text-white font-semibold">Chỉ đường</span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
