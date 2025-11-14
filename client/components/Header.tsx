import { useState } from "react";
import { Menu, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isDark = variant === "dark";
  const textColor = isDark ? "text-[#F2F2F2]" : "text-[#333]";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="w-24 h-24 md:w-32 md:h-32 hover:opacity-90 transition-opacity">
            <img src="/loogo.svg" alt="Logo" className="w-full h-full object-contain" />
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              className={`${textColor} hover:opacity-80 transition-opacity`}
              aria-label="Toggle dark mode"
            >
              <Moon className="w-9 h-9" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${textColor} hover:opacity-80 transition-opacity`}
              aria-label="Toggle menu"
            >
              <Menu className="w-9 h-9" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#222] z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 md:top-8 right-4 md:right-16 text-[#F2F2F2]"
            aria-label="Close menu"
          >
            <Menu className="w-9 h-9" />
          </button>
          <button
            className="absolute top-6 md:top-8 right-20 md:right-32 text-[#F2F2F2]"
            aria-label="Toggle dark mode"
          >
            <Moon className="w-9 h-9" />
          </button>
          <div className="absolute top-6 md:top-8 left-4 md:left-16 w-24 h-24 md:w-32 md:h-32">
            <img src="/loogo.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>

          <nav className="flex flex-col items-center gap-8 md:gap-10">
            {location.pathname === "/" ? (
              <>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  About
                </a>
                <a
                  href="#work"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Portfolio
                </a>
                <a
                  href="#clients"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Clients
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  About
                </Link>
                <Link
                  to="/work"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Portfolio
                </Link>
                <Link
                  to="/#clients"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Clients
                </Link>
                <Link
                  to="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F2F2F2] text-3xl md:text-4xl uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Contact
                </Link>
              </>
            )}
          </nav>

          <div className="absolute bottom-16 md:bottom-24 flex items-center gap-8 md:gap-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2F2F2] hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
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
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78738 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2F2F2] hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.002 21.041C9.54195 21.041 9.25195 21.028 8.29195 20.986C7.54332 20.9614 6.80439 20.8092 6.10695 20.536C4.90026 20.0664 3.94609 19.1119 3.47695 17.905C3.21426 17.205 3.07257 16.4655 3.05795 15.718C3.00195 14.76 3.00195 14.446 3.00195 12.005C3.00195 9.538 3.01495 9.25 3.05795 8.295C3.07289 7.54853 3.21457 6.81001 3.47695 6.111C3.94558 4.90253 4.9013 3.94718 6.10995 3.479C6.8086 3.21521 7.5473 3.07315 8.29395 3.059C9.24895 3.005 9.56295 3.005 12.002 3.005C14.482 3.005 14.767 3.018 15.712 3.059C16.4605 3.07327 17.2012 3.21531 17.902 3.479C19.1103 3.94771 20.0658 4.90288 20.535 6.111C20.8021 6.8202 20.9445 7.57026 20.956 8.328C21.012 9.28601 21.012 9.59901 21.012 12.039C21.012 14.479 20.998 14.799 20.956 15.746C20.9411 16.4942 20.799 17.2344 20.536 17.935C20.0656 19.1427 19.11 20.0976 17.902 20.567C17.2022 20.8292 16.4631 20.9709 15.716 20.986C14.761 21.041 14.448 21.041 12.002 21.041ZM11.968 4.588C9.52195 4.588 9.26795 4.6 8.31295 4.643C7.74294 4.65056 7.17843 4.75575 6.64395 4.954C5.85471 5.25601 5.23018 5.878 4.92495 6.666C4.72517 7.2063 4.61996 7.77698 4.61395 8.353C4.56095 9.322 4.56095 9.576 4.56095 12.005C4.56095 14.405 4.56995 14.696 4.61395 15.659C4.62291 16.2292 4.72805 16.7938 4.92495 17.329C5.23063 18.1165 5.85505 18.738 6.64395 19.04C7.17807 19.2396 7.7428 19.3448 8.31295 19.351C9.28095 19.407 9.53595 19.407 11.968 19.407C14.421 19.407 14.675 19.395 15.622 19.351C16.1924 19.3441 16.7573 19.2389 17.292 19.04C18.0764 18.7354 18.6969 18.1153 19.002 17.331C19.2014 16.7903 19.3065 16.2193 19.313 15.643H19.324C19.367 14.687 19.367 14.432 19.367 11.989C19.367 9.54601 19.356 9.289 19.313 8.334C19.304 7.76446 19.1988 7.20052 19.002 6.666C18.6976 5.88058 18.077 5.2593 17.292 4.954C16.7574 4.75475 16.1924 4.64953 15.622 4.643C14.655 4.588 14.402 4.588 11.968 4.588ZM12.002 16.624C10.1319 16.6252 8.44537 15.4997 7.72882 13.7725C7.01226 12.0452 7.40686 10.0563 8.72858 8.73347C10.0503 7.4106 12.0388 7.01428 13.7667 7.72934C15.4946 8.4444 16.6215 10.13 16.622 12C16.6192 14.5511 14.553 16.619 12.002 16.624ZM12.002 8.998C10.3451 8.998 9.00195 10.3412 9.00195 11.998C9.00195 13.6549 10.3451 14.998 12.002 14.998C13.6588 14.998 15.002 13.6549 15.002 11.998C14.9981 10.3427 13.6572 9.00185 12.002 8.998ZM16.802 8.28501C16.2074 8.2828 15.7269 7.79959 15.728 7.20501C15.7291 6.61043 16.2114 6.12901 16.806 6.12901C17.4005 6.12901 17.8828 6.61042 17.884 7.205C17.8842 7.49187 17.7702 7.76703 17.5672 7.96968C17.3642 8.17234 17.0888 8.2858 16.802 8.28501Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2F2F2] hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
