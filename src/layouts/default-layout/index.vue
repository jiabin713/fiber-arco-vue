<template>
  <a-layout class="layout">
    <div class="layout-navbar">
      <Navbar />
    </div>
    <a-layout>
      <Sidebar />
      <a-layout class="layout-content">
        <!-- <TabBar v-if="appStore.tabBar" /> -->
        <Content />
        <Footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Navbar from './components/navbar/index.vue';
import Sidebar from './components/sidebar/index.vue';
import Content from './components/content/index.vue';
import Footer from './components/footer/index.vue';
</script>

<style scoped lang="less">
@nav-size-height: 60px;
@layout-max-width: 1100px;
.layout {
  width: 100%;
  height: 100%;
}
.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}
.layout-content {
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>
