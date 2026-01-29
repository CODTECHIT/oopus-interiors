import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
