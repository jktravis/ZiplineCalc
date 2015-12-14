var chai = require('chai');
var expect = chai.expect;
var calc = require('../static/js/calculator.js').calculator;

describe("calculator", function(){
  before(function () {
    calc.input = '1+2-3CE';
  });

  it('should be an object', function() {
    expect(calc).to.be.an('Object');
  });

  it('should have an add method', function() {
    expect(calc).have.a.property('add');
  });

  it('should have a subtract method', function() {
    expect(calc).have.a.property('subtract');
  });

  it('should have a multiply method', function() {
    expect(calc).have.a.property('multiply');
  });

  it('should have a divide method', function() {
    expect(calc).have.a.property('divide');
  });

  it('should have a display property', function() {
    expect(calc).have.a.property('display');
  });

  it('should have a input property', function() {
    expect(calc).have.a.property('input');
  });

  it('should return 3 when 1 is added to 2', function() {
    expect(calc.add(1,2)).to.equal(3);
  });

  it('should return 1 when 2 is subtracted from 3', function() {
    expect(calc.subtract(3,2)).to.equal(1);
  });

  it('should return 10 when 5 is multiplied by 2', function() {
    expect(calc.multiply(5, 2)).to.equal(10);
  });

  it('should return 5 when 10 is divided by 2', function() {
    expect(calc.divide(10, 2)).to.equal(5);
  });

  it('should return 1+2- when provided 1+2-3', function() {
    calc.clearEntry();
    expect(calc.input).to.equal('1+2-');
  });

  it('should clear display, total, and input values', function() {
    calc.display = '2342';
    calc.total = '23423';
    calc.input = '1+2+3+4';
    calc.allClear();
    expect(calc.total).to.equal(0);
    expect(calc.display).to.equal('0');
    expect(calc.input).to.equal('');
  });

  it('should return 3 when evaluating 1+2', function () {
    calc.input = '1+2';
    calc.lastOperation = '+';
    calc.activateOperation();
    expect(calc.total).to.equal(3);
  });

  it('should return 76 when evaluating 145-69', function () {
    calc.input = '145-69';
    calc.lastOperation = '-';
    calc.activateOperation();
    expect(calc.total).to.equal(76);
  });

  it('should return 40 when evaluating 10*4', function () {
    calc.input = '10*4';
    calc.lastOperation = '*';
    calc.activateOperation();
    expect(calc.total).to.equal(40);
  });

  it('should return 3 when evaluating 21/7', function () {
    calc.input = '21/7';
    calc.lastOperation = '+';
    calc.activateOperation();
    expect(calc.total).to.equal(3);
  });
});
