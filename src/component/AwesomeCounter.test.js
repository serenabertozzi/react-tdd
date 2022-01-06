import { render, screen } from "@testing-library/react";
import AwesomeCounter from "./AwesomeCounter";

test("it should have a correct initial value when set to 7", () => {
  render(<AwesomeCounter initialValue={7} />);
  const count = screen.queryByText(7);
  expect(count).toBeVisible();
});

test("it should have an initial value set to 0", () => {
  throw new Error();
});

test("it should increase the value when add is clicked twice", () => {
  throw new Error();
});

test("it should decrease the value when remove is clicked twice", () => {
  throw new Error();
});

test("it should not allow a negative number when initial value is 0 and remove is clicked", () => {
  throw new Error();
});
