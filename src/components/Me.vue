<template>
  <div class="container">
    <img
      @mouseenter="play"
      @mouseleave="pause"
      :src="require('../assets/Vinyl-PNG-Transparent-Image.png')"
      alt="me"
      class="me"
    />
    <h3>My name is Will Lane</h3>
  </div>
</template>

<script>
export default {
  name: "Me",
  methods: {
    play() {
      this.player.play();
    },
    pause() {
      this.player.pause();
    }
  },
  data() {
    return {
      player: new Audio()
    };
  },
  created() {
    this.player.src = require("../assets/audio1.mp4");
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
$margin: 25px;

.container {
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 80px;
  h3 {
    margin-top: $margin;
  }
}

.me {
  font-family: "Source Sans Pro", sans-serif;
  width: 300px;
  border-radius: 50%;
  transition: 0.8s;
  padding: 2px;
  background-color: #5d4257;
  background-image: linear-gradient(315deg, #5d4257 0%, #a5c7b7 74%);
  animation: spin 2.5s infinite linear;
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
    $margin: 25px;
  }
  to {
    transform: rotate(360deg);
    $margin: 60px;
  }
}
</style>
