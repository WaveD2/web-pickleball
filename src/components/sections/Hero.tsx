import LazyImage from "../commom/LazyImage";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white text-center">
      {/* Phần background */}
      <div className="absolute inset-0">
        {/* Ảnh dành cho mobile */}
        <div className="block md:hidden">
          <LazyImage
            src="https://res.cloudinary.com/dr1uftsqc/image/upload/v1741879471/dang_minh/back_mobile_wj8hrk.jpg"
            alt="Hero Mobile"
            className="w-full h-screen object-cover"
          />
        </div>
        {/* Ảnh dành cho desktop */}
        <div className="hidden md:block">
          <LazyImage
            src="https://res.cloudinary.com/dr1uftsqc/image/upload/v1741879313/dang_minh/backgroud_upfry2.jpg"
            alt="Hero Desktop"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>

      {/* Nội dung hiển thị phía trên background */}
      <div className="relative z-10">
        {/* Bạn có thể đặt nội dung hero tại đây */}
      </div>
    </section>
  );
};

export default Hero;
