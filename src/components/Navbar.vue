<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Will Does Tech</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link class="link" to="/">Home</router-link></b-nav-item>
          <b-nav-item><router-link class="link" to="/about">About</router-link></b-nav-item>
          <b-nav-item><router-link class="link" to="/contacts">Contacts</router-link></b-nav-item>
          <b-nav-item><router-link class="link" to="/webdesign">Webdesign</router-link></b-nav-item>
          <b-nav-item><router-link class="link" to="/posts">Posts</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
<style lang="scss" scoped>
a {
  color: white;
  transition: 0.3s;
  &:hover {
    text-decoration: none;
    color: #2a5470 !important;
  }
  &.router-link-exact-active {
    color: #2a5470;
  }
}
</style>
