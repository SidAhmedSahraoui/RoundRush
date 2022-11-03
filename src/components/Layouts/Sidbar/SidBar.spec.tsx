import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import SidBar from "./SidBar";

describe("SidBar", () => {
  afterEach(() => cleanup());

  test("Render SidBar Component", () => {
    const view = render(
      <Provider store={store}>
        <Router>
          <SidBar />
        </Router>
      </Provider>,
    );

    expect(view.container).toMatchSnapshot();
  });  
});