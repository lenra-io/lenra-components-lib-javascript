const { compile } = require("json-schema-to-typescript");
const fs = require("fs");
const path = require("path");

generatesInterface();

// Generate interfaces
async function generatesInterface() {
  const apiVersion = fs.readFileSync("api-version.txt", "utf-8").trim();
  console.log(`Generating interfaces for API version ${apiVersion}`);
  const schemaPath = path.resolve("schemata", `${apiVersion}.json`);
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
  const ts = await compile(schema);
  const tsFile = "lib/component.ts";
  fs.mkdirSync(path.dirname(tsFile), {
    recursive: true,
  });
  fs.writeFileSync(tsFile, ts);
}
