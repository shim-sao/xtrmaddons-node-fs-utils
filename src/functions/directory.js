"use strict";

// Import external modules.
const fs = require("fs");
const path = require("path");


// export module definition.
exports = module.exports = {
	/**
   * Method to ensure directory existence and create
   * it and all directories needed on the path.
   * 
   * @param {string} dir  A path to a directory.
   * @param {string} root A root path to join to the directory if it is a relative folder (optional).
   * 
   * @returns void
   */
	ensureExistence: function(dir, root = "") {
		// Check if dir if valid.
		if (!dir || (typeof dir !== "string" &&  typeof dir !== "number")) {
			throw new TypeError("Parameter 'dir' is empty or not valid.");
		}

		// Create absolute path if required.
		if(!path.isAbsolute(dir)) {
			dir = path.join(root || process.cwd(), dir);
			if(!path.isAbsolute(dir)) {
				throw new TypeError("Parameter 'dir' need a valid parameter 'root'.");
			}
		}
    
		// Go to parent folder
		let dirname = path.dirname(dir);
    
		// Check if parent folder exists, we can stop here
		if (fs.existsSync(dirname)) {
			return true;
		}

		// Parent folder doesn't exists, so create it.
		// Recursive call to check parent of parent...
		// FsUtils.directory.ensureExistence(dirname);
		this.ensureExistence(dirname);
		fs.mkdirSync(dirname);
	},

	/**
   * Method to walk through a directory to search for files on it.
   * 
   * @param {string} dir        A path to a directory.
   * @param {any}   filters     string|number: search for files ending with.
   *                            array: search for files ending with all strings in the array.
   *                            function: perform a function with parameters like this callback(filelist, dirFile, flatten) 
   * @param {boolean} flatten   Set it to true to flatten output list.
   * @param {array} filelist    The output list.
   * 
   * @returns {array} A nested array of directory and files or an array of files if flatten.
   */
	walkSync: function(dir, filters = [], flatten = false, filelist = []) {
		// Check if dir if valid.
		if (!dir || (typeof dir !== "string" && typeof dir !== "number")) {
			throw new TypeError("Parameter 'dir' is empty or not valid.");
		}
    
		// Read directory content
		const files = fs.readdirSync(dir);
  
		// Loop over content
		for (const file of files) {
			// Create file absolute path
			// Get file statistics
			const dirFile = path.join(dir, file);
			const dirent = fs.statSync(dirFile);
      
			// Case : file is a directory
			if (dirent.isDirectory()) {
				// Initialize directory content output.
				var odir = {
					directory: dirFile,
					files: []
				};
  
				// Read directory content and put it to files.
				odir.files = this.walkSync(dirFile, filters, flatten, dir.files);
  
				// Check if flatten files is define.
				// Add directory to the file list output.
				if (flatten === true) {
					for (const f of odir.files) {
						filelist.push(f);
					}
				} else {
					filelist.push(odir);
				}

				// Case : file is a file
			} else {
				// Proxy to flatten file adding.
				const pushFile = function(filelist, dirFile, flatten) {
					// Check if flatten files is define.
					// Add file to the file list output.
					if (flatten === true) {
						filelist.push(dirFile);
					} else {
						filelist.push({
							file: dirFile
						});
					}
				};
  
				// Apply filter to file.
				if(filters) {
					// Case : filters is a callback to process instead of the proxy.
					if(typeof filters === "function") {
						filters(filelist, dirFile, flatten);
						continue;
					}

					// Case : filters is a string or number, we can convert it as array and process to the next step.
					if(typeof filters === "string" || typeof filters === "number") {
						filters = [filters];
					}

					// Case : filters is an array of string, we can process filters on each value.
					for (const filter of filters) {
						// Filter and proxy add file ending with to the file list output.
						if (dirFile.endsWith(filter)) {
							pushFile(filelist, dirFile, flatten);
						}
					}

					// No filters, we can proxy add the file to the file list output.
				} else {
					pushFile(filelist, dirFile, flatten);
				}
			}
		}
  
		// Returns the file list output.
		return filelist;
	}
};
