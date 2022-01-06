import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const txt = screen.getByText("Awesome Counter");
  expect(txt).toBeInTheDocument();
});
