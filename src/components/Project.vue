<template>
  <div class="project">
    <a
      target="_blank"
      :href="url"
    >
      <h3>
        {{ name }}
      </h3>
    </a>
    <h3>lang: {{ lang }}</h3>
    <img class="image" :src="cool" alt="project image" style="width: 40vw" />
  </div>
</template>
<script>
export default {
  name: "Project",
  props: {
    name: String,
    lang: String,
    cool: String,
    url: String
  },
  data() {
    return {
      image: alert
    };
  }
};
</script>
<style lang="scss" scoped>
.project {
  h3 {
    margin-left: 1.3vw;
  }
  .image {
    min-width: 300px;
  }

  a {
    color: #42b983;
    transition: 0.3s;
    &:hover {
      color: #2a5470;
    }
  }
}
</style>
