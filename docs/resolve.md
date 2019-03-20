# FsUtils.resolve(_relPath [, filename, node_env, ext]_) [![fr-FR](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/france-flag-icon-16.png)](resolve.fr-FR.md)

Method to solve an absolute file path. It will be solved by default with process.cwd()

## Parameters

| Type     | Argument      | Description                            | Default |
|:--------:| :-------------| :--------------------------------------|:--------|
| string   | `relPath`      | A relative folder or file path. | Required |
| string   | `filename`    | A filename. The file name will be prefixed or suffixed according the node process environment like example *node_env.filename*.| "" |
| string   | `node_env`     | The node process environment. Can be a prefix or suffix or null instead of the default node process environment. | ```process.env.NODE_ENV``` or  ```"production"``` if ```undefined```. Pass ```null``` to ignore parameter. |
| string   | `ext`     | A file extension. | "" |

## Returns

| Type     | Description                            |
|:--------:| :--------------------------------------|
| string   | The absolute path of the file or full filename. |

## Examples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

/* Test */
// process.cwd() = "/root/dir";
// process.env.NODE_ENV = "development";

FsUtils.resolve("my/path/test", "filename", "prefix");
// returns : /root/dir/my/path/test/prefix.filename

FsUtils.resolve("my/path/test", "filename", "suffix", "ext");
// returns : /root/dir/my/path/test/filename.suffix.ext

FsUtils.resolve("my/path/test", "filename.js");
// returns : /root/dir/my/path/test/development.filename.js

FsUtils.resolve("my/path/test/filename.js");
// returns : /root/dir/my/path/test/filename.js

FsUtils.resolve("my/path/test/", "/sub/filename", null, "js");
// returns : /root/dir/my/path/test/sub/filename.js
```

---