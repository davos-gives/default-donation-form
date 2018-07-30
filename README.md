This repository is home to the default donation form that we'll provide (and allow customization for) to charities as a base to use or modify to meet their needs.

The default donation form was created using [Create React App](https://github.com/facebookincubator/create-react-app), and hasn't been ejected from the defaults that come with this project (which would require us to maintain our own Webpack).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents


- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Config](#config)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn run build](#yarn-run-build)
- [Libraries](#libraries)
  - [Tailwind](#tailwind)



## Getting started

1. Install Node and Create React App from your favourite application manager. For OSX we suggest Homebrew.
2. Clone this project from the organizations repository, `cd` into it and install necessary packages using `yarn add`.
3. enter `yarn start` to run the application locally, it'll automatically open a window in your default browswer.

## Config

For Demo purposes we're using a shared Firebase database, the credentials for which currently live in base.js. For production we'll need to configure environment variables to identify and connect with our central service for payment processing.

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Installing a Dependency

In this project we've been using Yarn rather than NPM.


you may use `yarn`:

```sh
yarn add react-router
```

This works for any library, not just `react-router`.

## Importing a Component

In this application we're using the es6 module format to bring in the components [`import` and `export`](http://exploringjs.com/es6/ch_modules.html).

For example:

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

## Libraries

### Tailwind

For this, and all other applications within Davos we've been using the functional CSS framework called [Tailwind](https://tailwindcss.com/). Working this way reduces the need to write CSS code as often, although it does add to the length of class declarations on components. The documentation for this project is thorough and a good resource to have open while working.

The example below gives us: Uppercase text that is 0.75rem and dark grey, and a padding of 4rem on the left side.

```html
  <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="province">Province</label>


```
