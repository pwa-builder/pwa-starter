# pwa-starter: lit-element

Welcome to the lit-element edition of the [PWABuilder](https://www.pwabuilder.com/) pwa-starter! Looking to build a new [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) and not sure where to get started? This is what you are looking for! The pwa-starter includes everything you need to start building a production ready PWA and follows all best practices. You get:

- lazy-loaded routes using [@vaadin/router](https://vaadin.com/router).
- A 100 on [Lighthouse](https://developers.google.com/web/tools/lighthouse/), giving you a great starting point for performance and accessibility.
- Use [lit-element](https://lit-element.polymer-project.org/) to build your PWA. lit-element gives you all of the developer experience of React with all   the benefits of Web Components such as smaller bundles for faster load times.
- Includes the [PWABuilder pwa-install component](https://github.com/pwa-builder/pwa-install#pwa-install) for an app store like PWA install experience.
- [Workbox](https://developers.google.com/web/tools/workbox/) for service workers along with the [PWABuilder pwa-update component](https://github.com/pwa-builder/pwa-update#pwa-update) to give your PWA a great offline experience.

## Getting Started

Run `npm install` and then run `npm run dev`, the starter should open in your default browser. From here you can start developing, your changes will be rebuilt and reloaded in the browser as you develop.

## Building for Production

Make sure the `index.prod.html` and `manifest.json` files are updated to your liking and then run `npm run build:prod`, the `dist/` folder will contain your built PWA. The production build will also generate a pre-caching service worker using [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-precaching) and handles that service worker using the [PWABuilder pwa-update component](https://github.com/pwa-builder/pwa-update#pwa-update) web component. 