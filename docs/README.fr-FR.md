# XtrmAddons Node Fs Utils API

## FsUtils

```js
const FsUtils = require("xtrmaddons-node-fs-utils");
```

### [FsUtils.resolve(_relPath [, filename, node_env, ext]_)](resolve.fr-FR.md)

Méthode pour résoudre un chemin de fichier absolu. Il sera résolu par défaut avec process.cwd()


### [FsUtils.file.create(_filename [, content, callback]_)](file/create.fr-FR.md)

Méthode pour créer un fichier et son chemin complet s'il n'existe pas.

---

>### FsUtils.directory.ensureExistence(dir, root)

Method to ensure directory existence and create it and all directories needed on the path.

---

>### FsUtils.directory.walkSync(dir, filters, flatten, filelist = [])

Method to walk through a directory to search for files on it.

---