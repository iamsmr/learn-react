const VideoItem = ({ video, handelVideoSelect }) => {
  return (
    <div className="video-item" onClick={() => handelVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="video__thumbnail"
      />
      <div className="video__content">
        <h1 className="video__title">{video.snippet.title}</h1>
        <p className="video__description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
