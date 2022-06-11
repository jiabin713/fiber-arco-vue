<template>
  <a-layout-sider
    class="layout-sider"
    breakpoint="xl"
    :collapsed="collapsed"
    :collapsible="true"
    :width="menuWidth"
    :hide-trigger="true"
    @collapse="setCollapsed"
  >
    <div class="menu-wrapper">
      <a-menu
        :style="{ width: '200px', height: '100%' }"
        :default-open-keys="['0']"
        :default-selected-keys="['0_2']"
        show-collapse-button
        breakpoint="xl"
      >
        <a-sub-menu key="0">
          <template #icon><icon-apps></icon-apps></template>
          <template #title>Navigation 1</template>
          <a-menu-item key="0_0">Menu 1</a-menu-item>
          <a-menu-item key="0_1">Menu 2</a-menu-item>
          <a-menu-item key="0_2">Menu 3</a-menu-item>
          <a-menu-item key="0_3">Menu 4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1">
          <template #icon><icon-bug></icon-bug></template>
          <template #title>Navigation 2</template>
          <a-menu-item key="1_0">Menu 1</a-menu-item>
          <a-menu-item key="1_1">Menu 2</a-menu-item>
          <a-menu-item key="1_2">Menu 3</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #icon><icon-bulb></icon-bulb></template>
          <template #title>Navigation 3</template>
          <a-menu-item key="2_0">Menu 1</a-menu-item>
          <a-menu-item key="2_1">Menu 2</a-menu-item>
          <a-sub-menu key="2_2" title="Navigation 4">
            <a-menu-item key="2_2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_2_1">Menu 2</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const collapsed = ref<boolean>(false);
const menuWidth = 220;

const setCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped lang="less">
.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
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
