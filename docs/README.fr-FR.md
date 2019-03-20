# XtrmAddons Node Fs Utils API [![en-GB](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/united-kingdom-flag-icon-16.png)](README.md)

## FsUtils

```js
const FsUtils = require("xtrmaddons-node-fs-utils");
```

### [FsUtils.resolve(_relPath [, filename, node_env, ext]_)](resolve.fr-FR.md)

Méthode pour résoudre un chemin de fichier absolu. Il sera résolu par défaut avec process.cwd()


### [FsUtils.file.create(_filename [, content, callback]_)](file/create.fr-FR.md)

Méthode pour créer un fichier et son chemin complet s'il n'existe pas.

### [FsUtils.directory.ensureExistence(_dir [, root]_)](directory/ensureExistence.md)

Méthode pour s'assurer de l'existence d'un répertoire et le créer, ainsi que tous les répertoires nécessaires sur le chemin.

### FsUtils.directory.walkSync(_dir [, filters, flatten, filelist]_)(directory/walkSync.md)

Méthode permettant de parcourir un répertoire pour y rechercher des fichiers.

---