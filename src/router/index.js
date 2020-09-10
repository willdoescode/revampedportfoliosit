import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "@/views/Posts";
import Post from "@/views/Post";
import Webdesign from "@/views/Webdesign";
import Contacts from "@/views/Contacts";
import Blog from "@/webdesing/Blog";
import Projects from "@/views/Projects";

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
    component: Contacts,
    meta: {
      title: "Contacts - Will Does Tech"
    }
  },
  {
    path: "/webdesign",
    name: "Web Design",
    component: Webdesign,
    meta: {
      title: "Webdesign - Will Does Tech"
    }
  },
  {
    path: "webdesign/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: "Blog Assignment - Will Does Tech"
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Projects - Will Does Tech"
    }
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
    meta: {
      title: "Posts - Will Does Tech"
    }
  },
  {
    path: "/posts/:id",
    name: "post",
    component: Post,
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
