import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import {
  createRouter,
  createWebHistory,
} from "vue-router";

import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Hello from "./pages/Hello.vue";
import School from "./pages/School.vue";
import Personal from "./pages/Personal.vue";
import Other from "./pages/Other.vue";
import Tekstid from "./pages/Tekstid.vue";
import Tailwind from "./pages/Tailwind.vue";

import DomainStore1 from "./pages/school/Tailwind/Index.vue";
import DomainStore2 from "./pages/school/Tailwind/Andmed.vue";
import DomainStore3 from "./pages/school/Tailwind/Makse.vue";
import DomainStore4 from "./pages/school/Tailwind/Sooritatud.vue";

import Maja from "./pages/school/tekstid/Maja.vue";
import Pildid from "./pages/school/tekstid/Pildid.vue";
import Tekstid1 from "./pages/school/tekstid/Tekstid1.vue";
import Tekstid2 from "./pages/school/tekstid/Tekstid2.vue";
import Tekstid3 from "./pages/school/tekstid/Tekstid3.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/works", component: Works },
  { path: "/hello", component: Hello },
  { path: "/works/school", component: School },
  { path: "/works/personal", component: Personal },
  { path: "/works/other", component: Other },
  { path: "/works/school/tekstid", component: Tekstid },
  { path: "/works/school/tailwind", component: Tailwind },

  { path: "/works/school/tailwind/domainstore1", component: DomainStore1 },
  { path: "/works/school/tailwind/domainstore2", component: DomainStore2 },
  { path: "/works/school/tailwind/domainstore3", component: DomainStore3 },
  { path: "/works/school/tailwind/domainstore4", component: DomainStore4 },

  { path: "/works/school/tekstid/maja", component: Maja },
    { path: "/works/school/tekstid/pildid", component: Pildid },
    { path: "/works/school/tekstid/tekstid1", component: Tekstid1 },
    { path: "/works/school/tekstid/tekstid2", component: Tekstid2 },
    { path: "/works/school/tekstid/tekstid3", component: Tekstid3 },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);

app.use(router);

app.mount("#app");
