# FsUtils.directory.ensureExistence(_dir [, root]_) [![en-GB](https://github.com/shim-sao/XtrmAddons-Batch/blob/master/MySQLBatchBackup/images/united-kingdom-flag-icon-16.png)](ensureExistence.fr-FR.md)

Méthode pour s'assurer de l'existence d'un répertoire et le créer, ainsi que tous les répertoires nécessaires sur le chemin.

## Paramètres

| Type   | Argument | Description | Défaut |
|:------:| :--------| :-----------|:-------|
| string | `dir` | Un chemin d'accès à un répertoire. | Requis |
| string | `root` | Un chemin racine à rejoindre au répertoire s'il s'agit d'un dossier relatif | "" |

## Résultats

| Type   | Description |
|:------:| :-----------|
| void | |

## Exemples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

FsUtils.directory.ensureExistence("/pah/to/store/not/existing/folder/");

FsUtils.directory.ensureExistence("/not/existing/folder/", process.cwd());

```

---