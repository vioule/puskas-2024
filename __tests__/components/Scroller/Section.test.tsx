import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Section from "@/app/components/Scroller/Section";
import {
  AppContext,
  DataType,
  LightboxType,
} from "@/app/components/DataProvider";
import { useInView } from "framer-motion";

jest.mock("framer-motion");
const dataInitialState: DataType = {
  year: 2009,
  name: "cristiano ronaldo",
  comp: "UEFA champions league",
};
const setData = jest.fn();
const setLightbox = jest.fn();

describe("<Section />", () => {
  const mockedUseInView = jest
    .mocked(useInView)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValue(false);

  test("render Section unchanged", async () => {
    const { container } = render(<Section data={dataInitialState} />);
    expect(container).toMatchSnapshot();
  });

  describe("inView !lightbox.preview !lightbox.poster", () => {
    const lightbox: LightboxType = {
      preview: false,
      poster: false,
    };
    beforeEach(() => {
      render(
        <AppContext.Provider
          value={{
            data: dataInitialState,
            setData,
            lightbox,
            setLightbox,
          }}
        >
          <Section data={dataInitialState} />
        </AppContext.Provider>
      );
    });

    afterEach(() => {
      mockedUseInView.mockClear();
      setData.mockClear();
      setLightbox.mockClear();
    });

    test("Section onClick should not trigger", async () => {
      fireEvent.click(screen.getByTestId("section"));
      expect(setLightbox).not.toHaveBeenCalled();
    });

    test("Section InView correctly send state", async () => {
      await waitFor(() => {
        expect(setLightbox.mock.calls).toEqual([
          [
            {
              preview: true,
              poster: false,
            },
          ],
        ]);
        expect(setData.mock.calls).toEqual([[dataInitialState]]);
      });
    });

    test("should have correct styles", async () => {
      const section = screen.getByTestId("section");
      expect(section).toHaveClass("text-white");
      expect(section).not.toHaveClass("text-gold");
    });
  });

  describe("!inView lightbox.preview !lightbox.poster", () => {
    const lightbox: LightboxType = {
      preview: true,
      poster: false,
    };
    beforeEach(() => {
      render(
        <AppContext.Provider
          value={{
            data: dataInitialState,
            setData,
            lightbox,
            setLightbox,
          }}
        >
          <Section data={dataInitialState} />
        </AppContext.Provider>
      );
    });

    afterEach(() => {
      mockedUseInView.mockClear();
      setData.mockClear();
      setLightbox.mockClear();
    });

    test("Section !inView should correctly send state", async () => {
      expect(setLightbox.mock.calls).toEqual([
        [
          {
            preview: false,
            poster: false,
          },
        ],
      ]);
    });
    test("Section onClick should trigger", async () => {
      fireEvent.click(screen.getByTestId("section"));
      expect(setLightbox.mock.lastCall).toEqual([
        {
          preview: true,
          poster: true,
        },
      ]);
    });
    test("should have correct styles", async () => {
      expect(screen.getByTestId("section")).toHaveClass("hover:cursor-pointer");
    });
  });
  describe("!inView !lightbox.preview lightbox.poster", () => {
    const lightbox: LightboxType = {
      preview: false,
      poster: true,
    };
    beforeEach(() => {
      render(
        <AppContext.Provider
          value={{
            data: dataInitialState,
            setData,
            lightbox,
            setLightbox,
          }}
        >
          <Section data={dataInitialState} />
        </AppContext.Provider>
      );
    });

    afterEach(() => {
      mockedUseInView.mockClear();
      setData.mockClear();
      setLightbox.mockClear();
    });

    test("should not send state", async () => {
      expect(setLightbox).not.toHaveBeenCalled();
      expect(setData).not.toHaveBeenCalled();
    });
    test("should have correct styles", async () => {
      const section = screen.getByTestId("section");
      expect(section).not.toHaveClass("hover:cursor-pointer");
      expect(section).toHaveClass("text-gold");
      expect(section).not.toHaveClass("text-white");
    });
  });
});
