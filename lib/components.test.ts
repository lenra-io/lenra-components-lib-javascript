import * as components from "./components";
import * as path from "path";
import * as fs from "fs";

const API_PATH = path.resolve(__dirname, "..", "components-api", "api");
const COMPONENTS_PATH = path.join(API_PATH, "components");

test.skip("components-api loaded", () => {
  expect(fs.existsSync(API_PATH)).toBe(true);
  expect(fs.existsSync(COMPONENTS_PATH)).toBe(true);
});

// describe("Managed component", () => {
//   const componentsSchema = fs.readdirSync(COMPONENTS_PATH);

//   describe.each(componentsSchema.map((comp) => [comp]))("%s", (comp) => {
//     const content = JSON.parse(
//       fs.readFileSync(path.join(COMPONENTS_PATH, comp), "utf-8")
//     );
//     const f = components[content.title];
//     const c = components[`${content.title}Impl`];
//     test(`function ${content.title} exists`, () => {
//       expect(f).toBeDefined();
//     });
//     test(`class ${content.title}Impl exists`, () => {
//       expect(c).toBeDefined();
//     });

//     if (c) {
//       describe("methods", () => {
//         const properties = Object.entries(content.properties).filter(
//           ([key, _]) => !(content.required || []).includes(key)
//         );

//         if (properties.length > 0) {
//           test.each(properties)(`%s exists`, (key, descriptor) => {
//             expect(c.prototype[key]).toBeDefined();
//           });
//         }
//       });
//     }
//   });
// });
