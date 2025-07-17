import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TextBox from '../../src/components/TextBox.vue'
describe('TextBox.vue', () => {
  it('renders paragraphs from text prop', () => {
    const text = ['Ala ma kota', 'Kot ma alę']
    const wrapper = mount(TextBox, {
      props: { text }
    })
    const paragraphs = wrapper.findAll('p')
    expect(paragraphs.length).toBe(text.length)
    text.forEach((t, i) => {
      expect(paragraphs[i].text()).toBe(t)
    })
  })
})
