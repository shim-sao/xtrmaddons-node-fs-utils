/* eslint-disable no-console */
/* eslint-disable no-undef */
"use strict";

// Import external modules.
require("module-alias/register");
const assert = require("assert");

// Import internal modules.
const FsUtils = require("@dist");

/* Test */
const myPath = process.cwd();

process.env.NODE_ENV = "development";

describe("FsUtils.resolve() Mocha String Test", function () {
	const str1 = myPath + "\\my\\path\\test\\prefix.filename";
	it(`should return [${str1}] if the path is correct.`, function(){
		const result = FsUtils.resolve("my/path/test", "filename", "prefix");
		assert.equal(result, str1);
	});
  
	const str2 = myPath + "\\my\\path\\test\\filename.suffix.ext";
	it(`should return [${str2}] if the path is correct.`, function(){
		const result = FsUtils.resolve("my/path/test", "filename", "suffix", "ext");
		assert.equal(result, str2);
	});
  
	let str = myPath + "\\my\\path\\test\\development.filename.js";
	it(`should return [${str}] if the path is correct.`, function(){
		const result = FsUtils.resolve("my/path/test", "filename.js");
		assert.equal(result, str);
	});
  
	let str5 = myPath + "\\my\\path\\test\\filename.js";
	it(`should return [${str5}] if the path is correct.`, function(){
		const result = FsUtils.resolve("my/path/test/filename.js");
		assert.equal(result, str5);
	});
  
	const str3 = myPath + "\\my\\path\\test\\sub\\filename.js";
	it(`should return [${str3}] if the path is correct.`, function(){
		const result = FsUtils.resolve("my/path/test/", "/sub/filename", null, "js");
		assert.equal(result, str3);
	});
  
	const str4 = myPath + "\\my\\path\\test\\development.filename.js";
	it(`should return [${str4}] if the path is correct.`, function(){
		const result = FsUtils.resolve("my/path/test/", "filename.js");
		assert.equal(result, str4);
	});
});