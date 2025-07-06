import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="bg-[#f9f9f9] py-2 px-4 mt-8 mb-8">
        <div
          className="flex gap-3 justify-center items-center mt-6"
          data-aos="fade-up"
        >
          <div className="border-t-2 border-red-700 w-16 mt-2"></div>
          <h1 className="text-2xl sm:text-3xl font-bold">Contact</h1>
          <div className="border-t-2 border-red-700 w-16 mt-2"></div>
        </div>
        <p
          className="text-sm text-center mb-4 text-gray-600"
          data-aos="fade-up"
        >
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info Boxes */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow rounded" data-aos="fade-up">
              <i className="bi bi-geo-alt text-2xl text-red-500 mb-2 inline-block"></i>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="text-sm text-gray-600">A108 Adam Street</p>
              <p className="text-sm text-gray-600">New York, NY 535022</p>
            </div>

            <div className="bg-white p-6 shadow rounded" data-aos="fade-up">
              <i className="bi bi-telephone text-2xl text-red-500 mb-2 inline-block"></i>
              <h3 className="font-bold text-lg">Call Us</h3>
              <p className="text-sm text-gray-600">+1 5589 55488 55</p>
              <p className="text-sm text-gray-600">+1 6678 254445 41</p>
            </div>

            <div className="bg-white p-6 shadow rounded" data-aos="fade-up">
              <i className="bi bi-envelope text-2xl text-red-500 mb-2 inline-block"></i>
              <h3 className="font-bold text-lg">Email Us</h3>
              <p className="text-sm text-gray-600">info@example.com</p>
              <p className="text-sm text-gray-600">contact@example.com</p>
            </div>

            <div className="bg-white p-6 shadow rounded" data-aos="fade-up">
              <i className="bi bi-clock text-2xl text-red-500 mb-2 inline-block"></i>
              <h3 className="font-bold text-lg">Open Hours</h3>
              <p className="text-sm text-gray-600">Monday - Friday</p>
              <p className="text-sm text-gray-600">9:00AM - 05:00PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow rounded" data-aos="fade-up">
            <form>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border px-4 py-2 rounded outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border px-4 py-2 rounded outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border px-4 py-2 rounded mb-4 outline-none"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full border px-4 py-2 rounded mb-4 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
