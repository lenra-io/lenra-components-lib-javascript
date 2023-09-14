import { test } from "@jest/globals";
import { Flex } from "./flex";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";
import { Text } from "./text";

test("empty", () => {
  checkComponent(Flex(), {
    _type: "flex",
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
      _type: "flex",
      children: [
        {
          _type: "text",
          value: "My text"
        },
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
