import Hero from "../components/sections/Hero";
import CourseSlider from "../components/sections/CourseSlider";
import Layout from "../components/layout";
import LazyImage from "../components/commom/LazyImage";
import News from "../components/sections/New";

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* Info */}
      <div className='container-section mx-auto px-4 py-12'>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          {/* Hình ảnh */}
          <div className='w-full lg:w-1/2'>
            <LazyImage
              src='https://res.cloudinary.com/dr1uftsqc/image/upload/v1741872478/dang_minh/avatar_l0ocuf.jpg'
              alt='Đăng Minh'
              className='rounded-sm shadow-lg w-full object-cover'
            />
          </div>

          <div className='w-full lg:w-1/2'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
              GIỚI THIỆU
            </h2>
            <p className='text-gray-700 mt-4 leading-relaxed'>
              Đăng Minh đặt ra tiêu chuẩn tiến bộ về mặt kỹ thuật, chiến thuật,
              thể lực và tâm lý thi đấu trở thành nhà vô địch.
            </p>
            <p className='text-gray-700 mt-2 leading-relaxed'>
              Phương pháp huấn luyện sử dụng trang thiết bị hiện đại, huấn luyện
              viên chuyên nghiệp nhiệt tình.
            </p>
            <p className='text-gray-700 mt-2 leading-relaxed'>
              Học viện là nơi có số lượng người tham gia học lớn nhất Việt Nam
              trong suốt cả năm.
            </p>

            <button className='w-full mx-auto md:w-auto mt-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition cursor-pointer'>
              Khám phá thêm
            </button>
          </div>
        </div>
      </div>
      <CourseSlider />
      <div className='bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 flex justify-center items-center w-full'>
        {/* Phần trịch dẫn */}
        <div className='container w-full flex flex-col md:flex-row justify-between gap-8 '>
          {/* Nội dung trích dẫn */}
          <div className='w-full mx-auto  md:w-2/3 text-center md:text-left md:py-14'>
            <span
            className="text-6xl md:text-8xl text-[#f9fafa] before:content-['“'] font-bold"></span>
            <p className='italic text-lg md:text-xl leading-relaxed mt-4'>
              Là nhà sáng lập học viện VNTA, Huấn luyện viên mang lại khóa học
              Pickleball hiện đại chất lượng cao cho mọi lứa tuổi.
              <br />
              <strong>Tại các khóa học do Coach Thành đứng lớp</strong>, mỗi học
              viên nhận được chương trình đào tạo phát triển toàn diện về kỹ
              chiến thuật, thể lực, tâm lý và dinh dưỡng Pickleball.
            </p>
            <p className='font-semibold text-xl md:text-2xl mt-6 text-right'>
              Vũ Ngọc Thành
            </p>
          </div>

          {/* Hình ảnh */}
          <div className='w-full h-full md:w-80 md:pt-14'>
            <LazyImage
              src='https://res.cloudinary.com/dr1uftsqc/image/upload/c_thumb,w_200,g_face/v1741872478/dang_minh/avatar_l0ocuf.jpg'
              alt='Đăng Minh'
              className='w-full h-full md:w-80 object-contain rounded-sm'
            />
          </div>
        </div>
      </div>
      <News/>
    </Layout>
  );
};

export default Home;
