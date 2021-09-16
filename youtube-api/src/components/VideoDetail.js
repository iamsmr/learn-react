const VideoDetail = ({ video }) => {
  if (!video) return <div></div>;
  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoDetail = (
    <div className="video-detials">
      <iframe src={videoSrc} title="video-title"></iframe>

      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
  return <div>{videoDetail}</div>;
};

export default VideoDetail;
