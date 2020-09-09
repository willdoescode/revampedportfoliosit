import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Will Does Tech"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: "About - Will Does Tech"
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts"),
    meta: {
      title: "Contacts - Will Does Tech"
    }
  },
  {
    path: "/webdesign",
    name: "Web Design",
    component: import("../views/Webdesign"),
    meta: {
      title: "Webdesign - Will Does Tech"
    }
  },
  {
    path: "/posts",
    name: "posts",
    component: import("../views/Posts"),
    meta: {
      title: "Posts - Will Does Tech"
    }
  },
  {
    path: "/posts/:id",
    name: "post",
    component: import("../views/Posts"),
    meta: {
      title: "Post - Will Does Tech"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
