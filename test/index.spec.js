import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'
// import NuxtLogo from '@/components/NuxtLogo.vue'

// describe('NuxtLogo', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(NuxtLogo)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })

describe('index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.vm).toBeTruthy()
  })
})
