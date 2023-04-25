import { Component } from "./component";
import { Component as IComponent } from "../component";

export function checkComponent<T extends IComponent>(
  component: Component<T>,
  expected: T
) {
  const received: T = component.toJSON();
  try {
    expect(received).toEqual(expected);
  } catch (e) {
    console.log(
      "Received:\n",
      JSON.stringify(received, null, 2),
      "\nExpected",
      JSON.stringify(expected, null, 2)
    );
    throw e;
  }
}
