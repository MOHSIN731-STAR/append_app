import { useEffect } from "react";
import image1 from "../assets/icon_image/client-1 (1).png";
import image2 from "../assets/icon_image/client-2 (1).png";
import image3 from "../assets/icon_image/client-3 (1).png";
import image4 from "../assets/icon_image/client-4 (1).png";
import image5 from "../assets/icon_image/client-5 (1).png";
import Accounting from "./Acounting";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBuilding,
  FaClipboardList,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import { BiCommand } from "react-icons/bi";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      {/* Client Logos */}
      <div className="flex justify-center w-full overflow-hidden">
        <div className="flex flex-wrap justify-center gap-3 md:gap-10 p-4 max-w-full">
          {[image1, image2, image3, image4, image5].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Client ${idx + 1}`}
              className="h-8 w-28 filter grayscale brightness-50 transition-all duration-300 hover:grayscale-0 hover:brightness-100"
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#f9f9f9] w-full p-6">
        <div className="mx-auto px-4 md:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-8 w-full">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <button className="bg-[#f8efef] text-[#e85255] px-4 py-2 hover:bg-[#e85255] hover:text-white text-base rounded-md">
                <div data-aos="fade-up">About Us</div>
              </button>
              <h1 className="font-extrabold text-2xl md:text-3xl my-4 leading-snug">
                <div data-aos="fade-up">
                  Ducimus rerum libero reprehenderit cumque
                </div>
              </h1>
              <p className="text-sm font-medium mb-4 max-w-md">
                <div data-aos="fade-up">
                  Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
                  cumque alias maxime. Enim reiciendis minus et rerum hic non.
                  Dicta quas cum quia maiores iure. Quidem nulla qui assumenda
                  incidunt voluptatem tempora deleniti soluta.
                </div>
              </p>
              <div data-aos="fade-up">
                <button className="flex items-center bg-[#e85255] text-white px-6 py-3 rounded-md hover:bg-[#df4649] text-base mt-4">
                  Read More
                  <FaArrowRight className="ml-2 mt-[2px]" />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2  grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="bg-white rounded-md p-6 md:h-52 shadow-md group hover:shadow-lg transition-all md:mt-6">
                  <span className="inline-flex w-14 h-14 md:w-16 md:h-16 bg-[#fef5f5] rounded-full items-center justify-center group-hover:bg-[#e85255] mb-4">
                    <FaBuilding className="text-[#e85255] group-hover:text-white text-xl md:text-2xl" />
                  </span>
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    Eius provident
                  </h2>
                  <p className="text-sm">
                    Magni repellendus vel ullam hic officia accusantium ipsa
                    dolor omnis.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <div className="bg-white rounded-md p-6 shadow-md group hover:shadow-lg transition-all">
                  <span className="inline-flex w-14 h-14 md:w-16 md:h-16 bg-[#fef5f5] rounded-full items-center justify-center group-hover:bg-[#e85255] mb-4">
                    <FaClipboardList className="text-[#e85255] group-hover:text-white text-xl md:text-2xl" />
                  </span>
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    Veniam omnis
                  </h2>
                  <p className="text-sm">
                    Omnis perferendis molestias culpa sed. Recusandae quas
                    possimus.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="bg-white rounded-md p-6 shadow-md group hover:shadow-lg transition-all md:mt-6">
                  <span className="inline-flex w-14 h-14 md:w-16 md:h-16 bg-[#fef5f5] rounded-full items-center justify-center group-hover:bg-[#e85255] mb-4">
                    <BiCommand className="text-[#e85255] group-hover:text-white text-xl md:text-2xl" />
                  </span>
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    Rerum aperiam
                  </h2>
                  <p className="text-sm">
                    Autem saepe animi et aut aspernatur culpa facere rerum
                    voluptates.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="bg-white rounded-md p-6 shadow-md group hover:shadow-lg transition-all">
                  <span className="inline-flex w-14 h-14 md:w-16 md:h-16 bg-[#fef5f5] rounded-full items-center justify-center group-hover:bg-[#e85255] mb-4">
                    <FaChartLine className="text-[#e85255] group-hover:text-white text-xl md:text-2xl" />
                  </span>
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    Delares sapiente
                  </h2>
                  <p className="text-sm">
                    Sint et dolor voluptas minus possimus nostrum eligendi
                    omnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-[url('./assets/images/stats-bg.jpg')] bg-cover bg-center min-h-[50vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <Accounting />
      </div>
    </div>
  );
};

export default About;
