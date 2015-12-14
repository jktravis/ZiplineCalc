exports.calculator = {
  display: 0,
  input: '',
  total: 0,
  operatorProvided: false,
  lastOperation: '',

  add: function(a, b) {
    return Number(a) + Number(b);
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
  },

  allClear: function () {
    this.display = 0;
    this.total = 0;
    this.input = '';
  },

  activateOperation: function() {
    var ops = ['+', '-', '*', '/'];
    if (ops.indexOf(this.lastOperation) >= 0)
    {
      this.total = eval(this.input);
      this.display = '' + this.total;
      this.input = '' + this.total;
    }
  },
};