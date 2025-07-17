import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ToggleButton from '../../src/components/ToggleButton.vue'
describe('ToggleButton.vue', () => {
  it('renders both climbing types', () => {
    const wrapper = mount(ToggleButton, {
      props: { climbingType: 'sport' }
    })
    expect(wrapper.text()).toContain('SPORT CLIMBING')
    expect(wrapper.text()).toContain('BOULDERING')
  })

  it('emits update-climbing-type when clicked', async () => {
    const wrapper = mount(ToggleButton, {
      props: { climbingType: 'sport' }
    })
    await wrapper.find('.toggle__element--right').trigger('click')
    expect(wrapper.emitted()['update-climbing-type']).toBeTruthy()
    expect(wrapper.emitted()['update-climbing-type'][0]).toEqual(['boulder'])
  })
})
