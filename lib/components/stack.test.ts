import { test } from "@jest/globals";
import { Stack } from "./stack";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("empty", () => {
  checkComponent(Stack.new(), {
    type: "stack",
    children: [],
  });
});

test("children", () => {
  checkComponent(Stack.new(Button.new("Test").onPressed("test")), {
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
