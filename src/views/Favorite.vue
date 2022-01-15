<template>
  <div class="favorites-container">
    <div class="video-container" v-for="video in videos" :key="video.id">
      <favorite-video :video="video"> </favorite-video>
    </div>
  </div>
</template>

<script>
import { getVideos } from "@/service/api";
import FavoriteVideo from "@/components/FavoriteVideo";

export default {
  name: "FavoritePage",
  components: { FavoriteVideo },
  data() {
    return {
      videos: [],
    };
  },
  async mounted() {
    const { data } = await getVideos();
    this.videos = data;

    console.log("this.videos", this.videos);
  },
};
</script>

<style></style>
