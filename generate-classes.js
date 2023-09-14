const fs = require("fs");
const components = require("./dist/components");
const path = require("path");

const COMPONENT_CLASSES_PATH = path.resolve("lib", "components");

generateClasses();

async function generateClasses() {
  const apiVersion = fs.readFileSync("api-version.txt", "utf-8").trim();
  console.log(`Generating classes for API version ${apiVersion}`);
  const schemaPath = path.resolve("schemata", `${apiVersion}.json`);
  const mainSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
  // Generate not existing classes
  let componentsFileContent = fs.readFileSync(
    COMPONENT_CLASSES_PATH + ".ts",
    "utf-8"
  );
  let componentsFileChanged = false;

  const componentList = mainSchema.oneOf.map(c => c.$ref);
  for (const ref of componentList) {
    const comp = ref.split("/").pop();
    // Check if the class exists
    const schema = ref.replace(/^#\/?/, "").split("/").reduce((o, part) => o[part], mainSchema);
    const baseClassPath = path.join(COMPONENT_CLASSES_PATH, `${comp}.base.ts`);
    console.log(`Generating ${baseClassPath} file for ${schema.title}`);
    fs.writeFileSync(baseClassPath, generateBaseClass(schema));

    if (!components[schema.title]) {
      console.log(`class ${schema.title} does not exist`);
      // Check if the file corresponding to the schema exists
      const classPath = path.join(COMPONENT_CLASSES_PATH, `${comp}.ts`);

      if (!fs.existsSync(classPath)) {
        // Creates the file
        console.log(`Generating ${classPath} file for ${schema.title}`);
        fs.writeFileSync(classPath, generateImplClass(schema, `${comp}.base`));
      }
      // Check if the file is imported in the main components file
      const importComponent = `export * from './components/${comp}'`;
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

function generateImplClass(schema, from) {
  const { title, properties, required } = schema;
  const requiredNoType = required.filter((key) => key != "type");

  return `import { I${title}, ${title}BaseImpl } from './${from}'

export { I${title} }

export function ${title}(${requiredNoType.map(key => `${key}: I${title}['${key}']`).join(", ")}): ${title}Impl {
  return new ${title}Impl({
    _type: "${properties.type.enum[0]}",
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
        const jsdocLines = [];
        const property = properties[key];
        let jsdoc = '';
        if (property.description) jsdocLines.push(property.description);
        if (property.deprecated) jsdocLines.push(`@deprecated ${property.deprecatedComment ?? ""}`);
        if (jsdocLines.length > 0) {
          jsdoc = `/**
${jsdocLines
              .flatMap(line => line.split('\n'))
              .map(line => `     * ${line}`).join('\n')}
     */
    `;
        }
        if (/^on[A-Z]/.test(key)) {
          return `${jsdoc}${key}(action: string, props?: { [k: string]: unknown; }) { return this.setListener("${key}", action, props); }`;
        }
        return `${jsdoc}${key}(${key}: I${title}['${key}']) {
        this.model.${key} = ${key};
        return this;
    }`;
      })
      .join("\n    ")}
}
`;
}
