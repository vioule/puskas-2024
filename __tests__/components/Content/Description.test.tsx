import { render, screen } from "@testing-library/react";
import Description from "@/app/components/Content/Description";

const data = {
  year: 2009,
  name: "cristiano ronaldo",
  comp: "UEFA champions league",
};

test("render Description unchanged", () => {
  const { container } = render(<Description data={data} />);
  expect(container).toMatchSnapshot();
});

test("should have correct data", () => {
  render(<Description data={data} />);
  expect(screen.getByText(data.year)).toBeInTheDocument();
  expect(screen.getByText(data.name)).toBeInTheDocument();
  expect(screen.getByText(data.comp)).toBeInTheDocument();
});
