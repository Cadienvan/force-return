import { forceReturn } from './index';

it('should return the forced value indefinitely if amountOfTimesToCall is not set (-1 as default)', () => {
  const originalFn = (a: number, b: number) => a + b;
  const newFn = forceReturn(originalFn, 1);
  expect(newFn(1, 2)).toBe(1);
  expect(newFn(1, 2)).toBe(1);
  expect(newFn(1, 2)).toBe(1);
});

it('should return the forced value twice if amountOfTimesToCall is set to 2', () => {
  const originalFn = (a: number, b: number) => a + b;
  const newFn = forceReturn(originalFn, 1, { amountOfTimesToCall: 2 });
  expect(newFn(1, 2)).toBe(1);
  expect(newFn(1, 2)).toBe(1);
  expect(newFn(1, 2)).toBe(3);
  expect(newFn(1, 2)).toBe(3);
});
