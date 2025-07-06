import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const blogData = [
    {
      category: "Politics",
      title: "Dolorum optio tempore voluptas dignissimos",
      author: "Maria Doe",
      date: "Jan 1, 2022",
      image:
        "https://bootstrapmade.com/content/demo/Append/assets/img/blog/blog-1.jpg",
    },
    {
      category: "Sports",
      title: "Nisi magni odit consequatur autem nulla dolorem",
      author: "Allisa Mayer",
      date: "Jun 25, 2022",
      image:
        "https://bootstrapmade.com/content/demo/Append/assets/img/blog/blog-2.jpg",
    },
    {
      category: "Entertainment",
      title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      author: "Mark Dower",
      date: "Jun 22, 2022",
      image:
        "https://bootstrapmade.com/content/demo/Append/assets/img/blog/blog-3.jpg",
    },
    {
      category: "Sports",
      title: "Non rem rerum nam cum quo minus olor distincti",
      author: "Lisa Neymar",
      date: "Jun 30, 2022",
      image:
        "		https://bootstrapmade.com/content/demo/Append/assets/img/blog/blog-4.jpg",
    },
    {
      category: "Politics",
      title: "Accusamus quaerat aliquam qui debitis facilis consequatur",
      author: "Denis Peterson",
      date: "Jan 30, 2022",
      image:
        "https://bootstrapmade.com/content/demo/Append/assets/img/blog/blog-5.jpg",
    },
    {
      category: "Entertainment",
      title: "Distinctio provident quibusdam numquam aperiam aut",
      author: "Mika Lendon",
      date: "Feb 14, 2022",
      image:
        "https://bootstrapmade.com/content/demo/Append/assets/img/blog/blog-6.jpg",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 py-10 px-4">
        <div
          className="flex gap-3 justify-center items-center mt-3"
          data-aos="fade-up"
        >
          <div className="border-t-2 border-red-700 w-16 mt-2"></div>
          <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
          <div className="border-t-2 border-red-700 w-16 mt-2"></div>
        </div>
        <p className="  text-center text-gray-500 mt-2 mb-4" data-aos="fade-up">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <p
                  className="text-sm text-red-500 font-medium mb-1"
                  data-aos="fade-up"
                >
                  {item.category}
                </p>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2"
                  data-aos="fade-up"
                >
                  {item.title}
                </h3>
                <div
                  className="flex items-center gap-2 text-sm text-gray-500"
                  data-aos="fade-up"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                    {item.author.split(" ")[0][0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
