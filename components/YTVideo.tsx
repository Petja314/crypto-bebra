import React from "react";

interface Props {
  className?: string;
}

const YtVideo: React.FC<Props> = () => {
  return (
    <div className={"my-[60px] lg:my-[160px] px-[22px] lg:px-[116px] "}>
      <div
        className={"max-w-full w-full h-auto flex justify-center items-center "}
      >
        <iframe
          className="border rounded-[30px] w-[380px] h-[230px] sm:w-[700px] sm:h-[400px] lg:w-[1210px] lg:h-[683px] "
          // className={"border rounded-[30px]"}
          // width="330"
          // height="188"
          src="https://www.youtube.com/embed/Eof9PbfCkC4?start=62"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default YtVideo;
