import { forceReturn } from './index';

// Create a function which always returns 1
const alwaysTwo = forceReturn(() => 2, 1, { amountOfTimesToCall: 1 });

console.log(alwaysTwo());
console.log(alwaysTwo());
console.log(alwaysTwo());
