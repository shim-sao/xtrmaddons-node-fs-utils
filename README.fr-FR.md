# XtrmAddons Node Fs Utils [![en-GB](https://github.com/shim-sao/assets/blob/master/images/united-kingdom-flag-icon-16.png)](README.md)

Ce répertoire est destiné à compiler dans une class d'utilitaires une série de fonctions pour effectuer des actions sur les répertoires et les fichiers qu'ils contiennent.

## Install

```js
// Ajout de la dépendance au fichier package.json
{
  "name": "my-project",
  "version": "0.0.0",
  "dependencies": {
    // Lien direct vers la branche courante du Répertoire Git
    // Copier/coller cette dépendance.
    "xtrmaddons-node-fs-utils": "shim-sao/xtrmaddons-node-fs-utils"
  }
}
```

Après avoir ajouté cette dépendance dans la liste des dépendances, écécuter la commande suivanate pour l'installation du module :

```batch
npm run install
```

---

## [API Documentation](docs/README.fr-FR.md)

Documentation des fonctions contenues dans l'API.

---


## Build

Commande pour réaliser la compilation avec Babel pour la distribution :

```batch
npm run build
```

## Tests Mocha

Commande pour réaliser les tests unitaires avec Mocha :

```batch
npm run test
```

## Eslint fix

Commande pour réaliser les fix avec Eslint :

```batch
npm run eslint
```
