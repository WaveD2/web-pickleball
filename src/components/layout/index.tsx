import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "../commom/ScrollTop";
import ContactBtns from "./ContactBtn";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ẩn header khi kéo xuống, hiện khi kéo lên
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      // Kiểm tra có đang ở vị trí top không
      setIsAtTop(currentScrollY === 0);
      
      // Cập nhật vị trí scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative max-w-screen">
      <Navbar visible={showHeader} isTransparent={isAtTop} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <ScrollTop />
      <ContactBtns/>
    </div>
  );
};

export default Layout;
