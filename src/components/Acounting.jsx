import React, { useEffect, useRef, useState } from "react";

const Card = ({ title, targetValue, color, textColor, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const end = parseInt(targetValue, 10);
    const duration = 4000;
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(counter);
        return;
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [targetValue, animate]);

  return (
    <div>
      <div className="min-h-[50vh]  flex flex-col items-center justify-center text-center  p-5 hover:scale-105 transition-transform">
        <p className=" text-white font-bold text-4xl z-10">
          {animate ? count : 0}
        </p>
        <h3 className="text-lg text-white font-semibold mt-2 z-10">{title}</h3>
      </div>
    </div>
  );
};

const Accounting = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(ref.current); // Trigger only once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const cards = [
    {
      title: "Total Revenue",
      targetValue: 232,
      color: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      title: "Total Expenses",
      targetValue: 534,
      color: "bg-red-100",
      textColor: "text-red-800",
    },
    {
      title: "Net Profit",
      targetValue: 350,
      color: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      title: "Pending Invoices",
      targetValue: 32,
      color: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
  ];

  return (
    <div
      ref={ref}
      className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          targetValue={card.targetValue}
          color={card.color}
          textColor={card.textColor}
          animate={animate}
        />
      ))}
    </div>
  );
};

export default Accounting;
