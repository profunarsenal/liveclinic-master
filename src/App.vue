<template>
  <div class="wrapper">
    <app-header />

    <main class="main">
      <router-view />
    </main>

    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader';
import AppFooter from '@/components/layouts/AppFooter';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-width: 320px;
  min-height: 100%;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  color: $color-dark;
  background-color: $color-white;
}

.main {
  flex: 1 1 auto;
}
</style>