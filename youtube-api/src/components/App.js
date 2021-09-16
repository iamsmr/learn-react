import SearchBar from "./SearchBar";
import "../App.css";
import youtube from "../apis/youtube";
import { useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handelSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });
    setVideos(() => response.data.items);
    setSelectedVideo(null);
  };

  const handelVideoSelect = (video) => {
    setSelectedVideo(() => video);
    console.log(video);
  };
  return (
    <div className="App">
      <SearchBar handelSubmit={handelSubmit} />
      <div className="video-grid">
        {selectedVideo && <VideoDetail video={selectedVideo} />}
        <VideoList videos={videos} handelVideoSelect={handelVideoSelect} />
      </div>
    </div>
  );
};

export default App;
