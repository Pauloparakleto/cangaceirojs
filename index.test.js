const cangaceiro = require('./index');

test('validatePresence must raise Error', () => {
  expect(() => cangaceiro.validatePresence('name')).toThrow(Error);
  expect(() => cangaceiro.validatePresence('name')).toThrow('name is mandatory');
  expect(() => cangaceiro.validatePresence('value')).toThrow('value is mandatory');
});