import React from "react";

const VideoDialog = ({ open, setOpen,videoUrl }) => {
  if (!open) return null;
  if(!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Dialog Box */}
      <div className="relative w-full max-w-[725px] bg-craft-panel text-white p-6 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-white opacity-70 hover:opacity-100 focus:outline-none"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>

        {/* Header */}
        <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
          <h2 className="text-lg font-semibold leading-none tracking-tight">Demo Video</h2>
          <p className="text-sm text-white">
            {videoUrl.title}
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-md">
          <video
            className="absolute top-0 left-0 w-full h-full"
            controls
            autoPlay
          >
            <source
              src={videoUrl.url}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoDialog;
