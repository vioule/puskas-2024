import { render, screen } from "@testing-library/react";
import * as module from "framer-motion";
import ScrollProgress from "@/app/components/Content/ScrollProgress";

jest.spyOn(module, "useScroll").mockReturnValue({
  scrollX: module.motionValue(0),
  scrollXProgress: module.motionValue(0),
  scrollY: module.motionValue(0),
  scrollYProgress: module.motionValue(0.75),
});

test("render ScrollProgress unchanged", () => {
  const { container } = render(<ScrollProgress />);
  expect(container).toMatchSnapshot();
});

test("should have correct scale", () => {
  render(<ScrollProgress />);
  expect(screen.getByTestId("scroll-progress")).toHaveStyle(
    "transform: scaleY(0.75) translateZ(0)"
  );
});
