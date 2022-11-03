/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { cleanup, render } from "@testing-library/react";
 import { Provider } from "react-redux";
 import { store } from "../../../redux/store";
 import { CardBox } from "./CardBox";
 
 describe("CardBox", () => {
   afterEach(() => cleanup());
 
   test("Render CardBox component", () => {
     const view = render(
       <Provider store={store}>
           <CardBox>Test</CardBox>
       </Provider>
     );
 
     expect(view.container).toMatchSnapshot();
   });
 });
 