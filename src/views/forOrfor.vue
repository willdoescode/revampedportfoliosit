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
      <b-breadcrumb-item active>404</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="container">
      <div class="thing">
        <h1 class="main">
          404
        </h1>
        <h2 class="submain">The page you are looking for does not exist</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forOfor"
};
</script>
<style lang="scss" scoped>
.thing {
  margin: 10% auto;
  cursor: default;
  h1 {
    font-weight: 900;
    font-size: 60px;
    color: #ff6961;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
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
