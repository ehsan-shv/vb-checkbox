<template>
  <div><Checkbox :modelValue="checked1" label="check1" /></div>
  <div><Checkbox :modelValue="checked2" label="check2" /></div>
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
    const checked1 = ref(false);
    const checked2 = ref(true);

    return { checked2, checked1 };
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

  div {
    margin: 20px;
  }
}
</style>
