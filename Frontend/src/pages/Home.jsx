import React from "react";
import CarouselBar from "../components/Carousel";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CarouselBar />
      <div className="text-center mt-10 text-3xl font-semibold text-gray-800">
        Welcome to the Indian Hackathon Platform 🚀
      </div>
    </div>
  );
};

export default Home;
