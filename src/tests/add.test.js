const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hey ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should generate greeting for name', () => {
  const result = generateGreeting('Rachel');
  expect(result).toBe('Hey Rachel!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hey Anonymous!');
});