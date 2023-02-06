const { compileFromFile } = require("json-schema-to-typescript");
const fs = require("fs");
const components = require("./dist/components");
const path = require("path");
const ts = require('typescript');

const API_PATH = path.resolve("components-api", "api");
const COMPONENTS_PATH = path.join(API_PATH, "components");
const COMPONENT_CLASSES_PATH = path.resolve("lib", "components");
const ROOT_FILE = "component.schema.json";

generatesInterface().then(() => generateClasses());

// Generate interfaces
async function generatesInterface() {
  const ts = await compileFromFile(path.join(API_PATH, ROOT_FILE), {
    cwd: API_PATH,
  });
  const tsFile = `lib/${schemaToTypescriptFilename(ROOT_FILE)}`;
  fs.mkdirSync(path.dirname(tsFile), {
    recursive: true,
  });
  fs.writeFileSync(tsFile, ts);
}

async function generateClasses() {
  // Generate not existing classes
  let componentsFileContent = fs.readFileSync(
    COMPONENT_CLASSES_PATH + ".ts",
    "utf-8"
  );
  let componentsFileChanged = false;

  const schemaFiles = fs.readdirSync(COMPONENTS_PATH);
  for (const comp of schemaFiles) {
    // Check if the class exists
    const schemaPath = path.join(COMPONENTS_PATH, comp);
    const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
    const baseClassPath = path.join(
      COMPONENT_CLASSES_PATH,
      comp.replace(/\.schema\.json$/, ".base.ts")
    );
    console.log(`Generating ${baseClassPath} file for ${schema.title}`);
    fs.writeFileSync(baseClassPath, generateBaseClass(schema));

    if (!components[schema.title]) {
      console.log(`class ${schema.title} does not exist`);
      // Check if the file corresponding to the schema exists
      const classPath = path.join(
        COMPONENT_CLASSES_PATH,
        schemaToTypescriptFilename(comp)
      );

      if (!fs.existsSync(classPath)) {
        // Creates the file
        console.log(`Generating ${classPath} file for ${schema.title}`);
        fs.writeFileSync(classPath, generateImplClass(schema, comp.replace(/\.schema\.json$/, ".base")));
      }
      // Check if the file is imported in the main components file
      const importComponent = `export * from './components/${comp.replace(
        /\.schema\.json$/,
        ""
      )}'`;
      if (!componentsFileContent.includes(importComponent)) {
        console.log(`Adding import for ${classPath}`);
        componentsFileContent += "\n" + importComponent + ";";
        componentsFileChanged = true;
      }
    }
  }
  if (componentsFileChanged) {
    console.log(`Updating ${COMPONENT_CLASSES_PATH}`);
    fs.writeFileSync(COMPONENT_CLASSES_PATH + ".ts", componentsFileContent);
  }
}

function schemaToTypescriptFilename(name) {
  return name.replace(/\.schema\.json$/, ".ts");
}

function generateImplClass(schema, from) {
  const { title, properties, required } = schema;
  const requiredNoType = required.filter((key) => key != "type");

  return `import { I${title}, ${title}BaseImpl } from './${from}'

export { I${title} }

export function ${title}(${requiredNoType.map(key => `${key}: I${title}['${key}']`).join(", ")}): ${title}Impl {
  return new ${title}Impl({
    type: "${properties.type.enum[0]}",
    ${requiredNoType
      .map((key) => `${key}: ${key},`)
      .join("\n    ")}
  });
}

export class ${title}Impl extends ${title}BaseImpl {
  // Add here custom implementations
}
`;
}

function generateBaseClass(schema) {
  const { title, properties, required } = schema;
  const propertiesNotRequired = (properties ? Object.entries(properties) : []).map(([key, _]) => key)
    .filter(key => !(required || []).includes(key));

  return `import { ${title} as I${title} } from '../component'
import { Component } from './component';

export { I${title} }

export class ${title}BaseImpl extends Component<I${title}> {
    ${propertiesNotRequired
      .map(key => {
        if (/^on[A-Z]/.test(key)) {
          return `${key}(action: string, props?: { [k: string]: unknown; }) { return this.setListener("${key}", action, props); }`;
        }
        return `${key}(${key}: I${title}['${key}']) {
        this.model.${key} = ${key};
        return this;
    }`;
      })
      .join("\n    ")}
}
`;
}
