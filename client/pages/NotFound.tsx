import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="bg-[#222] min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-4">
          <h1 className="text-[#ffc000] text-8xl md:text-9xl font-bold mb-6" style={{ fontFamily: 'Monument Extended, sans-serif' }}>
            404
          </h1>
          <p className="text-[#F2F2F2] text-2xl md:text-3xl mb-8 font-normal">
            Oops! Page not found
          </p>
          <Link
            to="/"
            className="inline-block bg-[#ffc000] text-[#222] px-8 py-4 text-lg md:text-xl font-bold uppercase hover:opacity-90 transition-opacity"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
