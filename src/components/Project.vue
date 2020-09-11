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
    <h3><img alt="lang type" :src="langs[lang]" /></h3>
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
      image: alert,
      langs: {
        Java: "https://forthebadge.com/images/badges/made-with-java.svg",
        Python: "https://forthebadge.com/images/badges/made-with-python.svg",
        Js: "https://forthebadge.com/images/badges/made-with-javascript.svg",
        Node: "https://forthebadge.com/images/badges/made-with-javascript.svg",
        v: "https://forthebadge.com/images/badges/made-with-vue.svg"
      }
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
    color: indianred;
    transition: 0.3s;
    &:hover {
      color: palevioletred;
    }
  }
}
</style>
