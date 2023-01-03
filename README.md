# What is it?

A library allowing a function or a class method to forcibly return a specified value.

# How do I install it?

You can install it by using the following command:

```bash
npm install force-return
```

# How do I use it?

The library exposes a single function (`forceReturn`) that can be used to force a function or a class method to return a specified value.  
The function accepts three parameters:
- `fn`: The function or class method to be forced to return a specified value.
- `returnValue`: The forced value to be returned by the function or class method. It must return a value that is compatible with the return type of `fn`.
- `_config_`: An optional object containing the following properties:
  - `amountOfTimesToCall`: The amount of times the returnValue will be returned. If not specified, the returnValue will be returned indefinitely.

# Tests

You can run the tests by using the following command:

```bash
npm test
```