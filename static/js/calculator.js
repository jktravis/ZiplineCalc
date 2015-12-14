exports.calculator = {
  display: 0,
  input: '',
  total: 0,

  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    return a / b;
  },

  clearEntry: function () {
    this.display = 0;
    this.input = this.input.replace(/[^+\-*/]\d?CE$/g, '');
  }
};