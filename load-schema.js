const fs = require("fs");
const path = require("path");

loadSchema();

async function loadSchema() {
    const apiVersion = fs.readFileSync("api-version.txt", "utf-8").trim();
    const schemaPath = path.resolve("schemata", `${apiVersion}.json`);
    if (!fs.existsSync(schemaPath)) {
        if (!fs.existsSync("schemata")) {
            fs.mkdirSync("schemata");
        }
        else {
            console.log(`Removing old schemata`);
            fs.readdirSync("schemata").forEach(file => {
                fs.rmSync(path.join("schemata", file));
            });
        }
        console.log(`Loading ${schemaPath} file for API version ${apiVersion}`);
        const response = await fetch(`https://github.com/lenra-io/api/releases/download/v${apiVersion}/lenra-component.schema.json`);
        fs.writeFileSync(schemaPath, await response.text(), "utf-8");
    }
}