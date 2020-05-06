var VueTestUtils = require('@vue/test-utils')
var counter = require('../counter.js')

describe('counter', () => {
  const wrapper = VueTestUtils.mount(counter, {
    propsData: {
      count: 0,
    },
  })
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
