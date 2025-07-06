import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "portfolio",
      "pricing",
      "team",
      "blog",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Pricing",
    "Team",
    "Blog",
    "Contact",
  ];

  // Scroll par color change
  const linkColor = scrolled ? "red" : "black";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3 sm:py-4 lg:py-5 text-[#e84545]"
          : "bg-transparent py-2 sm:py-3 lg:py-4 text-[#e84545]"
      } overflow-hidden`}
    >
      <div className="container mx-auto flex px-3 sm:px-4 md:px-8 lg:px-12 items-center justify-between max-w-screen-xl">
        <h1
          className={`text-lg sm:text-xl lg:text-2xl font-bold ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Apppend
        </h1>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={22} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={22} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-3 lg:space-x-8 items-center">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className={`text-xs md:text-sm lg:text-base transition ${
                activeSection === section.toLowerCase()
                  ? "text-[#e84545] font-semibold"
                  : scrolled
                  ? "text-gray-900 font-bold"
                  : "text-white font-bold"
              }`}
            >
              {section}
            </button>
          ))}
          <button className="bg-[#e84545] text-white px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-[#d33b3b] transition text-xs md:text-sm lg:text-base">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-3 sm:px-4 mt-2 sm:mt-3 space-y-2 bg-white w-full overflow-hidden">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className={`block w-full text-left py-1.5 text-xs sm:text-sm md:text-base ${
                activeSection === section.toLowerCase()
                  ? "text-[#e84545] font-semibold"
                  : "text-gray-700"
              }`}
            >
              {section}
            </button>
          ))}
          <button className="bg-[#e84545] w-full text-center text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-[#d33b3b] transition text-xs sm:text-sm">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
