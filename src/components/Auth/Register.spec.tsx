/* eslint-disable testing-library/prefer-screen-queries */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

import Register from "./Register";

describe("Register", () => {
  afterEach(() => cleanup());

  test("Render Register component", async () => {
    const view = render(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    );

    expect(
      await view.findByRole("button", { name: /next/i })
    ).toMatchSnapshot();
  });
});
