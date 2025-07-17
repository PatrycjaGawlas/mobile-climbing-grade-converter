import { mount } from '@vue/test-utils'
import GradeScroller from '../../src/components/GradeScroller.vue'
import { describe, it, expect } from 'vitest'

describe('GradeScroller.vue', () => {
  it('renders columns for valid grade systems', () => {
    const wrapper = mount(GradeScroller, {
      props: {
        leftGradeSystem: 'uiaa',
        rightGradeSystem: 'france'
      }
    })
    expect(wrapper.findAll('.grade-scroller-column').length).toBe(2)
    expect(wrapper.text()).toContain('I') // UIAA first grade
    expect(wrapper.text()).toContain('1') // France first grade
  })

  it('renders left column with grades and right column empty if right system is missing', () => {
    const wrapper = mount(GradeScroller, {
      props: {
        leftGradeSystem: 'uiaa',
        rightGradeSystem: 'nonexistent'
      }
    })
    const columns = wrapper.findAll('.grade-scroller-column')
    expect(columns.length).toBe(2)
    expect(columns[0].findAll('.grade-scroller-column__grade').length).toBeGreaterThan(0)
    expect(columns[1].findAll('.grade-scroller-column__grade').length).toBe(0)
    expect(wrapper.text()).toContain('I')
  })

  it('renders two empty columns if both systems are missing', () => {
    const wrapper = mount(GradeScroller, {
      props: {
        leftGradeSystem: 'nonexistent',
        rightGradeSystem: 'nonexistent'
      }
    })
    const columns = wrapper.findAll('.grade-scroller-column')
    expect(columns.length).toBe(2)
    expect(columns[0].findAll('.grade-scroller-column__grade').length).toBe(0)
    expect(columns[1].findAll('.grade-scroller-column__grade').length).toBe(0)
  })
})
