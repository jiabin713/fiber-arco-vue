<template>
  <template v-for="menu in props.menu">
    <template :key="menu.path" v-if="menu.type === MenuType.CATE">
      <a-sub-menu :key="menu.path" v-if="menu.children && menu.children.length > 0 && menu.type === MenuType.CATE">
        <template #icon><component :is="menu.icon" /></template>
        <template #title>{{ menu.name }}</template>
        <menu-recursion v-if="menu.children && menu.children.length > 0" :menu="menu.children" />
      </a-sub-menu>
    </template>
    <template v-if="menu.type === MenuType.MENU">
      <a-menu-item :key="menu.path">
        {{ menu.name }}
      </a-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import { MenuRecord } from '@/api/system/types';
import { MenuType } from '@/api/global';
const props = defineProps<{
  menu: MenuRecord[];
}>();
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
