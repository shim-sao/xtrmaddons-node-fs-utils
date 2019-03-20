# XtrmAddons Node Fs Utils API [![fr-FR](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/france-flag-icon-16.png)](README.fr-FR.md)

## FsUtils

```js
const FsUtils = require("xtrmaddons-node-fs-utils");
```

### [FsUtils.resolve(_relPath [, filename, node_env, ext]_)](resolve.md)

Method to solve an absolute file path. It will be solved by default with process.cwd()

### [FsUtils.file.create(_filename [, content, callback]_)](file/create.md)

Method to create file and its full path if not exists.

---

>### FsUtils.directory.ensureExistence(dir, root)

Method to ensure directory existence and create it and all directories needed on the path.

---

>### FsUtils.directory.walkSync(dir, filters, flatten, filelist = [])

Method to walk through a directory to search for files on it.

---