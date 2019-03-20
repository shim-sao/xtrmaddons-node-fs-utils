# FsUtils.resolve(_relPath [, filename, node_env, ext]_)

Méthode pour résoudre un chemin de fichier absolu. Il sera résolu par défaut avec process.cwd()

## Paramètres

| Type   | Argument | Description | Défaut |
|:------:| :--------| :-----------|:-------|
| string | `relPath` | Un un chemin relatif de dossier ou de fichier. | Requis |
| string | `filename` | Un nom de fichier. Le nom du fichier sera préfixé ou suffixé en fonction de le processus d'environnement de Node, comme dans l'exemple suivant *node_env.filename*.| "" |
| string | `node_env` | Le processus d'environnement de Node. Peut être un préfixe ou un suffixe ou null à la place de l'environnement de processus de noeud par défaut. | ```process.env.NODE_ENV``` ou  ```"production"``` si ```undefined```. Passer ```null``` pour ignorer le parameter. |
| string | `ext` | Une extension de fichier. | "" |

## Résultats

| Type   | Description |
|:------:| :-----------|
| string | Le chemin absolu du fichier ou le nom de fichier complet. |

## Exemples

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