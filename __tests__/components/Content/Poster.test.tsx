import { render, screen } from "@testing-library/react";
import Poster from "@/app/components/Content/Poster";

test("render Poster unchanged", () => {
  const { container } = render(<Poster year={2010} />);
  expect(container).toMatchSnapshot();
});

test("should have correct year", () => {
  render(<Poster year={2010} />);
  const image = screen.getByAltText<HTMLImageElement>("poster 2010");
  expect(image.src).toContain("2010.jpg");
});
