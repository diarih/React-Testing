import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const x = 3;
  const y = 10;
  const expected = 13;
  // Act
  const test = Add(x,y)

  // Assert
  expect(test).toBe(expected)

})

test('Return substraction of a - b', () => {
  // Arrange
  const x = 5;
  const y = 3;
  const expected = 2;

  // Act
  const test = Substract(x,y)

  // Assert
  expect(test).toBe(expected)
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const x = 15;
  const y = 5;
  const expected = 75;

  // Act
  const test = Multiplication(x,y)

  // Assert
  expect(test).toBe(expected)
})