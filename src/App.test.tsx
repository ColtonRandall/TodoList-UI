import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders colton's title", () => {
  render(<App />);
  const text = "Colton Randall's full-stack to do list";
  const linkElement = screen.getByText(text);
  expect(linkElement).toBeInTheDocument();
});
