var VueTestUtils = require('@vue/test-utils')
var counter = require('../counter.js')

describe('counter', () => {
  const wrapper = VueTestUtils.mount(counter)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
