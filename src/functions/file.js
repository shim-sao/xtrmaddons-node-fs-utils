"use strict";

// Import external modules.
const fs = require("fs");
const path = require("path");


// export module definition.
exports = module.exports = {
	/**
   * Method to create file and its full path if not exists.
   * 
   * @param {string}   filename   The full path name of the file.
   * @param {string}   content    The content of the file.
   * @param {function} callback   A callback to execute after file creation.
   * 
   * @returns void
   */
	create: function(filename, content, callback) {
		if (!filename || (typeof filename !== "string" &&  typeof filename !== "number")) {
			throw new TypeError("Parameter 'filename' is empty or not valid.");
		}
    
		if (callback && typeof callback !== "function") {
			throw new TypeError("Parameter 'callback' is not a valid function.");
		}

		fs.promises
			.mkdir(path.dirname(filename), { recursive: true })
		// x => void is never used.
		// eslint-disable-next-line no-unused-vars
			.then(x =>
				fs.promises
					.writeFile(filename, content)
				// y => void is never used.
				// eslint-disable-next-line no-unused-vars
					.then(y => {
						if (callback) callback();
					})
			);
	},
  
	createJsonArray: function(filename, callback) {
		this.createFile(filename, "[]", callback);
	},
  
	createJsonObject: function(filename, callback) {
		this.createFile(filename, "{}", callback);
	}
};