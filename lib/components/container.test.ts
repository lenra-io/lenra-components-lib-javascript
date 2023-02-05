import { test } from "@jest/globals";
import { Container } from "./container";
import { checkComponent } from "./component.test.lib";
import { Button } from "./button";

test("basic", () => {
  checkComponent(Container.new(), {
    type: "container",
  });
});

test("child", () => {
  const text = "My text";
  checkComponent(Container.new(Button.new("Test").onPressed("test")), {
    type: "container",
    child: {
      type: "button",
      text: "Test",
      onPressed: {
        action: "test",
      },
    },
  });
});

test("card", () => {
  const text = "My text";
  checkComponent(Container.card(Button.new("Test").onPressed("test")), {
    type: "container",
    border: {
      top: {
        width: 1,
        color: 4292665575,
      },
      bottom: {
        width: 1,
        color: 4292665575,
      },
      left: {
        width: 1,
        color: 4292665575,
      },
      right: {
        width: 1,
        color: 4292665575,
      },
    },
    padding: {
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
    },
    decoration: {
      color: 4294967295,
      borderRadius: {
        topLeft: {
          x: 8,
          y: 8,
        },
        topRight: {
          x: 8,
          y: 8,
        },
        bottomRight: {
          x: 8,
          y: 8,
        },
        bottomLeft: {
          x: 8,
          y: 8,
        },
      },
      boxShadow: {
        blurRadius: 10,
        offset: {
          dx: 4,
          dy: 4,
        },
        color: 2147483648,
      },
    },
    child: {
      type: "button",
      text: "Test",
      onPressed: {
        action: "test",
      },
    },
  });
});
