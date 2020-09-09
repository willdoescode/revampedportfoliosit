<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Will Does Tech</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="link" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/about">About</router-link>
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
