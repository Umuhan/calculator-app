import calculate from '../src/logic/calculate';

it('AC button should reset the calculator data', () => {
  const result = calculate({ total: 10, next: '5', operation: '+' }, 'AC');
  expect(result).toEqual({ total: null, next: null, operation: null });
});

it('Number input should update the calculator data', () => {
  const result = calculate({ total: 10, next: '5', operation: '+' }, '2');
  expect(result).toEqual({ total: 10, next: '52', operation: '+' });
});
