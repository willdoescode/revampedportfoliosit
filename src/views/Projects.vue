<template>
  <div class="what">
    <b-breadcrumb>
      <b-breadcrumb-item class="home" href="/">
        <b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Projects</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="container">
      <vue-scroll-progress-bar
        height="1vh"
        background-color="linear-gradient(315deg, #d2ccc4 0%, #2f4353 74%)"
      />
      <div class="page">
        <h1>
          All of my so very cool projects!
        </h1>
        <div class="projects">
          <Project
            name="This Site"
            lang="v"
            :cool="require('../assets/project1.png')"
            url="https://github.com/willdoescode/revampedportfoliosit"
          />
          <Project
            name="Year Progress Twitter Bot"
            lang="Python"
            :cool="require('../assets/project5.png')"
            url="https://github.com/willdoescode/twittertrackyearprogress"
          />
          <Project
            name="Wills Auto Click"
            lang="Java"
            :cool="require('../assets/project2.png')"
            url="https://github.com/willdoescode/willsautoclick"
          />
          <Project
            name="Python Discord Bot"
            lang="Python"
            :cool="require('../assets/project3.png')"
            url="https://github.com/willdoescode/bot"
          />
          <Project
            name="Node Discord Bot"
            lang="Node"
            :cool="require('../assets/project4.png')"
            url="https://github.com/willdoescode/nodebot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project";
export default {
  name: "Projects",
  data() {
    return {
      project1: require("../assets/project1.png"),
      project2: require("../assets/project2.png")
    };
  },
  components: {
    Project
  }
};
</script>
<style lang="scss" scoped>
.page {
  justify-content: center;
  h1 {
    margin-top: 20px;
  }
  .projects {
    margin: 10% auto;
    max-width: 40vw;
    text-align: left;
  }
}

.home a {
  color: #42b983;
  transition: 0.3s;
  &:hover {
    color: turquoise;
    text-decoration: none;
  }
}
</style>
