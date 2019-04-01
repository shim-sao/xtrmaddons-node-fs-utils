/* eslint-disable no-console */
/* eslint-disable no-undef */
"use strict";

// Import external modules.
require("module-alias/register");

// Import internal modules.
const FsUtils = require("@dist");

/* Test */
// const myPath = process.cwd();

process.env.NODE_ENV = "development";

FsUtils.file.create(".environment/production.env", "test content");