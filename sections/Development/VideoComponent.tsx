export interface VideoComponentProps {
    videoId: string;
    title: string;
    description: string;
    py?: string;
  }
  
  const VideoComponent = (
    { videoId, title, description, py = "0" }: VideoComponentProps,
  ) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}?color=white`;
  
    return (
      <div class="px-4 py-4 lg:px-[102px] flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div
          class={`lg:flex lg:py-${py}`}
        >
          <iframe
            class="w-full grow h-[202px] lg:w-[618px] lg:h-[366px]"
            src={videoSrc}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div class="flex flex-col bg-gray-100 w-full gap-3 justify-center items-center px-4 lg:w-[618px] lg:h-[366px] lg:px-0">
          <div class="font-bold pt-6 text-2xl uppercase px-0 lg:px-16 lg:pt-0">
            {title}
          </div>
          <div class="font-light text-sm pb-6 lg:pb-0 px-0 lg:px-16">
            {description}
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoComponent;
  