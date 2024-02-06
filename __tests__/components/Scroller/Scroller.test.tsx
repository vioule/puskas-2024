import { render } from "@testing-library/react";
import Scroller from "@/app/components/Scroller";

test("render Scroller unchanged", async () => {
  global.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  const { container } = render(<Scroller />);
  expect(container).toMatchSnapshot();
});
