<template>
  <div class="vb-checkbox">
    <input type="checkbox" :checked="state" class="vb-checkbox__field" />
    <label @click="onLabelClick" class="vb-checkbox__label" :class="{ rtl: rtl }">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Checkbox',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const state = ref(props.modelValue);

    const onLabelClick = () => {
      state.value = !state.value;
      emit('update:modelValue', state.value);
    };

    return {
      state,
      onLabelClick,
    };
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --vb-checkbox-color-default: #212121;
  --vb-checkbox-color-secondary: #9e9e9e;
  --vb-checkbox-backgrond-color: #2196f3;
}

.vb-checkbox {
  display: inline-flex;

  &__field {
    display: none !important;
    &:checked + label {
      &::after {
        background-color: var(--vb-checkbox-backgrond-color);
        border: 1px solid var(--vb-checkbox-backgrond-color);
        background-position: center;
        background-size: 20px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23ffffff'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");
      }
    }
  }

  &__label {
    position: relative;
    display: inline-flex;
    height: 20px;
    padding: 2px 0 0 28px;
    cursor: pointer;
    user-select: none;
    color: var(--vb-checkbox-color-default);
    font-size: 16px;

    &.rtl {
      text-align: right;
      padding: 2px 28px 0 0;

      &::before,
      &::after {
        left: unset;
        right: 0;
      }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(20px - 2px);
      height: calc(20px - 2px);
      border-radius: 2px;
    }

    &::before {
      border: 1px solid var(--vb-checkbox-color-secondary);
    }
  }
}
</style>
