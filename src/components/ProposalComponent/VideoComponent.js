import React from "react";
import ReactPlayer from "react-player/lazy";
const VideoComponent = ({ url }) => {
  return (
    <div className="mt-10 w-full h-44">
      <ReactPlayer
        url={url}
        muted
        controls
        // playing={false}
        loop
        width="100%"
        height="100%"
        pip
      />
    </div>
  );
};

export default VideoComponent;
