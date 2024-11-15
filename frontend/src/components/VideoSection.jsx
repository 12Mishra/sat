import React from "react";
import Hero from "../assets/Hero.mp4";
import Feature from "../assets/Feature.mp4";

const VideoSection = () => {
  return (
    <>
      <div className="h-96 w-full overflow-hidden mt-8 relative">
        <video
          className="h-full w-full object-cover"
          muted
          autoPlay
          playsInline
          style={{ clipPath: "inset(0 0 10% 0)" }}
        >
          <source src={Hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </div>

      <div className="h-auto w-full text-center text-blue-500 font-bold text-4xl">
        Our Features
        <video
          className="h-auto w-full object-cover"
          muted
          autoPlay
          playsInline
          style={{ clipPath: "inset(0 0 8% 0)" }}
        >
          <source src={Feature} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoSection;
