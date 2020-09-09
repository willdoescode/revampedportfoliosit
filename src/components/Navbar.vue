<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Will Does Tech</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!--          default icon for the toggler-->
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <!--              about page button-->
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <!--              contacts page button-->
            <router-link class="nav-link" to="/contacts">Contacts</router-link>
          </li>
          <li class="nav-item">
            <!--              website design class page button-->
            <router-link class="nav-link" to="/webdesign">Web Design</router-link>
          </li>
          <li class="nav-item">
            <!--              posts page button-->
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <!--              my generic social media account name-->
            <span class="navbar-text">@willdoescode</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
