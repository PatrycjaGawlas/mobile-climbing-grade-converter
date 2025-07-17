import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Footer from '../../src/components/Footer.vue'
const push = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push
  })
}))
describe('Footer.vue', () => {
  it('renders all links', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('Privacy Policy')
    expect(wrapper.text()).toContain('Terms of Use')
    expect(wrapper.text()).toContain('Cookies')
  })

  it('calls router.push on link click', async () => {
    const wrapper = mount(Footer)
    await wrapper.find('a').trigger('click')
    expect(push).toHaveBeenCalled()
  })
})
