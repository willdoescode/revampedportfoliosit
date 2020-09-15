<template>
  <div class="container">
    <router-link :to="{ name: 'Blog' }">Blog</router-link>
  </div>
</template>

<script>
export default {
  name: "Webdesign"
};
</script>

<style lang="scss" scoped>
.container {
  color: black;
}
</style>
