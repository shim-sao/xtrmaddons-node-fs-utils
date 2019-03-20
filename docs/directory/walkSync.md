# FsUtils.directory.walkSync(_dir [, filters, flatten, filelist]_) [![fr-FR](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/france-flag-icon-16.png)](walkSync.fr-FR.md)

Method to walk through a directory to search for files on it.

## Parameters

| Type   | Argument | Description | Default |
|:------:| :--------| :-----------|:-------|
| string | `dir` | A path to a directory. | Required |
| any | `filters` | `string|number`: search for files ending with. `array`: search for files ending with all strings in the array. `function`: perform a function call with parameters like this callback(filelist, dirFile, flatten)  | [ ] |
| boolean | `flatten` | Set it to true to flatten output list. | false |
| array | `filelist` | The output list. | [ ] |

## Returns

| Type   | Description |
|:------:| :-----------|
| void | |

## Examples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

FsUtils.directory.walkSync("/pah/to/folder/", ".png");

```

---