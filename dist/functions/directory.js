"use strict"; // Import external modules.

var fs = require("fs");

var path = require("path"); // export module definition.


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
  ensureExistence: function ensureExistence(dir) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    // Check if dir if valid.
    if (!dir || typeof dir !== "string" && typeof dir !== "number") {
      throw new TypeError("Parameter 'dir' is empty or not valid.");
    } // Create absolute path if required.


    if (!path.isAbsolute(dir)) {
      dir = path.join(root || process.cwd(), dir);

      if (!path.isAbsolute(dir)) {
        throw new TypeError("Parameter 'dir' need a valid parameter 'root'.");
      }
    } // Go to parent folder


    var dirname = path.dirname(dir); // Check if parent folder exists, we can stop here

    if (fs.existsSync(dirname)) {
      return true;
    } // Parent folder doesn't exists, so create it.
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
  walkSync: function walkSync(dir) {
    var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var flatten = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var filelist = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    // Check if dir if valid.
    if (!dir || typeof dir !== "string" && typeof dir !== "number") {
      throw new TypeError("Parameter 'dir' is empty or not valid.");
    } // Read directory content


    var files = fs.readdirSync(dir); // Loop over content

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var file = _step.value;
        // Create file absolute path
        // Get file statistics
        var dirFile = path.join(dir, file);
        var dirent = fs.statSync(dirFile); // Case : file is a directory

        if (dirent.isDirectory()) {
          // Initialize directory content output.
          var odir = {
            directory: dirFile,
            files: []
          }; // Read directory content and put it to files.

          odir.files = this.walkSync(dirFile, filters, flatten, dir.files); // Check if flatten files is define.
          // Add directory to the file list output.

          if (flatten === true) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = odir.files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var f = _step2.value;
                filelist.push(f);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            filelist.push(odir);
          } // Case : file is a file

        } else {
          // Proxy to flatten file adding.
          var pushFile = function pushFile(filelist, dirFile, flatten) {
            // Check if flatten files is define.
            // Add file to the file list output.
            if (flatten === true) {
              filelist.push(dirFile);
            } else {
              filelist.push({
                file: dirFile
              });
            }
          }; // Apply filter to file.


          if (filters) {
            // Case : filters is a callback to process instead of the proxy.
            if (typeof filters === "function") {
              filters(filelist, dirFile, flatten);
              continue;
            } // Case : filters is a string or number, we can convert it as array and process to the next step.


            if (typeof filters === "string" || typeof filters === "number") {
              filters = [filters];
            } // Case : filters is an array of string, we can process filters on each value.


            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = filters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var filter = _step3.value;

                // Filter and proxy add file ending with to the file list output.
                if (dirFile.endsWith(filter)) {
                  pushFile(filelist, dirFile, flatten);
                }
              } // No filters, we can proxy add the file to the file list output.

            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          } else {
            pushFile(filelist, dirFile, flatten);
          }
        }
      } // Returns the file list output.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return filelist;
  }
};