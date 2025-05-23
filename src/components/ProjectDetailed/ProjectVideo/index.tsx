import React from "react";

function ProjectVideo() {
  return (
    <div className="w-full h-[300px] md:h-[640px] overflow-hidden">
      <video
        src="/images/intro/video/video1.mp4" // <-- update this to your video file
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProjectVideo;
