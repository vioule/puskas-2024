import { render } from "@testing-library/react";
import Section from "@/app/components/Scroller/Section";
import { dataInitialState } from "@/app/components/DataProvider";

test("render Section unchanged", async () => {
  global.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  const { container } = render(<Section data={dataInitialState} />);
  expect(container).toMatchSnapshot();
});
