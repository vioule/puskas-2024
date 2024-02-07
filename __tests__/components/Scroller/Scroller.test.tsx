import { render } from "@testing-library/react";
import Scroller from "@/app/components/Scroller";
import { motionValue } from "framer-motion";

test("render Scroller unchanged", async () => {
  global.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  const { container } = render(<Scroller skewY={motionValue(10)} />);
  expect(container).toMatchSnapshot();
});
