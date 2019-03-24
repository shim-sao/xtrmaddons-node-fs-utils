# XtrmAddons Node Fs Utils [![fr-FR](https://github.com/shim-sao/assets/blob/master/images/france-flag-icon-16.png)](README.fr-FR.md)

This directory is intended to compile in a class of utilities a series of functions to perform actions on the directories and the files they contain.

## Install

```js
// Adding the file dependency package.json
{
  "name": "my-project",
  "version": "0.0.0",
  "dependencies": {
    // Direct link to the current branch of the Git Repository.
    // Copy/paste this dependency.
    "xtrmaddons-node-fs-utils": "shim-sao/xtrmaddons-node-fs-utils"
  }
}
```

After adding this dependency in the list of dependencies, execute the following command for the installation of the module: :

```batch
npm run install
```

---

## [API Documentation](docs/README.md)

Documentation of the functions contain in the API.

---

## Build

Command to perform Babel compilation for distribution :

```batch
npm run build
```

## Tests Mocha

Command to perform unit tests with Mocha :

```batch
npm run test
```

## Eslint fix

Command to perform fix with Eslint :

```batch
npm run eslint
```