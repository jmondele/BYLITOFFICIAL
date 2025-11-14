import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";

export default function Index() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = ["/DOS_90.MP4", "/s.mp4"];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [currentVideoIndex]);
  const workCategories = [
    { id: 1, image: "/diesel/PRINCIPAL.jpg", title: "Diesel", span: "col-span-2", slug: "diesel" },
    { id: 2, image: "/redox/PRINCIPAL redox.jpg", title: "ReDOX", span: "col-span-1", slug: "redox" },
    { id: 3, image: "/vibram/PRINCIPAL vibram.jpg", title: "Vibram", span: "col-span-1", slug: "vibram" },
    { id: 4, image: "/millionvvv/PRINCIPALmillionvvv.jpg", title: "Millionvvv", span: "col-span-2", slug: "millionvvv" },
    { id: 5, image: "/MOTT PROJEC X ADIDAS/PRINCIPAL mott.jpg", title: "MOTT PROJEC X ADIDAS", span: "col-span-2", slug: "mott-projec-x-adidas" },
    { id: 6, image: "/GORDO PESTAÑA/PRINCIPAL gordo.jpg", title: "DJ Gordo", span: "col-span-2", slug: "dj-gordo" },
    { id: 7, image: "/DVM STUDIO/PRINCIPAL principal.jpg", title: "DVM STUDIO", span: "col-span-2", slug: "dvm-studio" },
    { id: 8, image: "/bemba/PRINCIPAL bemba.jpg", title: "BEMBA", span: "col-span-2", slug: "bemba" },
    { id: 9, image: "/lust panama/PRINCIPAL lust.jpg", title: "LUST PANAMA", span: "col-span-2", slug: "lust-panama" },
    { id: 10, image: "/us projec/PRINCIPAL US.jpg", title: "US PROJEC", span: "col-span-2", slug: "us-projec" },
  ];

  const clientLogos = [
    { id: 1, image: "/diesel-seeklogo.png", alt: "Diesel" },
    { id: 2, image: "/adidas-trefoil-seeklogo.png", alt: "Adidas" },
    { id: 3, image: "/diesel-seeklogo.png", alt: "Client 3" },
    { id: 4, image: "/adidas-trefoil-seeklogo.png", alt: "Client 4" },
    { id: 5, image: "/diesel-seeklogo.png", alt: "Client 5" },
    { id: 6, image: "/adidas-trefoil-seeklogo.png", alt: "Client 6" },
    { id: 7, image: "/diesel-seeklogo.png", alt: "Client 7" },
    { id: 8, image: "/adidas-trefoil-seeklogo.png", alt: "Client 8" },
    { id: 9, image: "/diesel-seeklogo.png", alt: "Client 9" },
    { id: 10, image: "/adidas-trefoil-seeklogo.png", alt: "Client 10" },
    { id: 11, image: "/diesel-seeklogo.png", alt: "Client 11" },
    { id: 12, image: "/adidas-trefoil-seeklogo.png", alt: "Client 12" },
    { id: 13, image: "/diesel-seeklogo.png", alt: "Client 13" },
    { id: 14, image: "/adidas-trefoil-seeklogo.png", alt: "Client 14" },
  ];

  const testimonials = [
    {
      quote: "They listen to what we want to execute well and they make it such an enjoyable experience.",
      author: "Charles Ho",
      position: "Talent Relation & Recruiting Specialist, Zuhlke"
    },
    {
      quote: "Morning Media was able to take the key essence of our employer branding and make it come to life with the video.",
      author: "Charles Ho",
      position: "HR Business Partner, MoneySmart Group"
    },
    {
      quote: "We have thrown projects at Morning Media with tight deadlines and somehow they always deliver. Our content has grown thanks to them.",
      author: "Charles Ho",
      position: "Co-founder, and CEO, Prive Technologies"
    }
  ];

  return (
    <div className="bg-[#222] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          key={currentVideoIndex}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="text-[#F2F2F2] hover:opacity-80 transition-opacity" aria-label="Play video">
            <Play className="w-12 h-12" />
          </button>
        </div>
        <div className="absolute bottom-16 md:bottom-24 left-4 md:left-16 lg:left-36 max-w-xl">
          <h1 className="text-[#F2F2F2] text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight tracking-wide">
            <span className="font-normal">photographer</span><br />
            <span className="font-normal">Videographer</span><br />
            <span className="font-bold">Digital creator.</span>
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="px-4 md:px-16 lg:px-36 py-16 md:py-24 lg:py-32">
        <h2 className="text-[#F2F2F2] text-xl md:text-2xl font-bold underline lowercase mb-8 md:mb-12" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
          About
        </h2>

        <div className="space-y-6 md:space-y-8 max-w-5xl">
          <p className="text-[#F2F2F2] text-3xl md:text-5xl lg:text-6xl lowercase leading-tight tracking-wide">
            <span className="font-normal">I'm </span>
            <span className="font-bold text-[#ebcf33]">Ivan Achao</span>
            <span className="font-normal">. A photographer, videographer, and digital artist.</span>
          </p>

          <p className="text-[#F2F2F2] text-3xl md:text-5xl lg:text-6xl font-normal lowercase leading-tight tracking-wide">
            I create compelling visual narratives that capture authentic moments and tell meaningful stories through photography, video, and digital art.
          </p>

          <p className="text-[#f2f2f2] text-3xl md:text-5xl lg:text-6xl font-bold lowercase leading-tight tracking-wide">
            bringing visions to life, one frame at a time.
          </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-16 md:py-24">
        <div className="mb-0">
          <h2 className="text-[#ffc000] text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight tracking-tight" style={{ fontFamily: 'Monument Extended, sans-serif' }}>
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {workCategories.map((category) => (
            <Link
              key={category.id}
              to={`/campaign/${category.slug}`}
              className={`relative group ${category.span} aspect-video md:aspect-square overflow-hidden cursor-pointer`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <h3 className="text-[#F2F2F2] text-2xl md:text-3xl lg:text-4xl uppercase" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 900 }}>
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="px-4 md:px-16 lg:px-36 py-16 md:py-24">
        <h2 className="text-[#F2F2F2] text-xl md:text-2xl font-bold underline lowercase mb-8 md:mb-12" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
          clients
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 mb-12 md:mb-16">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="bg-white/5 backdrop-blur-sm h-20 md:h-24 flex items-center justify-center p-4 md:p-6 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
              {logo.image ? (
                <img src={logo.image} alt={logo.alt} className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
              ) : (
                <div className="w-full h-full bg-[#C4C4C4]/20 rounded"></div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-2 border-[#E0E0E0] p-6 md:p-9 rounded">
              <p className="text-[#F2F2F2] text-lg md:text-2xl mb-8 md:mb-12">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-[#333] flex-shrink-0"></div>
                <div>
                  <p className="text-[#F2F2F2] text-base md:text-lg font-bold">{testimonial.author}</p>
                  <p className="text-[#F2F2F2] text-sm md:text-base">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-12">
          <button className="text-[#BDBDBD] hover:text-[#F2F2F2] transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
          </button>
          <button className="text-[#F2F2F2] hover:opacity-80 transition-opacity" aria-label="Next testimonial">
            <ChevronRight className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-16 lg:px-36 py-16 md:py-24 pb-24 md:pb-32">
        <h2 className="text-[#333] text-xl md:text-2xl font-bold underline lowercase mb-8 md:mb-12" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
          contact
        </h2>

        <div className="max-w-3xl">
          <div className="space-y-8 md:space-y-14">
            <div>
              <h3 className="text-[#F2F2F2] text-4xl md:text-5xl lg:text-7xl uppercase font-normal mb-4">
                Panama
              </h3>
              <p className="text-[#F2F2F2] text-xl md:text-2xl lg:text-4xl uppercase leading-relaxed">
                Panama City, Panama
              </p>
            </div>
            <div>
              <p className="text-[#828282] text-lg md:text-xl lg:text-2xl">
                ivan@achao.com
              </p>
              <p className="text-[#828282] text-lg md:text-xl lg:text-2xl">
                Available for projects worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
