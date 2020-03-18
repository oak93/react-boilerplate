import React from "react";
import { shallow } from "enzyme";
import App from "@/App";
import { findByTestAttr } from "@tests/utils/test-utils";

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

describe("App component render processes", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = setup();
  });

  test("App renders without error", () => {
    const appComponent = findByTestAttr(wrapper, "test-app");
    expect(appComponent.length).toBe(1);
  });
});
