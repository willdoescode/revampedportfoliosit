<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Will Does Tech</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-nav tabs justified>
          <b-nav-item>
            <router-link class="link" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/projects">Projects</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/contacts">Contacts</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/webdesign">Webdesign</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/posts">Posts</router-link>
          </b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

a {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: bolder;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #a5c7b7 !important;
  }
  &.router-link-exact-active {
    color: #a5c7b7;
  }
}
</style>
