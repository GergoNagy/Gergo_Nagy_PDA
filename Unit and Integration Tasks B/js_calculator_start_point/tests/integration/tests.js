var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  //- Do the number buttons work to update the display of the running total?
  it('should show the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('32')
  })
  //- Do each of the arithmetical operations work to update the display with the result of the operation?
  it('should work all of the arithmetical operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4.5')
  })
  //- Can we chain multiple operations together?
  it('should chain multiple operator', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })
  //- Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
  it('should work with range numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('555554.5')
  })
  //- If you divide by zero, what is the effect?
  // it('should give back infinity if a number divide by zero', function () {
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#number9')).click();
  //   element(by.css('#operator_divide')).click();
  //   element(by.css('#number0')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  // })
  //- Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
  it('should give back the number if a number divide by zero', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })
});