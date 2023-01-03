// Create a function which takes a function as an input and a return value
// and returns a function which will always return the return value

import { defaultConfig } from './default';
import { Config } from './models';

export function forceReturn<FnArgs, ReturnValue>(
  fn: (...args: FnArgs[]) => ReturnValue,
  returnValue: ReturnValue,
  _config: Partial<Config> = {}
) {
  const config = {
    ...defaultConfig,
    ..._config
  };
  const returnIndefinitely = config.amountOfTimesToCall === -1;
  let amountOfTimesToCallLeft = config.amountOfTimesToCall;
  // Save the original function and bring it back after config.amountOfTimesToCall calls
  const originalFn = fn;
  let newFn = (...args: FnArgs[]) => returnValue;
  if (!returnIndefinitely)
    newFn = (...args: FnArgs[]) => {
      // If the amount of times to call is 0, bring back the original function
      if (amountOfTimesToCallLeft === 0) {
        newFn = originalFn;
        return originalFn(...args);
      }
      // Decrement the amount of times to call
      amountOfTimesToCallLeft--;
      // Return the return value
      return returnValue;
    };

  // Return the new function
  return newFn;
}
