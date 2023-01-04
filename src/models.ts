export type Config = {
  amountOfTimesToCall: number;
};

export type Fn<FnArgs, ReturnValue> = (...args: FnArgs[]) => ReturnValue;
