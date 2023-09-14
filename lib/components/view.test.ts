import { test } from "@jest/globals";
import { View } from "./view";
import { checkComponent } from "./component.test.lib";

test("basic", () => {
  checkComponent(View("test"), {
    _type: "view",
    name: "test",
  });
});

test("find", () => {
  checkComponent(View("test").find("coll", { name: "my name" }), {
    "_type": "view",
    "name": "test",
    "find": {
      "coll": "coll",
      "query": {
        "name": "my name"
      }
    }
  });
});
