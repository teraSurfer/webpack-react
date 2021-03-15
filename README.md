# Webpack React

master branch ->

plain javascript with webpack example.


```
yarn init
```

Fill with appropriate options.

This will create package.json

## Dependencies

Fundamental dependencies

- Webpack, Webpack CLI

```
yarn add -D webpack webpack-cli
```

add the following to scripts in package.json

"scripts": {
    "build": "NODE_ENV=development webpack",
    "build:prod": "NODE_ENV=production webpack"
  }

run webpack using yarn build or yarn build:prod


----------------------

```
yarn add -D webpack-dev-server
```

```
yarn add -D html-webpack-plugin
```

-----------------

day -2

loaders

- CSS loader
```
yarn add -D css-loader style-loader
```

introduce react

```
yarn add react react-dom
```


```
yarn add -D babel-loader @babel/core @babel/preset-react
```