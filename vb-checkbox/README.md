# vb-checkbox

<a href="https://www.npmjs.com/package/vb-checkbox"><img src="https://img.shields.io/npm/v/vb-checkbox.svg" alt="Version"></a>

**Vue 3 checkbox component.**

> Support Vue3, Nuxt3 and type-safe. [Demo](https://ehsan-shv.github.io/vb-checkbox/)

## Installation

```bash
npm i vb-checkbox
```

## Import to component

```js
<template>
  <div><Checkbox :modelValue="check1" label="check1" /></div>
  <div><Checkbox :modelValue="check2" label="check2" /></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Checkbox from 'vb-checkbox';

export default defineComponent({
  components: {
    Checkbox,
  },
  setup() {
    const checked1 = ref(false);
    const checked2 = ref(true);

    return { check1, check2 };
  },
});
</script>
```
