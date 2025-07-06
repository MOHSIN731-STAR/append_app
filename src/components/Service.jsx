import React, { useEffect } from "react";
import { BiBriefcase } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsCardChecklist,
  BsBarChart,
  BsBinoculars,
  BsBrightnessHigh,
  BsCalendar4Week,
} from "react-icons/bs";
import Lines from "../components/lines/Lines";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const services = [
    {
      icon: <BiBriefcase size={50} className="text-gray-500" />,
      title: "Dolor Sitema",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: <BsBinoculars size={50} className="text-gray-500" />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: <BsCardChecklist size={50} className="text-gray-500" />,
      title: "Dolor Sitema",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: <BsBarChart size={50} className="text-gray-500" />,
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icon: <BsBrightnessHigh size={50} className="text-gray-500" />,
      title: "Nemo Enim",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      icon: <BsCalendar4Week size={50} className="text-gray-500" />,
      title: "Euismode Tempor",
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div data-aos="fade-up">
          <div className="mb-10">
            <div className="flex gap-3 justify-center items-center mb-4">
              <div className="border-t-2 border-red-700 w-16 mt-2"></div>
              <h1 className="text-2xl sm:text-3xl font-bold">Services</h1>
              <div className="border-t-2 border-red-700 w-16 mt-2"></div>
            </div>
            <p className="text-center text-gray-600 text-sm sm:text-base">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="hidden md:block">
            <Lines />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div data-aos="fade-up">
              <div
                key={index}
                className="flex gap-4 sm:gap-6 group transition-all duration-300 hover:cursor-pointer"
              >
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold group-hover:text-[#e84545] transition-colors duration-300">
                    {service.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12 px-4">
          {/* Header and subtitle */}
        </div>

        {/* First Feature Row */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div data-aos="fade-up">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Corporis temporibus maiores provident
              </h3>
            </div>
            <div data-aos="fade-up">
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div data-aos="fade-up">
              <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}

          <div className="flex-1 w-full relative max-w-sm md:max-w-md mx-auto mt-10 md:mt-0">
            <div data-aos="fade-up">
              <div className="flex-1 w-full relative h-64 sm:h-80 max-w-md mx-auto">
                <img
                  src="https://bootstrapmade.com/content/demo/Append/assets/img/features-light-2.jpg"
                  alt="Stairs"
                  className="absolute inset-0 w-full h-full object-cover rounded shadow-md border-4 border-white"
                />
                <img
                  src="https://bootstrapmade.com/content/demo/Append/assets/img/features-light-1.jpg"
                  alt="Lamp"
                  className="absolute top-12 left-[-20%] sm:top-16 sm:left-[-25%] md:top-20 md:left-[-30%] w-full h-[90%] object-cover rounded shadow-md border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Row */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
          <div className="flex-1 w-full">
            <div data-aos="fade-up">
              <img
                src="https://bootstrapmade.com/content/demo/Append/assets/img/features-light-3.jpg"
                alt=""
                className="w-full h-auto object-cover rounded shadow-md border-4 border-white"
              />
            </div>
          </div>
          <div className="flex-1 w-full mt-8 lg:mt-20 text-center lg:text-left">
            <div data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl font-semibold">
                Sunt consequatur ad ut est nulla
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                voluptas dolor doloremque.
              </p>
              <ul className="list-disc list-inside marker:text-red-500 text-gray-700 mt-4 text-left">
                <li>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
                </li>
              </ul>
              <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
