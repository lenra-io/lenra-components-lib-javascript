import { test } from "@jest/globals";
import { Wrap } from "./wrap";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("empty", () => {
  checkComponent(Wrap(), {
    _type: "wrap",
    children: [],
  });
});

test("children", () => {
  checkComponent(Wrap([Button("Test").onPressed("test")]), {
    _type: "wrap",
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
