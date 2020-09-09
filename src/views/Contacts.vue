<template>
  <div class="container">
    <a target="_blank" href="https://github.com/willdoescode" @click="gitCopy"
      >
      My Github
    </a>
    <a target="_blank" href="mailto:williamlane923@gmail.com" @click="emailCopy"
    >
      Email Me
    </a>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  methods: {
    emailCopy() {
      this.$copyText("williamlane923@gmail.com").then(e => {
        console.log(e.text);
      });
    },
    gitCopy() {
      this.$copyText("https://github.com/willdoescode").then(e => {
        console.log(e.text);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% auto;
  a {
    color: #2c3e50;
    border: 1px solid #4c4177;
    width: 200px;
    flex-grow: 1;
    font-size: 26px;
    transition: 0.3s;
    &:hover {
      text-decoration: none;
      color: #42b983;
      border: 1px solid #42b983;
    }
  }
}
</style>
