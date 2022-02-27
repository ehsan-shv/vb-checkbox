import { mount } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox.vue';

describe('label text', () => {
  it('renders props.label when passed', () => {
    const wrapper = mount(Checkbox, {
      props: { label: 'vue' },
    });
    expect(wrapper.find('label').text()).toMatch('vue');
  });
});

describe('update:modelValue emitter', () => {
  it('change state and emit state to on click', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });

    wrapper.vm.onLabelClick();

    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);
  });
});
