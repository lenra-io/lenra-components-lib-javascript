import { test } from "@jest/globals";
import { Stack } from "./stack";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("empty", () => {
  checkComponent(Stack(), {
    _type: "stack",
    children: [],
  });
});

test("children", () => {
  checkComponent(Stack([Button("Test").onPressed("test")]), {
    _type: "stack",
    children: [
      {
        _type: "button",
        text: "Test",
        onPressed: {
          _type: "listener",
          name: "test",
        },
      },
    ],
  });
});
