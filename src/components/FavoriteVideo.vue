<template>
  <div class="video-container" @mouseover="showGif" @mouseleave="showImage">
    <div class="image">
      <img :src="thumbnail" alt="" />
      <div class="time">
        <span>scond</span>
      </div>
    </div>

    <div class="video-information">
      <span class="title">{{ video.title }}</span>
      <span>count • month</span>

      <div class="owner-container">
        <img src="" alt="owner-photo" />
        <span>owner name</span>
      </div>

      <span class="description">description</span>
    </div>
  </div>
</template>

<script>
import { secondToHms } from "@/service/micro";

export default {
  name: "FavoriteVideo",
  props: {
    video: Object,
  },
  data() {
    return {
      thumbnail:
        this.video.coverImage ??
        "https://www.cyberlink.com/prog/learning-center/html/4090/PDR19-YouTube-21_How_to_Name_Your_YouTube_Videos/img/No-Thumbnail.png",
    };
  },
  computed: {
    second() {
      return secondToHms(this.video.viewCount);
    },
  },
  mounted() {
    console.log("video", this.video);
  },
  methods: {
    showGif() {
      this.thumbnail = this.video.hoverImage;
    },
    showImage() {
      this.thumbnail = this.video.coverImage;
    },
  },
};
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
}

.video-container .image {
  width: 360px;
  height: 200px;
  position: relative;
}

.video-container .time {
  padding: 2px 4px;
  background-color: black;
  bottom: 5px;
  right: 5px;
  position: absolute;
  color: white;
}

.video-container .image img {
  width: 100%;
  height: 100%;
}

.video-information {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
</style>
