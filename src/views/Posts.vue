<template>
  <div class="what">
    <b-breadcrumb>
      <b-breadcrumb-item href="/">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Posts</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="main">
      <div class="post" v-for="post in posts" :key="post">
        <router-link
          class="nav-link"
          :to="{ name: 'post', params: { id: post.id } }"
        >
          <div>
            <div class="title">
              {{ post.title }}
            </div>
            <div class="desc">
              <p>{{ post.desc }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      base: "/posts/"
    };
  },
  methods: {
    getAmount() {
      // I fetch all of the post data in json
      fetch(`https://raw.githubusercontent.com/willdoescode/webposts/master/posts/posts.json`)
        .then(res => res.json())
        .then(data => (this.posts = data));
    }
  },
  beforeMount() {
    this.getAmount();
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.main {
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 300px;
  margin: 10% auto;
  .post {
    justify-content: center;
    position: relative;
    width: 300px;
    flex-grow: 1;
    .title {
      color: black;
      font-weight: bold;
      font-size: 24px;
      transition: 0.3s;
      &:hover {
        color: #42b983;
        text-decoration: underline;
      }
    }
    .desc {
      color: black;
      font-size: 18px;
      transition: 0.3s;
    }
  }
}
</style>
