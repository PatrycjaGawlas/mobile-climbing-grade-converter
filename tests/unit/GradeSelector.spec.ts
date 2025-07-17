import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GradeSelector from '../../src/components/GradeSelector.vue'
describe('GradeSelector.vue', () => {
  it('renders two selects', () => {
    const wrapper = mount(GradeSelector, {
      props: {
        climbingType: 'sport'
      }
    })
    expect(wrapper.findAll('ion-select').length).toBe(2)
  })
})
