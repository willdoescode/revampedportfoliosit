<template>
  <div class="container">
    <div class="page">
      <h1>
        All of my so very cool projects!
      </h1>
      <div class="projects">
        <div class="project">
          <a
            target="_blank"
            href="https://github.com/willdoescode/revampedportfoliosit"
          >
            <h3>
              This Site
            </h3>
          </a>
          <img :src="project1" alt="project image" style="width: 40vw" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      project1: require("../assets/project1.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.page {
  h1 {
    margin-top: 20px;
  }
  .projects {
    margin: 10% auto;
    max-width: 40vw;
    text-align: left;
    .project {
      h3 {
        margin-left: 1vw;
      }
    }
  }
}
</style>
