var Vue = require('Vue')

var counter = Vue.component('counter', {
  template:
    '<div><span class="count">{{ count }}</span><button @click="increment">Increment</button></div>',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment: function () {
      this.count++
    },
  },
})

module.exports = counter
