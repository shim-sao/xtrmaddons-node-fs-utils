"use strict";

// Import external modules.
const path = require("path");

/**
 * Method to resolve absolute application file path.
 * 
 * @param {string} relPath   A relative folder or file path & name.
 * @param {string} filename  A filename. The file will be prefixed or suffixed
 * 													 according the node process environment: node_env.filename.
 * @param {string} node_env  The node process environment.
 *                           Can be a prefix or suffix or null instead of the default
 *                           node process environment.
 * @param {string} ext       A file extension.
 * 
 * @returns {string} The absolute path to file or directory.
 */
exports = module.exports = function(relPath, filename = "", node_env = "", ext = "") {
	if (!relPath || (typeof relPath !== "string" && typeof relPath !== "number")) {
		throw new TypeError("Parameter 'relPath' is empty or not valid.");
	}
  
	// Initialize node_env
	if (node_env !== null)
		node_env = node_env || process.env.NODE_ENV || "production";
  
	// Check if we have a specific filename.
	if (filename && (node_env !== "production" || node_env === null)) {
		// Case : filename.node_env.ext
		if (ext) {
			if(node_env === null)
				filename = [filename, ext].join(".");
			else
				filename = [filename, node_env, ext].join(".");
		} 
		// Case : node_env.filename
		else if(node_env !== null) {
			filename = [node_env, filename].join(".");
		}
	}

	// Create absolute path.
	let absPath = relPath;
	if (filename)
		absPath = path.join(relPath, filename);
	if (!path.isAbsolute(absPath))
		absPath = path.join(process.cwd(), absPath);

	// Return resolved path.
	return absPath;
};