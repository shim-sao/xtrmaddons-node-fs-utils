# FsUtils.file.create(_filename [, content, callback]_) [![fr-FR](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/france-flag-icon-16.png)](create.fr-FR.md)

Method to create file and its full path if not exists.

## Parameters

| Type   | Argument | Description | Default |
|:------:| :--------| :-----------|:-------|
| string | `filename` | The full path name of the file.| Required |
| string | `content` | The content of the file. | "" |
| function | `callback` | A callback to execute after file creation. | undefined |

## Returns

| Type   | Description |
|:------:| :-----------|
| void | |

## Examples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

/* Test */

FsUtils.file.create("/pah/to/store/not/existing/folder/myfile.js");

```

---