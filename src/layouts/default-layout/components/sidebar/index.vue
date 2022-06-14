<template>
  <a-layout-sider
    class="layout-sider"
    breakpoint="xl"
    :collapsible="true"
    :width="220"
    :hide-trigger="true"
    :collapsed="collapsed"
  >
    <div class="menu-wrapper">
      <MenuContent />
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import MenuContent from './components/menu-content.vue';
import { useAppStore } from '@/store/modules/app';
import { computed } from 'vue';

const appStore = useAppStore();
const collapsed = computed(() => appStore.appState.menuCollapse);
</script>

<style scoped lang="less">
.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  padding-top: 60px;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: '';
  }
  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
  }
}
.menu-wrapper {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  :deep(.arco-menu) {
    ::-webkit-scrollbar {
      width: 12px;
      height: 4px;
    }
    ::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 7px;
      background-color: var(--color-text-4);
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-text-3);
    }
  }
}
</style>
