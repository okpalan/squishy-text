// To use this module simply add 
// config:"steal.config.js" to steal object in 
// package.json
import stealTools from "steal-tools";
import path from "path";

stealTools.build({
    baseURL: "./",
    config: path.join(__dirname, './package.json')
}, {
    dest: path.join(__dirname, 'dist'),
    filter: ["node_modules/**/*", "package.json"]
});

