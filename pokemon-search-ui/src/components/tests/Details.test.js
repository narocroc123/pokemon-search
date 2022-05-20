import React from "react";
import { render } from "@testing-library/react";

import Details from "../Details";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers/index";

const preLoadedState = {
  search: {
    data: {
      name: "charizard",
      description:
        "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      is_legendary: false,
    },
  },
  history: ["pikachu", "azelf", "charizard"],
};

const mockStore = createStore(rootReducer, preLoadedState);

describe("App", () => {
  test("renders App component", () => {
    render(
      <Provider store={mockStore}>
        <Details />
      </Provider>
    );
  });
});
