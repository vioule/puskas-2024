import { render, screen, waitFor } from "@testing-library/react";
import Scroller from "@/app/components/Scroller";
import * as module from "framer-motion";
import {
  AppContext,
  DataType,
  LightboxType,
} from "@/app/components/DataProvider";

const dataInitialState: DataType = {
  year: 2009,
  name: "cristiano ronaldo",
  comp: "UEFA champions league",
};
const setData = jest.fn();
const setLightbox = jest.fn();

jest.spyOn(module, "useInView").mockReturnValue(true);

describe("<Scroller />", () => {
  test("poster should have correct styles", async () => {
    const lightbox: LightboxType = {
      preview: false,
      poster: true,
    };
    render(
      <AppContext.Provider
        value={{
          data: dataInitialState,
          setData,
          lightbox,
          setLightbox,
        }}
      >
        <Scroller skewY={module.motionValue(10)} />
      </AppContext.Provider>
    );

    await waitFor(() => {
      const scroller = screen.getByTestId("container");
      expect(document.body).toHaveStyle({
        overflow: "hidden",
      });
      expect(scroller).toHaveStyle({
        opacity: 0,
        transform: "skewY(10deg) translateZ(0)",
      });
    });
  });
  test("!poster should have correct styles", async () => {
    const lightbox: LightboxType = {
      preview: false,
      poster: false,
    };
    render(
      <AppContext.Provider
        value={{
          data: dataInitialState,
          setData,
          lightbox,
          setLightbox,
        }}
      >
        <Scroller skewY={module.motionValue(10)} />
      </AppContext.Provider>
    );

    await waitFor(() => {
      const scroller = screen.getByTestId("container");
      expect(document.body).toHaveStyle({
        overflow: "auto",
      });
      expect(scroller).toHaveStyle({
        opacity: 1,
        display: "flex",
        transform: "skewY(10deg) translateZ(0)",
      });
    });
  });
});
