import { render } from "@testing-library/react";
import Signature from "@/app/components/Signature";

test("render Signature unchanged", () => {
  const { container } = render(<Signature />);
  expect(container).toMatchSnapshot();
});
