import Validator from '../app';

test('should test Russian number with +7', () => {
  const data = '+7 960 000 00 00';
  const equalData = '+79600000000';
  expect(Validator.validateTelNumber(data)).toEqual(equalData);
});

test('should test Russian number with 8', () => {
  const data = '8 (927) 000-00-00';
  const equalData = '+79270000000';
  expect(Validator.validateTelNumber(data)).toEqual(equalData);
});

test('should test China number', () => {
  const data = '+86 000 000 0000';
  const equalData = '+860000000000';
  expect(Validator.validateTelNumber(data)).toEqual(equalData);
});
