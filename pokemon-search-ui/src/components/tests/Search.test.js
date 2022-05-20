import React from "react";
import { render, screen } from "@testing-library/react";

import Search from "../Search";
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
  const component = (
    <Provider store={mockStore}>
      <Search />
    </Provider>
  );

  test("renders App component", () => {
    render(component);
  });

  test("render to match snapshot", () => {
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  test("renders contains search button", () => {
    const { getByText } = render(component);

    expect(getByText("Submit")).toBeInTheDocument();
  });
  
  test("renders contains search input", () => {
    const { getByPlaceholderText } = render(component);

    expect(getByPlaceholderText("Search Pokemon.....")).toBeInTheDocument();
  });
});
