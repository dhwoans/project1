<template>
  <div class="banner-container">
    <p :class="['banner', isAlert ? 'banner-error' : 'banner-info']">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AlertBanner",
  props: {
    isAlert: Boolean,
    text: String,
  },
};
</script>

<style scoped>
.banner-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 102;
}
.banner {
  padding: var(--size-regular);
  font-size: var(--font-small);
  color: var(--color-white);
}

.banner-error {
  background-color: var(--color-red);
}

.banner-info {
  margin: 0;
  background-color: var(--color-green);
}
</style>
