"use strict";
/**
 * Class File System Utils
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FsUtils = function FsUtils() {
  _classCallCheck(this, FsUtils);
};
/**
 * Method to resolve absolute application file path.
 */


FsUtils.resolve = require("./functions/resolve");
/**
 * Property file methods provider.
 * Provides methods relative to files management.
 */

FsUtils.file = require("./functions/file");
/**
 * Property file methods provider.
 * Provides methods relative to directories management.
 */

FsUtils.directory = require("./functions/directory"); // Export FsUtils class as default module.

exports = module.exports = FsUtils;