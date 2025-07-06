import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Service";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import "./index.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        <Header />

        {/* Home Section */}
        <section
          id="home"
          className="bg-[url('./assets/images/back_image.jpg')] bg-cover bg-center min-h-screen w-full relative"
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="h-screen flex items-center justify-center sm:justify-start relative z-10 px-4 sm:px-8">
            <div className="text-center sm:text-left  max-w-2xl">
              {/* Heading */}
              <h1
                className="text-white font-bold text-3xl sm:text-5xl mb-4"
                data-aos="fade-up"
              >
                Welcome to Our Website
              </h1>

              <p
                className="text-[#cdcbc8] mb-6 text-lg sm:text-xl"
                data-aos="fade-up"
              >
                We are a team of talented designers making websites with
                Bootstrap
              </p>

              {/* Input and Button */}
              <div className="relative md:w-[500px]" data-aos="fade-right">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg py-4 px-6 pr-32 text-base sm:text-lg focus:outline-none"
                />
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#e84545] text-white font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-[#d13434] text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="pricing">
          <Price />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <footer className="bg-white text-gray-800 px-8 md:px-20 pt-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b pb-10">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Append</h1>
            <p className="text-sm mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="flex space-x-4">
              <button className="border rounded-full p-2 hover:bg-gray-100 hover:text-[#e84545]">
                <RiTwitterXLine size={18} />
              </button>
              <button className="border rounded-full p-2 hover:bg-gray-100 hover:text-[#e84545]">
                <FaFacebookF size={18} />
              </button>
              <button className="border rounded-full p-2 hover:bg-gray-100 hover:text-[#e84545]">
                <FaInstagram size={18} />
              </button>
              <button className="border rounded-full p-2 hover:bg-gray-100 hover:text-[#e84545]">
                <FaLinkedinIn size={18} />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2 text-sm">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">A108 Adam Street</p>
            <p className="text-sm">New York, NY 535022</p>
            <p className="text-sm mb-2">United States</p>
            <p className="text-sm">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p className="text-sm">
              <strong>Email:</strong> info@example.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-4 text-sm text-gray-600">
          <p>
            © Copyright <strong className="text-black">Append</strong> All
            Rights Reserved
          </p>
          <p>
            Designed by{" "}
            <a href="#" className="text-red-500">
              BootstrapMade
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
