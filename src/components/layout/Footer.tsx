const Footer = () => {
  return (
    <footer className="bg-black text-white text-[16px]">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Đăng ký nhận tin */}
        <div>
          <h3 className="font-bold text-lg">ĐĂNG KÝ NHẬN TIN</h3>
          <div className="mt-3 flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="p-2 rounded-l-md w-full text-white border border-gray-200 border-r-0"
            />
            <button className="bg-orange-500 px-2 py-2 border border-orange-500 rounded-sm uppercase w-40">ĐĂNG KÝ</button>
          </div>
        </div>

        {/* Giới thiệu + Chính sách */}
        <div>
          <h3 className="font-bold text-lg">GIỚI THIỆU</h3>
          <ul className="mt-3 space-y-3 font-bold">
            <li><a href="#" className="hover:text-orange-400">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-orange-400">Huấn Luyện Viên</a></li>
            <li><a href="#" className="hover:text-orange-400">Tin tức</a></li>
            <li><a href="#" className="hover:text-orange-400">Địa điểm sân tập</a></li>
            <li><a href="#" className="hover:text-orange-400">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">CHÍNH SÁCH</h3>
          <ul className="mt-3 space-y-3 font-bold">
            <li><a href="#" className="hover:text-orange-400">Chính sách và Điều khoản</a></li>
            <li><a href="#" className="hover:text-orange-400">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-orange-400">Chính sách quảng cáo</a></li>
            <li><a href="#" className="hover:text-orange-400">Miễn trừ trách nhiệm</a></li>
          </ul>
        </div>
      </div>

      {/* Thông tin công ty */}
      <div className="border-t border-gray-600 py-6 px-4 text-center">
        <p>Đăng Minh - Uy tín tạo nên thương hiệu</p>
        <p className="mt-2">© 2025 Đăng Minh. Design by <span className="font-bold">WaveD</span></p>
      </div>
    </footer>
  );
};

export default Footer;
