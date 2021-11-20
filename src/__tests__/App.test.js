import { AddTodo } from "../components/helper";

test("Should add todo to the list", () => {
  // Arrange
  const data = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
  ];

  const insert = {
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  };

  const expected = [insert, ...data];

  // Act
  const test = AddTodo(data, insert);

  // Assert
  expect(test).toStrictEqual(expected);
});

test("should not mutate the existing todo array", () => {
  // Arrange
  const data = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
  ];

  const insert = {
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  };

  // Act
  const test = AddTodo(data, insert);

  // Assert
  expect(test).not.toStrictEqual(data);


});
