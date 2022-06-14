import { UnwrapRef, readonly, ref } from 'vue';

export const useState = <T>(initState: T) => {
  const state = ref<T>(initState);
  const setState = (newState: UnwrapRef<T>) => {
    state.value = newState;
  };
  return [readonly(state), setState] as const;
};
