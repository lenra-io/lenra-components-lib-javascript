import { test } from "@jest/globals";
import { Wrap } from "./wrap";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("empty", () => {
  checkComponent(Wrap.new(), {
    type: "wrap",
    children: [],
  });
});

test("children", () => {
  checkComponent(Wrap.new(Button.new("Test").onPressed("test")), {
    type: "wrap",
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
