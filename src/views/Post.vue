<template>
  <div class="container">
    <div class="back">
      <router-link class="btn-primary btn" to="/posts">Back</router-link>
    </div>
    <div class="post">
      <!--    display the current posts title and body-->
      <h1>{{ post.title }}</h1>
      <h3>{{ post.body }}</h3>
    </div>
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
  margin: 10% auto;
  max-width: 800px;
  .post {
    background-color: #4c4177;
    background-image: linear-gradient(315deg, #4c4177, #2a5470);
    padding: 10px;
    border-radius: 15px;
    color: white;
    h1 {
      font-weight: bold;
    }
  }
}
.btn {
  float: left;
  margin-right: -70px;
}
</style>
