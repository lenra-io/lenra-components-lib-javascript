import { test } from "@jest/globals";
import { View } from "./view";
import { checkComponent } from "./component.test.lib";

test("basic", () => {
  checkComponent(View("test"), {
    type: "view",
    name: "test",
  });
});

test("data", () => {
  checkComponent(View("test").data("coll", { name: "my name" }), {
    "type": "view",
    "name": "test",
    "coll": "coll",
    "query": {
      "name": "my name"
    }
  });
});
