exports.calculator = {
  display: 0,
  input: '',
  total: 0,
  operatorProvided: false,
  lastOperation: '',

  clearEntry: function () {
    this.display = 0;
    this.input = this.input.replace(/[^+\-*/][\d\.]*$/, '');
  },

  allClear: function () {
    this.display = 0;
    this.total = 0;
    this.input = '';
  },

  evaluateOperation: function() {
    this.total = eval(this.input);
    this.display = '' + this.total;
    this.input = '' + this.total;
  }
};