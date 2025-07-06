import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
const testimonials = [
  {
    name: "Matt Brandon",
    title: "Freelancer",
    image:
      "https://bootstrapmade.com/content/demo/Append/assets/img/testimonials/testimonials-4.jpg",
    rating: 5,
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam.",
  },
  {
    name: "John Doe",
    title: "Designer",
    image:
      "https://bootstrapmade.com/content/demo/Append/assets/img/testimonials/testimonials-1.jpg",
    rating: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    name: "Sara Smith",
    title: "Developer",
    image:
      "https://bootstrapmade.com/content/demo/Append/assets/img/testimonials/testimonials-2.jpg",
    rating: 5,
    quote:
      "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    name: "Michael Lee",
    title: "Entrepreneur",
    image:
      "https://bootstrapmade.com/content/demo/Append/assets/img/testimonials/testimonials-3.jpg",
    rating: 5,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFading(false);
      }, 500); // Match CSS transition duration
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsFading(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <>
      <div className="bg-[#f9f9f9] py-6 mt-8">
        <div
          className="flex gap-3 justify-center items-center mt-16"
          data-aos="fade-up"
        >
          <div className="border-t-2 border-red-700 w-16 mt-2"></div>
          <h1 className="text-2xl sm:text-3xl font-bold">Team</h1>
          <div className="border-t-2 border-red-700 w-16 mt-2"></div>
        </div>
        <p className="text-center text-gray-500 mt-4 px-4" data-aos="fade-up">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        {/* Responsive Grid for Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 mt-10">
          {[
            {
              name: "Walter White",
              title: "Chief Executive Officer",
              img: "https://bootstrapmade.com/content/demo/Append/assets/img/team/team-1.jpg",
              desc: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
            },
            {
              name: "Sarah Johnson",
              title: "Product Manager",
              img: "https://bootstrapmade.com/content/demo/Append/assets/img/team/team-2.jpg",
              desc: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
            },
            {
              name: "William Anderson",
              title: "CTO",
              img: "https://bootstrapmade.com/content/demo/Append/assets/img/team/team-3.jpg",
              desc: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
            },
            {
              name: "Amanda Jepson",
              title: "",
              img: "https://bootstrapmade.com/content/demo/Append/assets/img/team/team-4.jpg",
              desc: "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
            },
            {
              name: "Brian Doe",
              title: "",
              img: "https://bootstrapmade.com/content/demo/Append/assets/img/team/team-5.jpg",
              desc: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
            },
            {
              name: "Josepha Palas",
              title: "",
              img: "https://bootstrapmade.com/content/demo/Append/assets/img/team/team-6.jpg",
              desc: "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs mx-auto group"
            >
              <div className="relative" data-aos="fade-up">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-[170px] w-[170px] rounded-full border-[6px] shadow-md border-gray-400"
                />
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  {["facebook", "twitter", "linkedin", "instagram"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-white hover:text-red-500"
                      >
                        <i className={`bi bi-${platform} text-xl`}></i>
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-sm font-semibold" data-aos="fade-up">
                  {member.name}
                </h1>
                <p
                  className="text-sm mt-1 font-medium text-gray-600"
                  data-aos="fade-up"
                >
                  {member.title}
                </p>
                <p className="text-sm mt-2 text-gray-500" data-aos="fade-up">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[url('https://bootstrapmade.com/content/demo/Append/assets/img/cta-bg.jpg')] bg-cover bg-center bg-fixed min-h-[50vh] w-full relative overflow-hidden mt-24 mb-12">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-8 text-white z-10 relative text-center">
          <h1 className="text-3xl font-bold mb-4">Call To Action</h1>
          <p className="mb-6 max-w-2xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="border-2 font-semibold text-sm border-white px-6 py-2 hover:bg-[#d33b3b] hover:text-white transition duration-300">
            Call To Action
          </button>
        </div>
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Section */}
          <div className="text-center lg:text-left py-6 sm:py-10 w-full lg:w-1/2 mt-4 lg:mt-20">
            <h1
              className="text-2xl sm:text-3xl font-bold mb-2"
              data-aos="fade-up"
            >
              Testimonials
            </h1>
            <p className="text-sm sm:text-base px-4 sm:px-0" data-aos="fade-up">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </div>

          {/* Right Section */}
          <div
            className="w-full lg:max-w-3xl mx-auto text-start py-6 sm:py-10 "
            data-aos="fade-up"
          >
            <div
              className={`relative bg-white p-4 sm:p-6 rounded-lg shadow-xl testimonial-container ${
                isFading ? "fade-out" : "fade-in"
              }`}
            >
              <div className="flex justify-start mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500 ">
                {testimonials[currentIndex].title}
              </p>
              <div className="flex justify-start my-2 text-yellow-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="italic text-gray-700 mt-4 px-2 sm:px-4 relative">
                <FaQuoteLeft className="absolute left-2 top-0 text-pink-300 text-xl " />
                <p className="px-6">{testimonials[currentIndex].quote}</p>
                <FaQuoteRight className="absolute right-2 bottom-0 text-pink-300 text-xl" />
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => {
                      setIsFading(true);
                      setTimeout(() => {
                        setCurrentIndex(i);
                        setIsFading(false);
                      }, 500);
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      currentIndex === i ? "bg-red-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
