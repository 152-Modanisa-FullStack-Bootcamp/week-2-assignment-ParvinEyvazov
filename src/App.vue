<template>
  <div id="app">
    <div class="favorite-container">
      <span @click="goFavorite" class="favorite">Favorite</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goFavorite() {
      let user_id = "bootcamp";
      this.$router.push({ path: `/favorite/${user_id}` });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 10px 0 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.favorite-container {
  height: 50px;
  margin: 0% 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.favorite {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.3rem;
  border-radius: 10px;
  background-color: aliceblue;
}
</style>
