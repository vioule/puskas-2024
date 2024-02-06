import { render } from "@testing-library/react";
import Section from "@/app/components/Scroller/Section";

test("render Section unchanged", async () => {
  global.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  const { container } = render(<Section year={2023} />);
  expect(container).toMatchSnapshot();
});
