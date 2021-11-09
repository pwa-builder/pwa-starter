# pwa-starter

[Documentation](https://github.com/pwa-builder/pwa-starter/wiki/)

The PWABuilder pwa-starter is our opinionated, best practices, production tested starter that we use to build all of our PWAs, including [PWABuilder itself](https://blog.pwabuilder.com/posts/introducing-the-brand-new-pwa-builder/). The pwa-starter is a starter codebase, just like create-react-app or the Angular CLI can generate, that uses the PWABuilder team&#39;s preferred front-end tech stack:

- [**lit**](https://lit-element.polymer-project.org/): Our framework of choice. Lit gives us a way to write code that feels remarkably familiar to popular frameworks like React but that compiles down to browser native Web Components with a tiny runtime that provides things such as performant asynchronous rendering. Put plainly, Lit provides that great developer experience that we may be used too but without any sacrifice in either load-time performance or runtime performance.
- [Vaadin Router](https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos): For routing, we use the Vaadin router. It is built with web components, has a tiny package size and all the features you expect from modern routers.
- [**Shadow DOM, CSS Variables, Shadow Parts**](https://lit-element.polymer-project.org/guide/styles#shadow-dom): Modern CSS is incredibly powerful, especially when combining the Shadow DOM, CSS variables and the Shadow Parts APIs. This provides a lot of the features we normally use a CSS pre-processor for, but without the extra complication that a CSS pre-processor adds to your build steps!
- [**Rollup**](https://www.rollupjs.org/guide/en/): Rollup is a &quot;bundler&quot; or build tool that will make working with NPM modules easy while also helping ensure our code is ready for production. Bundlers allows us to both optimize our app for production, such as minfiying our code for a faster load time, and to do things such as compile our TypeScript during development.
- [**Workbox**](https://developers.google.com/web/tools/workbox/): Workbox is a tool that makes working with [**Service Workers**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) easy! Service workers enable awesome capabilities such as enabling your PWA to work completely offline, to do push notifications and even sync data in the background when your app is not open!
- [**TypeScript**](https://www.typescriptlang.org/): TypeScript gives us features such as auto complete in our editors that helps make the development process easier, along with being perfect for working in a team because you can provide types for your APIs, making your code almost self-documenting.

You can find more details about it [here](https://blog.pwabuilder.com/posts/building-pwas-with-web-components!/).

# Getting Started
First, you will need to install Git and a NodeJS environment on your device. Luckily, Windows makes it very easy to install and setup these tools [Set up NodeJS on native Windows | Microsoft Docs](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

Once you have Git and Node installed, you are now ready to grab a copy of the starter! First, you will need a Github account as we did above, which you can create at [GitHub](https://github.com/) . Once you have a Github account you can then visit the code repository for the PWABuilder pwa-starter [here](https://github.com/pwa-builder/pwa-starter) .

Now, tap the green "Use this template" button and follow the directions on the local option:

![A screenshot that shows the Local button on the pwa-starter Github repo](/assets/readme/use-this-template.png)

## Development

The PWABuilder pwa-starter supports two different developer workflows:

### In a browser tab
Run `npm install` and then run `npm run dev`, the starter should open in your default browser. From here you can start developing, your changes will be rebuilt and reloaded in the browser as you develop.

### App-First workflow
Our app-first development workflow enables you to build your PWA while its running in its own app window, just like if a user has installed that app to their Windows device.

- With your app open in VSCode, tap the `Run` button in the title bar and then tap `Start Debugging`. You can also click F5 on your keyboard.
- This will run the development build and will open your PWA in its own window.
- You can then start developing how your normally would, live reloads will simply reload the app in its own window.

## Building for Production

Run `npm run build`, the `dist/` folder will contain your built PWA. The production build will also generate a pre-caching service worker using [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-precaching).

## Deployment and Packaging

### Deployment

Once your PWA is ready to deploy we recommend [Azure static website hosting](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api/) for deploying your PWA.


### Packaging

Many app stores, including the Microsoft Store and the Google Play Store support PWAs. To package your PWA for deployment to these app stores head back to https://pwabuilder.com/, put in your URL and hit `Build My PWA`.


## Dual Screen support

The default layout of this starter is dual screen friendly. We do this [here](https://github.com/pwa-builder/pwa-starter/blob/main/src/script/pages/app-home.ts#L41) by using the [CSS Spanning API](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Foldables/explainer.md#proposal-css-primitives-for-building-dual-screen-layouts) to adjust the layout when the app is spanned on a dual screen device. As you start to build your PWA you can use these CSS features to ensure that your PWA looks good in all of the [dual screen postures](https://docs.microsoft.com/en-us/dual-screen/introduction#dual-screen-overview). For more info on developing PWAs for dual screen devices you can check out the [Microsoft docs here](https://docs.microsoft.com/en-us/dual-screen/cross-platform/#build-web-experiences).


## Extensibility

### NPM Modules
Any NPM module should work with the pwa-starter! Feel free top open an issue if a critical package you use does not work in the starter.

### UI Libraries
Any UI library can be used with the PWABuilder pwa-starter! It is important to remember however that your choice of UI toolkit / components will have an effect on overall performance. Because of this, the team recommends choosing UI libraries that are built mainly as CSS classes (such as Bootstrap) or libraries built with Web Components such as the default UI toolkit for this starter, [fast-components](https://www.fast.design/docs/components/getting-started/). Other UI libraries that we recommend checking out:

- [Ionic UI Components](https://ionicframework.com/docs/components)
- [Material Components](https://material.io/develop/web)
- [Shoelace](https://shoelace.style/)

### Microsoft Graph Toolkit

The [Microsoft Graph Toolkit](https://docs.microsoft.com/en-us/graph/toolkit/overview) is a collection of reusable, framework-agnostic web components and helpers for accessing and working with Microsoft Graph. The components are fully functional right of out of the box, with built in providers that authenticate with and fetch data from Microsoft Graph.

### Authentication

For Authentication you can use the [PWABuilder pwa-auth](https://github.com/pwa-builder/pwa-auth) web component. This component lets your users sign-in/sign-up using their Microsoft, Google, or Facebook account. Your app receives their email address, name, and profile picture. Built with ❤ by the PWABuilder team.

😎 Bonus: It's super lightweight, pulling in the authentication libraries only when the user tries to sign-in with one.

😎😎 Double bonus: It uses the new [Credential Management APIs](https://developers.google.com/web/fundamentals/security/credential-management) to speed through sign-ins without bulky pop-ups or redirects.

## Sample PWAs built with the starter!

- SimpleEdit: Simple Image editing and collage making app!
   - Github: https://github.com/jgw96/simple-edit-2
   - Web: https://gray-pond-01ccec410.azurestaticapps.net/
   - Microsoft Store: https://www.microsoft.com/store/productId/9P53Q9BF3MV6
   - Google Play: https://play.google.com/store/apps/details?id=net.azurestaticapps.thankful_tree_07da4921e.twa&hl=en&gl=US

- Mail GO: Full featured email client. This app aims to show the power of the web by integrating many of the advanced APIs now avilable to PWAs, such as [receiving content shared from another app](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share#receiving-shared-content), [a custom titlebar](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay), [sycing data in the background](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/background-syncs) and more!
  - Github: https://github.com/jgw96/graph-app
  - Web: https://www.memosapp.app
  - Microsoft Store: https://www.microsoft.com/store/productId/9NQW566N4866

## More Resources
- [The pwa-starter wiki](https://github.com/pwa-builder/pwa-starter/wiki/)


## Folder Structure

```
pwa-starter
│   README.md (docs)
│   rollup.config.js (bundler config https://rollupjs.org/)
|   tsconfig.json (TypeScript config https://www.typescriptlang.org/)
|   pwabuilder-sw.js (Service Worker https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
|   package.json (https://docs.npmjs.com/creating-a-package-json-file)
|   package-lock.json (https://docs.npmjs.com/files/package-lock.json)
|   manifest.json (web manifest https://developer.mozilla.org/en-US/docs/Web/Manifest)
|   index.prod.html (index.html file used for production builds)
|   index.html (index.html for dev builds)
|   *note*: The index.prod.html registers a service worker which caches assets, so index.html is used for dev builds
|   .gitignore (git config file https://git-scm.com/docs/gitignore)
│
└───src (most of your development will happen here)
│   │   global.css (used for global CSS styles and CSS variables)
│   │
│   └───script
│       │
│       |
|       └───components
|           |   header.ts (header component)
|       |
|       |
|       └───pages
|           |   app-index.ts (app-index component)
|           |   app-home.ts (app-home component)
|           |   app-about.ts (app-about component)

```
