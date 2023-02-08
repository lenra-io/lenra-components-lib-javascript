import { test } from "@jest/globals";
import { Flex } from "./flex";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("empty", () => {
  checkComponent(Flex(), {
    type: "flex",
    children: [],
  });
});

test("children", () => {
  checkComponent(Flex(Button("Test").onPressed("test")), {
    type: "flex",
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
