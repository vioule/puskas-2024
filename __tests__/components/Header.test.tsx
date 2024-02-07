import { render, screen, waitFor } from "@testing-library/react";
import Header from "@/app/components/Header";
import { motionValue } from "framer-motion";

test("render Header unchanged", () => {
  const { container } = render(
    <Header skewY={motionValue(10)} skewYNeg={motionValue(-10)} />
  );
  expect(container).toMatchSnapshot();
});

test("Header is visible after Framer motion animation", async () => {
  render(<Header skewY={motionValue(10)} skewYNeg={motionValue(-10)} />);
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
