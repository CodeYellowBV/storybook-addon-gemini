# Gemini Addon [![npm version](https://img.shields.io/npm/v/storybook-addon-gemini.svg)](https://www.npmjs.com/package/storybook-addon-gemini)

> **Needs at least [react-storybook](https://github.com/kadirahq/react-storybook) 2.2.1**

This addon for storybook will allow you to see Gemini screenshot tests directly inside your storybook.

**This is a Work in Progress. At the moment this depends on some modifications on the `gemini-gui` package (see [this PR](https://github.com/gemini-testing/gemini-gui/pull/72)). So don't use it yet!!**

This package is inspired a lot from [storybook-addon-specifications](https://github.com/mthuret/storybook-addon-specifications).

\*insert screenshot\*

## Getting Started

First, install the addon

```shell
npm install -D storybook-addon-gemini
```

Add these lines to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import 'storybook-addon-gemini/register';

window.STORYBOOK_ADDON_GEMINI_DOMAIN = 'http://localhost:8000/';
```

Note that the exact host and port can be different, depending on the setup of Gemini.

Make sure [Gemini](https://github.com/gemini-testing/gemini) and [Gemini GUI](https://github.com/gemini-testing/gemini-gui) are installed. Gemini GUI must be running while using this addon.

## Writing Gemini tests

This addon does not care where your Gemini tests live, so you can follow the original documentation for that.

In the Gemini config file, make sure that `rootUrl` is set to the domain the Storybook runs on. So by default your `.gemini.js` file would look something like this:

```js
module.exports = {
    rootUrl: 'http://127.0.0.1:9009'
}
```

The name of a Gemini "suite" should be the name of the component, colon, name of the story. Example: `Button: with text`. This allows the addon to only show the relevant story you've selected.

This addon provides a simple helper that should make it easier to write tests:

```js
const { setStory } = require('storybook-addon-gemini');

gemini.suite('Button: with text', (suite) => {
    setStory(suite, 'Button', 'with text')
        .capture('plain');
});
```

## Roadmap

Currently this addon uses an iframe with the Gemini GUI tests in it.
Optimally, we would only use the backend of Gemini GUI. We could implement the frontend in this addon. That way we can style it better, and make the UI a bit simpler.
