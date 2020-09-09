<template>
  <div class="container">
    <div class="back">
      <!--      basic back button routing-->
      <router-link class="back-button" to="/posts">Back</router-link>
    </div>
    <!--    display the current posts title and body-->
    <h1>{{ post.title }}</h1>
    <h3>{{ post.body }}</h3>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: undefined
    };
  },
  beforeMount() {
    // Get posts based off of route parameters
    fetch(`https://raw.githubusercontent.com/willdoescode/webposts/master/posts/posts.json`).then(data => data.json()).then(res => this.post = {...res[this.$route.params.id]}).then(what => console.log(what))
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: black;
}
</style>
