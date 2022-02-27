<script lang="ts">
import { defineComponent } from 'vue';
import VbCheckbox from '@/vb-checkbox.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VbCheckbox,
  },
});
</script>

<template>
  <div id="app">
    <vb-checkbox label="checkbox" />
  </div>
</template>
