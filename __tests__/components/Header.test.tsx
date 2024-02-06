import { render, screen, waitFor } from "@testing-library/react";
import Header from "@/app/components/Header";

test("render Header unchanged", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});

test("Header is visible after Framer motion animation", async () => {
  render(<Header />);
  const container = screen.getByTestId("container");
  expect(container).toHaveStyle("opacity: 0");
  expect(container.children[0]).toHaveStyle("opacity: 0");
  expect(container.children[1]).toHaveStyle("opacity: 0");
  expect(container.children[2]).toHaveStyle("opacity: 0");
  expect(container.children[2]).toHaveStyle("opacity: 0");
  await waitFor(
    () => {
      expect(container).toHaveStyle("opacity: 1");
      expect(container.children[0]).toHaveStyle("opacity: 1");
      expect(container.children[1]).toHaveStyle("opacity: 1");
      expect(container.children[2]).toHaveStyle("opacity: 1");
      expect(container.children[2]).toHaveStyle("opacity: 1");
    },
    { timeout: 2500 }
  );
});
