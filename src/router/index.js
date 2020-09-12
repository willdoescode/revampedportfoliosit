import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "@/views/Posts";
import Post from "@/views/Post";
import Webdesign from "@/views/Webdesign";
import Contacts from "@/views/Contacts";
import Blog from "@/webdesing/Blog";
import Projects from "@/views/Projects";
import forOrfor from "@/views/forOrfor";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Will Lane"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: "About - Will Lane"
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
      title: "Contacts - Will Lane"
    }
  },
  {
    path: "/webdesign",
    name: "Web Design",
    component: Webdesign,
    meta: {
      title: "Webdesign - Will Lane"
    }
  },
  {
    path: "/webdesign/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: "Blog Assignment - Will Lane"
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Projects - Will Lane"
    }
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
    meta: {
      title: "Posts - Will Lane"
    }
  },
  {
    path: "/posts/:id",
    name: "post",
    component: Post,
    meta: {
      title: `Post - Will Lane`
    }
  },
  {
    path: "/404",
    component: forOrfor,
    meta: {
      title: "404 - Will Lane"
    }
  },
  {
    path: "*",
    redirect: "/404",
    meta: {
      title: "404 - Will Lane"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
