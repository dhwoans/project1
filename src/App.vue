<template>
  <div id="app">
    <!-- navbar -->
    <nav-bar />

    <!-- router-view -->
    <router-view />

    <!-- footer -->
    <contacts />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import NavBar from "@/components/layout/NavBar.vue";
import Contacts from "@/components/layout/Contacts.vue";

const noticeStore = "noticeStore";

export default {
  name: "App",
  components: {
    NavBar,
    Contacts,
  },
  created() {
    this.asyncGetNotices();
  },
  methods: {
    ...mapActions(noticeStore, ["asyncGetNotices"]),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
/* font */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap");

/* global css */
@import "./assets/css/reset.css";
@import "./assets/css/common.css";

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.section-container {
  flex: auto;
  padding-top: 4.375rem;
}

.body-container {
  padding: var(--size-large) 0;
}

/* Media Query for below w640 */
@media screen and (max-width: 640px) {
  .section-container {
    padding-top: 3.5rem;
  }
}
</style>
