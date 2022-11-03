/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { cleanup, render } from "@testing-library/react";
 import { Provider } from "react-redux";
 import { BrowserRouter as Router } from "react-router-dom";
 import { store } from "../../../redux/store";
 import { users } from "../../../mocks";
import Members from "./Members";
 
 describe("Members", () => {
   afterEach(() => cleanup());
 
   test("Render Members with Data from Mock", () => {
     const view = render(
       <Provider store={store}>
         <Router>
           <Members users={users} />
         </Router>
       </Provider>
     );
 
     expect(view.container).toMatchSnapshot();
   });
 });
 