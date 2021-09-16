import SearchBar from "./SearchBar";
import React, { useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";

export default function App() {
  const [images, setImages] = useState([]);
  const handelSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 50 },
      headers: {
        Authorization: "Client-ID C5xaKsrG4qww37g6y2M37MWWIdznKAl5CNnGIrUwHNw",
      },
    });
    if (response.status === 200) {
      setImages(response.data.results);
      console.log(response);
    }
  };
  return (
    <div className="App">
      <SearchBar handelSubmit={handelSubmit} />
      <ImageList images={images} />
    </div>
  );
}
