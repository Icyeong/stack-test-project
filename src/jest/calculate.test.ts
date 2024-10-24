import calculate from "./calculate";

test("adds 1 + 2 to equal 3", () => {
  expect(calculate.sum(1, 2)).toBe(3);
});

test("adds 5 + 2 to equal 3", () => {
  expect(calculate.sum(5, 2)).toBe(7);
});
