import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";

export default function ProjectDetail() {
  const { id } = useParams();

  const projectImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/60aaca77883d2a864ea986debb4446679a8369e5?width=1440",
    "https://api.builder.io/api/v1/image/assets/TEMP/0f4cd968d8b1cfd968244e70abf75d4c8c53894f?width=1440",
    "https://api.builder.io/api/v1/image/assets/TEMP/6c4101d268bc0597cafccadcb1a99407a202f271?width=1440",
    "https://api.builder.io/api/v1/image/assets/TEMP/a980d441353da04261e6a583c3d074aa5ff4abbe?width=1440",
  ];

  return (
    <div className="bg-[#2E2E2E] min-h-screen">
      <Header variant="dark" />

      <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bcdbadc90f4d20f6a2862b78990c969893d6fffe?width=2880"
          alt="Project hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="text-[#F2F2F2] hover:opacity-80 transition-opacity" aria-label="Play video">
            <Play className="w-12 h-12" />
          </button>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-4 md:px-16 lg:px-36 py-12 md:py-16 text-center">
        <h1 className="text-[#F2F2F2] text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
          Project name
        </h1>
        <p className="text-[#F2F2F2] text-xl md:text-2xl mb-6">
          Client: Pineapple Pie
        </p>
        <p className="text-[#F2F2F2] text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto">
          Breif description about this project: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lobortis volutpat, interdum sapien nulla quisque. Nunc in sapien risus facilisis imperdiet consequat iaculis. Auctor vitae mauris nec ante.
        </p>
      </section>

      {/* Project Images Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 md:mb-16">
        {projectImages.map((image, index) => (
          <div key={index} className="aspect-video">
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Share Section */}
      <section className="text-center py-8 md:py-12">
        <p className="text-[#F2F2F2] text-xl md:text-2xl mb-4">SHARE ON</p>
        <div className="flex items-center justify-center gap-8 md:gap-10">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2F2F2] hover:opacity-80 transition-opacity"
            aria-label="Share on LinkedIn"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2F2F2] hover:opacity-80 transition-opacity"
            aria-label="Share on Twitter"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78738 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2F2F2] hover:opacity-80 transition-opacity"
            aria-label="Share on Facebook"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-4 md:px-16 lg:px-36 py-12 md:py-16 flex items-center justify-between">
        <Link
          to="/work"
          className="flex items-center gap-4 text-[#F2F2F2] hover:opacity-80 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-xl md:text-2xl font-bold lowercase" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
            previous project
          </span>
        </Link>
        <Link
          to="/work"
          className="flex items-center gap-4 text-[#F2F2F2] hover:opacity-80 transition-opacity"
        >
          <span className="text-xl md:text-2xl font-bold lowercase" style={{ fontFamily: 'Prestige Elite Std, monospace' }}>
            Next project
          </span>
          <ChevronRight className="w-6 h-6" />
        </Link>
      </section>
      </main>
    </div>
  );
}
