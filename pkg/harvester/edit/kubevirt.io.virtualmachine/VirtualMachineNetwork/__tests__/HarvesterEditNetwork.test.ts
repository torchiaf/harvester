import { mount } from '@vue/test-utils';
import { _EDIT } from '@shell/config/query-params';
import HarvesterEditNetwork from '../base.vue';

describe('component: HarvesterEditNetwork', () => {
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should display all the inputs', () => {
  //   const wrapper = mount(HarvesterEditNetwork, { propsData: { mode: _EDIT } });

  //   const inputWraps = wrapper.findAll('[data-testid^=input-hen-]');

  //   expect(inputWraps).toHaveLength(5);
  // });

  it.each([
    'name',
  ])('should emit an update on %p input', (field) => {
    const wrapper = mount(HarvesterEditNetwork, { propsData: { mode: _EDIT } });
    const input = wrapper.find(`[data-testid="input-hen-${ field }"]`).find('input');
    const newValue = 123;

    input.setValue(newValue);

    expect(wrapper.emitted('update')).toHaveLength(1);
  });

  it.each([
    'model',
    'networkName',
    'type',
  ])('should emit an update on %p selection change', async(field) => {
    const wrapper = mount(HarvesterEditNetwork, { propsData: { mode: _EDIT } });
    const select = wrapper.find(`[data-testid="input-hen-${ field }"]`);

    select.find('button').trigger('click');
    await wrapper.trigger('keydown.down');
    await wrapper.trigger('keydown.enter');

    expect(wrapper.emitted('update')).toHaveLength(1);
  });
});
