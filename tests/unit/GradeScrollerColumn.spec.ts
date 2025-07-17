import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GradeScrollerColumn from '../../src/components/GradeScrollerColumn.vue'
describe('GradeScrollerColumn.vue', () => {
  it('renders all grades', () => {
    const grades = ['A', 'B', 'C']
    const wrapper = mount(GradeScrollerColumn, {
      props: { grades }
    })
    const gradeEls = wrapper.findAll('.grade-scroller-column__grade')
    expect(gradeEls.length).toBe(grades.length)
    grades.forEach((grade, i) => {
      expect(gradeEls[i].text()).toBe(grade)
    })
  })
})
