import { useState, useEffect } from "react";
import Youtube from "../apis/Youtube";

function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    // console.log(term);
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
}

export default useVideos;
