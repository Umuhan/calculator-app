import React from "react";
import renderer from "react-test-renderer";
import QuoteDisplay from "../src/components/QuoteDisplay";

it("renders correctly", () => {
  const tree = renderer.create(<QuoteDisplay />).toJSON();
  expect(tree).toMatchSnapshot();
});
