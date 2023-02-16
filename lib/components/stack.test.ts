import { test } from "@jest/globals";
import { Stack } from "./stack";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("empty", () => {
  checkComponent(Stack(), {
    type: "stack",
    children: [],
  });
});

test("children", () => {
  checkComponent(Stack([Button("Test").onPressed("test")]), {
    type: "stack",
    children: [
      {
        type: "button",
        text: "Test",
        onPressed: {
          action: "test",
        },
      },
    ],
  });
});
