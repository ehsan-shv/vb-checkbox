<template>
  <Checkbox :modelValue="checked" label="check1" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Checkbox from './components/Checkbox.vue';

export default defineComponent({
  name: 'App',
  components: {
    Checkbox,
  },
  setup() {
    const checked = ref(false);

    return { checked };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
