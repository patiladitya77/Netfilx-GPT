type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="pt-[30%] md:pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-3xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black p-4 px-6 text-lg py-2 rounded-lg hover:bg-opacity-80">
          Play Now
        </button>
        <button className="hidden md:inline-block bg-gray-800 text-white p-4 px-8 text-lg py-2 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
