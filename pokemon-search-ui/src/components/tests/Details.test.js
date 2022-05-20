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
      is_legendary: true,
    },
  },
  history: ["pikachu", "azelf", "charizard"],
};

const mockStore = createStore(rootReducer, preLoadedState);

describe("App", () => {
  const component = (
    <Provider store={mockStore}>
      <Details />
    </Provider>
  );

  test("renders App component", () => {
    render(component);
  });

  test("render to match snapshot", () => {
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  test("contains pokemon name", () => {
    const { getByText } = render(component);

    expect(getByText("CHARIZARD")).toBeInTheDocument();
  });

  test("contains pokemon description", () => {
    const { getByText } = render(component);

    expect(
      getByText(
        "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
      )
    ).toBeInTheDocument();
  });

  test("contains pokemon legendary label", () => {
    const { getByText } = render(component);

    expect(getByText("Legendary!")).toBeInTheDocument();
  });
});
