import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
