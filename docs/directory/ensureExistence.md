# FsUtils.directory.ensureExistence(_dir [, root]_) [![fr-FR](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/france-flag-icon-16.png)](ensureExistence.fr-FR.md)

Method to ensure directory existence and create it and all directories needed on the path.

## Parameters

| Type   | Argument | Description | Default |
|:------:| :--------| :-----------|:-------|
| string | `dir` | A path to a directory. | Required |
| string | `root` | A root path to join to the directory if it is a relative folder | "" |

## Returns

| Type   | Description |
|:------:| :-----------|
| void | |

## Examples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

/* Test */

FsUtils.directory.ensureExistence("/pah/to/store/not/existing/folder/");

```

---