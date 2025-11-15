import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";

export default function Index() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = ["/vid.mp4"];

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
    { id: 1, image: "/diesel/PRINCIPAL.jpg", title: "Diesel", slug: "diesel" },
    { id: 2, image: "/redox/PRINCIPAL redox.jpg", title: "ReDOX", slug: "redox" },
    { id: 3, image: "/vibram/PRINCIPAL vibram.jpg", title: "Vibram", slug: "vibram" },
    { id: 4, image: "/millionvvv/PRINCIPALmillionvvv.jpg", title: "Millionvvv", slug: "millionvvv" },
    { id: 5, image: "/MOTT PROJEC X ADIDAS/PRINCIPAL mott.jpg", title: "MOTT PROJEC X ADIDAS", slug: "mott-projec-x-adidas" },
    { id: 6, image: "/GORDO PESTAÑA/PRINCIPAL gordo.jpg", title: "DJ Gordo", slug: "dj-gordo" },
    { id: 7, image: "/DVM STUDIO/PRINCIPAL principal.jpg", title: "DVM STUDIO", slug: "dvm-studio" },
    { id: 8, image: "/bemba/PRINCIPAL bemba.jpg", title: "BEMBA", slug: "bemba" },
    { id: 9, image: "/lust panama/PRINCIPAL lust.jpg", title: "LUST PANAMA", slug: "lust-panama" },
    { id: 10, image: "/us projec/PRINCIPAL US.jpg", title: "US PROJEC", slug: "us-projec" },
    { id: 11, image: "/CONCERT&PARTY PESTAÑA/PRINCIPAL.jpg", title: "CONCERTS & PARTY", slug: "concerts-party" },
  ];

  const portraits = Array.from({ length: 64 }, (_, i) => ({
    id: i + 1,
    image: i === 0 ? "/portraits/PRINCIPAL retratos.jpg" : `/portraits/re (${i}).jpg`,
  }));

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
            <Play className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          </button>
        </div>
        <div className="absolute bottom-12 md:bottom-20 lg:bottom-24 left-4 md:left-12 lg:left-36 right-4 md:right-auto max-w-xl">
          <h1 className="text-[#F2F2F2] text-3xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight tracking-wide">
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
          <p className="text-[#F2F2F2] text-2xl md:text-4xl lg:text-6xl lowercase leading-tight tracking-wide">
            <span className="font-normal">I'm </span>
            <span className="font-bold text-[#ebcf33]">Ivan Achao</span>
            <span className="font-normal">. A photographer, videographer, and digital artist.</span>
          </p>

          <p className="text-[#F2F2F2] text-2xl md:text-4xl lg:text-6xl font-normal lowercase leading-tight tracking-wide">
            I create compelling visual narratives that capture authentic moments and tell meaningful stories through photography, video, and digital art.
          </p>

          <p className="text-[#f2f2f2] text-2xl md:text-4xl lg:text-6xl font-bold lowercase leading-tight tracking-wide">
            bringing visions to life, one frame at a time.
          </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-16 md:py-24">
        <div className="mb-0 px-4 md:px-0">
          <h2 className="text-[#ffc000] text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight tracking-tight" style={{ fontFamily: 'Monument Extended, sans-serif' }}>
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {workCategories.map((category) => (
            <Link
              key={category.id}
              to={`/campaign/${category.slug}`}
              className="relative group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-auto object-contain block"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors px-4">
                <h3 className="text-[#F2F2F2] text-xl md:text-3xl lg:text-4xl uppercase text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 900 }}>
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Portraits Section */}
      <section id="portraits" className="py-16 md:py-24">
        <div className="mb-0 px-4 md:px-0">
          <h2 className="text-[#ffc000] text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight tracking-tight" style={{ fontFamily: 'Monument Extended, sans-serif' }}>
            Portraits
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 w-full">
          {portraits.map((portrait) => (
            <div
              key={portrait.id}
              className="relative group aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={portrait.image}
                alt={`Portrait ${portrait.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured In Section */}
      <section id="featured" className="px-4 md:px-16 lg:px-36 py-16 md:py-24 bg-[#1a1a1a]">
        <h2 className="text-[#F2F2F2] text-xl md:text-2xl font-bold underline lowercase mb-8 md:mb-12" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
          featured in
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <a
            href="https://www.vibe.com/music/music-news/gordo-formerly-known-carnage-album-diamante-interview-1234897218/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#E0E0E0] p-6 md:p-8 rounded hover:border-[#ffc000] transition-colors group"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-[#ffc000] text-2xl md:text-3xl font-bold uppercase">VIBE</h3>
              <p className="text-[#F2F2F2] text-base md:text-lg leading-relaxed">
                Gordo (Formerly Known as Carnage) on His Album 'DIAMANTE'
              </p>
              <span className="text-[#828282] text-sm md:text-base group-hover:text-[#ffc000] transition-colors">
                Read Article →
              </span>
            </div>
          </a>

          <a
            href="https://www.rollingstone.com/music/music-features/gordo-diamante-album-interview-drake-1235065735/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#E0E0E0] p-6 md:p-8 rounded hover:border-[#ffc000] transition-colors group"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-[#ffc000] text-2xl md:text-3xl font-bold uppercase">ROLLING STONE</h3>
              <p className="text-[#F2F2F2] text-base md:text-lg leading-relaxed">
                Gordo on Why His Genre-Twisting, Drake-Assisted Album Isn't Like Anything Else Out There
              </p>
              <span className="text-[#828282] text-sm md:text-base group-hover:text-[#ffc000] transition-colors">
                Read Article →
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-16 lg:px-36 py-16 md:py-24">
        <h2 className="text-[#F2F2F2] text-xl md:text-2xl font-bold underline lowercase mb-12 md:mb-16" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
          contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          <div>
            <h3 className="text-[#F2F2F2] text-3xl md:text-4xl lg:text-5xl uppercase font-normal mb-3 md:mb-4">
              Panama
            </h3>
            <p className="text-[#F2F2F2] text-lg md:text-xl lg:text-2xl uppercase leading-relaxed mb-6 md:mb-8">
              Panama City, Panama
            </p>
            <a
              href="mailto:ivanachao540@gmail.com"
              className="text-[#ffc000] text-base md:text-lg lg:text-xl hover:text-[#F2F2F2] transition-colors inline-block mb-2 md:mb-3"
            >
              ivanachao540@gmail.com
            </a>
            <p className="text-[#828282] text-sm md:text-base lg:text-lg uppercase">
              Available for projects worldwide
            </p>
          </div>

          <div>
            <h3 className="text-[#F2F2F2] text-lg md:text-xl lg:text-2xl font-bold uppercase mb-4 md:mb-6">
              Follow
            </h3>
            <div className="flex flex-col gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/by.litt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#828282] hover:text-[#ffc000] transition-colors text-base md:text-lg lg:text-xl uppercase"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-acu%C3%B1a-172328162/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#828282] hover:text-[#ffc000] transition-colors text-base md:text-lg lg:text-xl uppercase"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#444] pt-8">
          <p className="text-[#828282] text-sm md:text-base">
            © {new Date().getFullYear()} Ivan Achao. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
