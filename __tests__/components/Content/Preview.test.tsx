import { render, screen, waitFor } from "@testing-library/react";
import Preview from "@/app/components/Content/Preview";

test("should have correct year", () => {
  render(<Preview preview={false} year={2010} />);
  const image = expect(
    screen.getByTestId<HTMLVideoElement>("video")
  ).toHaveAttribute("src", "/preview/2010-preview.mp4");
});
test("should have opacity 0", () => {
  render(<Preview preview={false} year={2010} />);
  const image = expect(screen.getByTestId("container")).toHaveStyle(
    "opacity: 0"
  );
});
test("should have opacity 1", async () => {
  render(<Preview preview={true} year={2010} />);
  await waitFor(() => {
    const image = expect(screen.getByTestId("container")).toHaveStyle(
      "opacity: 1"
    );
  });
});
