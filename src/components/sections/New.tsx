import NewsCard from "../commom/NewCard";

const News = () => {
  const newsData = [
    {
      category: "THỂ THAO",
      title: "CƠ HỘI HỢP TÁC DÀNH CHO CÁC HUẤN LUYỆN VIÊN PICKLEBALL",
      date: "Tháng 1 16, 2025",
      description:
        "Sau một thời gian giảng dạy và làm việc trong cộng đồng Pickleball, Coach Koza nhận thấy nhiều huấn luyện viên có trình độ chuyên môn tốt nhưng chưa có một giáo án bài bản cũng như phương pháp huấn luyện khoa học. Điều này không chỉ ảnh hưởng đến hiệu quả giảng dạy mà còn làm chậm sự phát triển của Pickleball tại Việt Nam.",
      image:
        "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/480698480_122162151770301128_2450226917495505094_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhi9Yjw3VMT_RBi365eTOtimCUYf7fNCWKYJRh_t80JepYlPIa6omMlhT8tGIqljqUuOSpKvGhGDV3ZPDuYtZa&_nc_ohc=CTgHqSP1XgoQ7kNvgFgz83f&_nc_oc=AdiwdqmmNBlUXuMUKjXyxgQ-GMQj5UUqrKlo6HHoqTcVDNEKnqqbQ0S4rr6ohiWsYZ8cY46iWccQVi5AtfJmS8YH&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=ATpJIK6FHRvo3gVLWcDASko&oh=00_AYHhWEOoHPr5raHFnfimF__Q7DWRBtETh7y9_-CVSqAxGA&oe=67D8C569",
      link: "https://www.facebook.com/share/p/1AHAw6rybW/?mibextid=wwXIfr",
    },
    {
      category: "GIẢI ĐẤU & SỰ KIỆN",
      title:
        "Coach Koza Pickleball - Đại Diện & HLV Chiến Lược của Selkirk Sport",
      date: "Tháng 9 30, 2022",
      description:
        "Với vai trò đại diện chiến lược cho Selkirk, một trong những thương hiệu hàng đầu thế giới trong ngành Pickleball, tôi là cầu nối quan trọng giữa thương hiệu và cộng đồng thể thao Việt Nam.",
      image:
        "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/480705070_122162204984301128_4495681300285930129_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHV3BtW1c7RJi4DtUKNDvfcYLu3_PYhoD1gu7f89iGgPfa2J8ZfTDI9Unrdkk2hUOUf6hG7o2sSaRQDMzLOvGba&_nc_ohc=u7OeV5NQRKsQ7kNvgHEcLbN&_nc_oc=Adh3BmaTfFWghu62Ntq14XX0-w034Xa1PsOlGSevmnWvoUXSGdqH1hP6ge-LUMTPr-INMxKJQrlQx0foQ3WUK69S&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=A9lrn0E_CtxSmduPy8Tcmqr&oh=00_AYEAp3BYt4FEsCfpHlOWQVXv_rmFU9E029c0M5hf9Ms4lA&oe=67D8C65C",
      link: "https://www.facebook.com/share/p/1A3o9Q44t5/?mibextid=wwXIfr",
    },
    {
      category: "KỸ THUẬT & FAQ",
      title:
        "Coach Koza Pickleball - Đại Diện & HLV Chiến Lược của Selkirk Sport",
      date: "Tháng 1 25, 2025",
      description:
        "Pickleball đang bùng nổ tại Việt Nam với luật chơi dễ hiểu...",
      image:
        "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/480223842_122162204972301128_7572941456373842547_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEZ0Dl60kr4OFEWPbCoaQpczD4hoGViBpzMPiGgZWIGrF7aElL1VFi1bc4bpZyxmAycGcvtTUoD0kaQibJwm8K&_nc_ohc=R_DgE_wevxIQ7kNvgHK3Ke6&_nc_oc=Adg9C4hlyt2u9ukCDO0JFIbOmlQplLzBw5rh8Jiq5w2iNXOIhPhL5vvnQHRoFrqkfwOMWrSFTUE-ncjn1a_vWZQq&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AgkDvozUJoAJ_UqBPbQWvBU&oh=00_AYEllLJe_pa84zkUcjqXrb8qr2rKMRAUwCPl_m_Z5GKWdQ&oe=67D8AE1A",
      link: "#",
    },
  ];

  return (
    <section className='container-section py-12 bg-gray-100'>
      <div className='container mx-auto text-center'>
        <h2 className='title_selection '>
          <span className='font-bold text-black'>TIN VNTA</span>
        </h2>
        <p className='text-gray-800 mt-3 max-w-2xl mx-auto'>
          Khám phá nguồn tin cập nhật không ngừng về Pickleball & Giải đấu quốc
          tế.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {newsData.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
