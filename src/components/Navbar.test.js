import { render, act, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
describe("navbar component", () => {
  test("navbar rendered", () => {
    const history = createMemoryHistory();
    act(() => {
      const { getByTestId } = render(
        <Router history={history}>
          <Navbar />
        </Router>
      );
      const navbar = getByTestId("navbar");
      expect(navbar).toBeTruthy();
    });
  });
  test("button toggle", async () => {
    await act(async () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Navbar />
        </Router>
      );
      const button = getByTestId("toggle");
      await fireEvent.click(button);
      expect(button).toHaveBeenCalled();
    });
  });
});
