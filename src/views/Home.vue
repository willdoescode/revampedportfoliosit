<template>
  <div class="home">
    <b-breadcrumb>
      <b-breadcrumb-item active
        ><b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon>
        Home</b-breadcrumb-item
      >
    </b-breadcrumb>
    <Me />
  </div>
</template>

<script>
import Me from "@/components/Me";

export default {
  name: "Home",
  components: {
    Me
  }
};
</script>

<style lang="scss" scoped>
</style>
