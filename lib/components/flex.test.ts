import { test } from "@jest/globals";
import { Flex } from "./flex";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";
import { Text } from "./text";

test("empty", () => {
  checkComponent(Flex(), {
    type: "flex",
    children: [],
  });
});

test("children", () => {
  checkComponent(
    Flex([
      Text("My text"),
      Button("Test").onPressed("test")
    ]),
    {
      type: "flex",
      children: [
        {
          type: "text",
          value: "My text"
        },
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
