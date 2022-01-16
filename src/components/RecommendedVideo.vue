<template>
  <div
    class="video-container"
    @mouseover="showGif"
    @mouseleave="showImage"
    @click="goVideoDetail"
  >
    <!-- Thumbnal & gif of the video -->
    <div class="image">
      <img :src="thumbnail" alt="" />
      <div class="time">
        <span>{{ second }}</span>
      </div>
    </div>

    <!-- Information about the video (title, view, date, publisher name, description) -->
    <div class="video-information">
      <div class="left-container">
        <img :src="video.ownerImage" alt="" />
      </div>
      <div class="right-container">
        <span class="title">{{ video.title }}</span>
        <span class="fade">{{ video.ownerName }}</span>
        <span class="fade"
          >{{ video.viewCount }} views • {{ video.publishDateInMonth }} months
          ago</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { secondToHms } from "@/service/micro";

export default {
  name: "RecommendedVideo",
  props: { video: Object },
  data() {
    return {
      // add default image if there is not any cover image
      thumbnail:
        this.video.coverImage ??
        "https://www.cyberlink.com/prog/learning-center/html/4090/PDR19-YouTube-21_How_to_Name_Your_YouTube_Videos/img/No-Thumbnail.png",
    };
  },
  computed: {
    // convert view count to second (just for showing all uniquely)
    second() {
      return secondToHms(this.video.viewCount);
    },
  },
  methods: {
    // hover:on showing gif
    showGif() {
      this.thumbnail = this.video.hoverImage;
    },
    // hover:off showing cover image
    showImage() {
      this.thumbnail = this.video.coverImage;
    },
    // going to details page
    goVideoDetail() {
      this.$router.push({ path: `/watch?id=${this.video.id}` });
    },
  },
};
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  width: 360px;
  cursor: pointer;
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

.video-container .video-information {
  display: flex;
  padding: 10px 0px;
}

.video-container .video-information .right-container {
  display: flex;
  flex-direction: column;
}

.video-container .video-information .right-container > * {
  margin-bottom: 5px;
}

.video-container .video-information .left-container {
  margin: 0px 10px;
}

.video-container .video-information .left-container img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.title {
  font-weight: bold;
  font-size: 1.1em;
}

.fade {
  color: #f5f5f585;
}

.fade:hover {
  color: white;
}
</style>
