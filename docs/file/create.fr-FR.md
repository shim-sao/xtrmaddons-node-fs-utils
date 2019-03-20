# FsUtils.file.create(_filename [, content, callback]_) [![en-GB](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/united-kingdom-flag-icon-16.png)](create.md)

Méthode pour créer un fichier et son chemin complet s'il n'existe pas.

## Paramètres

| Type   | Argument | Description | Défaut |
|:------:| :--------| :-----------|:-------|
| string | `filename` | Le chemin complet du fichier.| Requis |
| string | `content` | Le contenu du fichier. | "" |
| function | `callback` | Un appel à exécuter après la création du fichier. | undefined |

## Résultats

| Type   | Description |
|:------:| :-----------|
| void | |

## Exemples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

/* Test */

FsUtils.file.create("/pah/to/store/not/existing/folder/myfile.js");

```

---