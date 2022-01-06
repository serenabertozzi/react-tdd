import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

test("it should have a correct initial value when set to 7", () => {
  render(<AwesomeCounter initialValue={7} />);
  const count = screen.queryByText(7);
  expect(count).toBeVisible();
});

test("it should have an initial value set to 0", () => {
  render(<AwesomeCounter />);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("it should increase the value when add is clicked once", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.queryByText("Add");
  userEvent.click(addButton);
  const count = screen.queryByText(2);
  expect(count).toBeVisible();
});

test("it should increase the value when add is clicked twice", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.queryByText("Add");
  userEvent.click(addButton);
  userEvent.click(addButton);
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});

test("it should decrease the value when remove is clicked twice", () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.queryByText("Remove");
  userEvent.click(removeButton);
  const count = screen.queryByText(4);
  expect(count).toBeVisible();
});

test("it should not allow a negative number when initial value is 0 and remove is clicked", () => {
  render(<AwesomeCounter initialValue={0} />);
  const removeButton = screen.queryByText("Remove");
  userEvent.click(removeButton);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("it should not allow a negative number when initial value is 2 and remove is clicked", () => {
  render(<AwesomeCounter initialValue={2} />);
  const removeButton = screen.queryByText("Remove");
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

// test("start a test throwing an error or it will pass", () => {
//   throw new Error();
// });
