# FsUtils.directory.walkSync(_dir [, filters, flatten, filelist]_) [![en-GB](https://github.com/shim-sao/assets/blob/master/images/united-kingdom-flag-icon-16.png)](walkSync.md)

Méthode permettant de parcourir un répertoire pour y rechercher des fichiers.

## Paramètres

| Type   | Argument | Description | Défaut |
|:------:| :--------| :-----------|:-------|
| string | `dir` | Un chemin d'accès à un répertoire. | Required |
| any | `filters` | `string|number`: rechercher des fichiers se terminant par. `array`: recherche les fichiers se terminant par toutes les chaînes du tableau. `function`: effectuer un appel de fonction avec des paramètres comme celui-ci _callback(filelist, dirFile, flatten)_ | [ ] |
| boolean | `flatten` | Définissez-le sur true pour aplatir la liste de sortie. | false |
| array | `filelist` | La liste de sortie. | [ ] |

## Résultats

| Type   | Description |
|:------:| :-----------|
| void | |

## Exemples

```js
const FsUtils = require("xtrmaddons-node-fs-utils");

FsUtils.directory.walkSync("/pah/to/folder/", ".png");

```

---