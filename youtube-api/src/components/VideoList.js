import VideoItem from "./VideoItem";

const ViewList = ({ videos, handelVideoSelect }) => {
  const rendredList = videos.map((video) => (
    <VideoItem key={video.id.videoId} handelVideoSelect={handelVideoSelect} video={video} />
  ));
  return <div className="video-list">{rendredList}</div>;
};

export default ViewList;
