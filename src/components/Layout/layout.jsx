// VideoLayout.jsx
import React from "react";

const VideoLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/stt.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* Section Content */}
      {children}
    </div>
  );
};

export default VideoLayout;
