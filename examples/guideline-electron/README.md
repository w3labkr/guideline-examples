# guideline-electron

## Create your application

```shell
npm init -y
npm install --save-dev electron
```

```json
{
  "scripts": {
    "start": "electron ."
  }
}
```

```shell
npm start
```

## Package and distribute your application

```shell
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

```shell
npm run make
```
