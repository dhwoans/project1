<template>
  <div>
    <header class="notice-header">
      <h2>공지사항</h2>
      <p>Happy House의 뉴스 및 공지사항</p>
    </header>
    <main class="notice-main">
      <notice-items />
    </main>
  </div>
</template>

<script>
import NoticeItems from "@/components/notice/child/NoticeItems.vue";

export default {
  name: "NoticeMain",
  components: { NoticeItems },
};
</script>

<style scoped>
.notice-header {
  position: relative;
  padding-top: 2rem;
  text-align: center;
}

.notice-header h2 {
  margin-bottom: var(--size-large);
  font-weight: var(--weight-bold);
}

.notice-header p {
  color: var(--color-dark-grey);
}

.notice-header::after {
  position: absolute;
  left: 45%;
  top: 135%;
  content: "";
  width: 10%;
  height: 2px;
  background-color: var(--color-light-grey);
}

.notice-main {
  min-height: 90%;
  max-width: var(--display-maxWidth);
  margin: 0 auto;
  padding: 4rem var(--size-large) 5rem;
  text-align: center;
}

.notice-main p {
  padding: 6rem 0;
}
</style>
