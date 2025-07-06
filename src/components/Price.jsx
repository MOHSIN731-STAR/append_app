import React, { useState, useEffect } from "react";
import { BsBox, BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FaRocket, FaPaperPlane, FaCheck, FaTimes } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Price = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  // Use an array to track open FAQ items
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur minima, eius optio pariatur repudiandae laudantium! Impedit reprehenderit voluptas tempora temporibus. Blanditiis veritatis aperiam debitis fuga dicta cum quasi nulla reiciendis?",
    },
    {
      question:
        "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur minima, eius optio pariatur repudiandae laudantium! Impedit reprehenderit voluptas tempora temporibus. Blanditiis veritatis aperiam debitis fuga dicta cum quasi nulla reiciendis?",
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur minima, eius optio pariatur repudiandae laudantium! Impedit reprehenderit voluptas tempora temporibus. Blanditiis veritatis aperiam debitis fuga dicta cum quasi nulla reiciendis?",
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur minima, eius optio pariatur repudiandae laudantium! Impedit reprehenderit voluptas tempora temporibus. Blanditiis veritatis aperiam debitis fuga dicta cum quasi nulla reiciendis?",
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui",
    },
  ];

  return (
    <>
      <div className=" mt-20">
        <div className="container mx-auto px-4 ">
          <div data-aos="fade-up">
            <div className="flex gap-3 justify-center items-center mb-4">
              <div className="border-t-2 border-red-700 w-16 mt-2"></div>
              <h1 className="text-2xl sm:text-3xl font-bold">Pricing</h1>
              <div className="border-t-2 border-red-700 w-16 mt-2"></div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto text-center">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch mt-4  px-4">
            {/* Free Plan */}
            <div
              data-aos="fade-up"
              className="shadow-lg h-[500px]  md:mt-12 w-full md:w-[30%] rounded-lg border"
            >
              <div className="flex flex-col justify-center items-center py-4 p-4 h-full">
                <h1 className="mb-2 text-lg font-semibold">Free Plan</h1>
                <span className="flex items-center justify-center rounded-full border-[9px] border-[#fcecec]">
                  <span className="flex items-center justify-center rounded-full border-[7px] border-[#f8cbcb] bg-[#e84545] p-6">
                    <BsBox size={25} className="text-white" />
                  </span>
                </span>
                <p className="mt-6 text-center">
                  <sup className="text-3xl font-bold text-[#e84545]">$</sup>
                  <span className="text-5xl font-bold text-[#e84545]">0</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="space-y-2 mt-5 w-full">
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Quam adipiscing vitae proin
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Nec feugiat nisl pretium
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Nulla at volutpat diam uteera
                  </li>
                  <li className="flex items-center py-1 line-through text-gray-300">
                    <FaTimes className="text-gray-300 mr-2" />
                    Pharetra massa massa ultricies
                  </li>
                  <li className="flex items-center py-1 line-through text-gray-300">
                    <FaTimes className="text-gray-300 mr-2" />
                    Massa ultricies mi quis hendrerit
                  </li>
                </ul>
                <button className="mt-5 mb-4 hover:bg-[#e84545] hover:text-white p-2 border px-8 rounded-full font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Business Plan */}
            <div
              data-aos="fade-up"
              className="border-4 border-[#e84545] shadow-lg h-[600px] w-full md:w-[30%] rounded-lg"
            >
              <div className="flex flex-col justify-center items-center p-4 h-full">
                <h1 className="mb-2 text-lg font-semibold">Business Plan</h1>
                <span className="flex items-center justify-center rounded-full border-[9px] border-[#fcecec]">
                  <span className="flex items-center justify-center rounded-full border-[7px] border-[#f8cbcb] bg-[#e84545] p-6">
                    <FaRocket size={25} className="text-white" />
                  </span>
                </span>
                <p className="mt-6 text-center">
                  <sup className="text-3xl font-bold text-[#e84545]">$</sup>
                  <span className="text-5xl font-bold text-[#e84545]">29</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="space-y-2 mt-5 w-full">
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Quam adipiscing vitae proin
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Nec feugiat nisl pretium
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Nulla at volutpat diam uteera
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Pharetra massa massa ultricies
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Massa ultricies mi quis hendrerit
                  </li>
                </ul>
                <button className="mt-5 hover:bg-[#e84545] hover:text-white p-2 border px-8 rounded-full font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Developer Plan */}
            <div
              data-aos="fade-up"
              className="border shadow-lg h-[500px] md:mt-12 w-full md:w-[30%] rounded-lg"
            >
              <div className="flex flex-col justify-center items-center p-4 h-full">
                <h1 className="mb-2 text-lg font-semibold">Developer Plan</h1>
                <span className="flex items-center justify-center rounded-full border-[9px] border-[#fcecec]">
                  <span className="flex items-center justify-center rounded-full border-[7px] border-[#f8cbcb] bg-[#e84545] p-6">
                    <FaPaperPlane className="text-white text-xl" />
                  </span>
                </span>
                <p className="mt-6 text-center">
                  <sup className="text-3xl font-bold text-[#e84545]">$</sup>
                  <span className="text-5xl font-bold text-[#e84545]">0</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="space-y-2 mt-5 w-full">
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Quam adipiscing vitae proin
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Nec feugiat nisl pretium
                  </li>
                  <li className="flex items-center py-1">
                    <FaCheck className="text-green-600 mr-2" />
                    Nulla at volutpat diam uteera
                  </li>
                  <li className="flex items-center py-1 line-through text-gray-300">
                    <FaTimes className="text-gray-300 mr-2" />
                    Pharetra massa massa ultricies
                  </li>
                  <li className="flex items-center py-1 line-through text-gray-300">
                    <FaTimes className="text-gray-300 mr-2" />
                    Massa ultricies mi quis hendrerit
                  </li>
                </ul>
                <button className="mt-5 mb-4 hover:bg-[#e84545] hover:text-white p-2 border px-8 rounded-full font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6 mx-4">
          <div className="md:w-1/2 mt-8">
            <span className="text-2xl font-normal" data-aos="fade-up">
              Frequently Asked
            </span>
            <h1 className="font-bold text-2xl" data-aos="fade-up">
              Questions
            </h1>
            <p className="text-gray-400 mt-2" data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="md:w-1/2">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-xl rounded mt-3 "
                data-aos="fade-up"
              >
                <div className="flex justify-between items-center">
                  <h1
                    className={`text-xl font-bold ${
                      openFaqs.includes(index) ? "text-[#e84545]" : ""
                    }`}
                  >
                    <span className="text-[#e84545]">{index + 1}.</span>{" "}
                    {faq.question}
                  </h1>
                  <span
                    onClick={() => toggleFaq(index)}
                    className={`cursor-pointer ${
                      openFaqs.includes(index) ? "text-[#e84545]" : ""
                    }`}
                  >
                    {openFaqs.includes(index) ? (
                      <BsChevronDown />
                    ) : (
                      <BsChevronRight />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqs.includes(index)
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
