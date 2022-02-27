import { mount } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox.vue';

describe('label text ', () => {
  it('renders props.label when passed', () => {
    const wrapper = mount(Checkbox, {
      props: { label: 'vue' },
    });
    expect(wrapper.find('label').text()).toMatch('vue');
  });
});
