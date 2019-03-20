# XtrmAddons Node Fs Utils API

## FsUtils

```js
const FsUtils = require("xtrmaddons-node-fs-utils");
```

---

>### FsUtils.directory.ensureExistence(dir, root)

Method to ensure directory existence and create it and all directories needed on the path.

---

>### FsUtils.directory.walkSync(dir, filters, flatten, filelist = [])

Method to walk through a directory to search for files on it.

---

>### FsUtils.file.create(_filename [, content, callback]_)

Method to create file and its full path if not exists.

---

>### FsUtils.resolve(_relPath [, filename, node_env, ext]_)

Method to resolve absolute configuration file path.

**Parameters :**

| Type     | Argument      | Description                            |
|:--------:| :-------------| :--------------------------------------|
| string   | `relPath` *     | A relative folder or file path & name. |
| string   | `filename`    | A filename. The file name will be prefixed or suffixed according the node process environment like example *node_env.filename*.|
| string   | `node_env`     | The node process environment. Can be a prefix or suffix or null instead of the default node process environment. |
| string   | `ext`     | A file extension. |

**Returns :**

| Type     | Description                            |
|:--------:| :--------------------------------------|
| string   | The absolute path of the file or full filename. |

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

/* Test */
// process.cwd() = "/root/dir";

FsUtils.resolve("my/path/test", "filename", "prefix");
// returns : /root/dir/my/path/test/prefix.filename

FsUtils.resolve("my/path/test", "filename", "suffix", "ext");
// returns : /root/dir/my/path/test/filename.suffix.ext

FsUtils.resolve("my/path/test", "filename.js");
// returns : /root/dir/my/path/test/filename.js

FsUtils.resolve("my/path/test/filename.js");
// returns : /root/dir/my/path/test/filename.js

FsUtils.resolve("my/path/test/", "/sub/filename", null, "js");
// returns : /root/dir/my/path/test/filename.js
```

---
