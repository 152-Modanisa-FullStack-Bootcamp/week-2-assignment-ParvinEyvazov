import axios from "axios";

export async function getVideos() {
  const videos = await axios.get(
    "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
  );

  console.log("videos", videos);
  return videos;
}
