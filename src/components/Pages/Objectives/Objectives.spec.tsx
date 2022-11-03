/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../redux/store";
import Objectives from "./Objectives";
import { objs } from "../../../mocks";

describe("Objectives", () => {
  afterEach(() => cleanup());

  test("Render Objectives with Data from Mock", () => {
    const view = render(
      <Provider store={store}>
        <Router>
          <Objectives objs={objs} />
        </Router>
      </Provider>
    );

    expect(view.container).toMatchSnapshot();
  });
});
