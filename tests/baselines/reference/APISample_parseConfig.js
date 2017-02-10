//// [APISample_parseConfig.ts]

/*
 * Note: This test is a public API sample. The sample sources can be found 
         at: https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#a-minimal-compiler
 *       Please log a "breaking change" issue for any API breaking change affecting this issue
 */

declare var process: any;
declare var console: any;
declare var os: any;

import ts = require("typescript");

function printError(error: ts.Diagnostic): void {
    if (!error) {
        return;
    }
    console.log(`${error.file && error.file.fileName}: ${error.messageText}`);
}

export function createProgram(rootFiles: string[], compilerOptionsJson: string): ts.Program | undefined {
    const { config, error } = ts.parseConfigFileTextToJson("tsconfig.json", compilerOptionsJson)
    if (error) {
        printError(error);
        return undefined;
    }
    const basePath: string = process.cwd();
    const settings = ts.convertCompilerOptionsFromJson(config.config["compilerOptions"], basePath);
    if (!settings.options) {
        for (const err of settings.errors) {
            printError(err);
        }
        return undefined;
    }
    return ts.createProgram(rootFiles, settings.options);
}

//// [APISample_parseConfig.js]
/*
 * Note: This test is a public API sample. The sample sources can be found
         at: https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#a-minimal-compiler
 *       Please log a "breaking change" issue for any API breaking change affecting this issue
 */
"use strict";
exports.__esModule = true;
var ts = require("typescript");
function printError(error) {
    if (!error) {
        return;
    }
    console.log((error.file && error.file.fileName) + ": " + error.messageText);
}
function createProgram(rootFiles, compilerOptionsJson) {
    var _a = ts.parseConfigFileTextToJson("tsconfig.json", compilerOptionsJson), config = _a.config, error = _a.error;
    if (error) {
        printError(error);
        return undefined;
    }
    var basePath = process.cwd();
    var settings = ts.convertCompilerOptionsFromJson(config.config["compilerOptions"], basePath);
    if (!settings.options) {
        for (var _i = 0, _b = settings.errors; _i < _b.length; _i++) {
            var err = _b[_i];
            printError(err);
        }
        return undefined;
    }
    return ts.createProgram(rootFiles, settings.options);
}
exports.createProgram = createProgram;
