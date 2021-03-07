# JS

We have a few folders that act as the most common separators of application logic. Adding more specific folders/subfolders may be appropriate as the app scales.

In the root `js` folder, we have a few special files.

- `index.js` is the main entry point for the app where we instantiate our Vue instance.
- `globals.js` is used to register global plugins, components, directives, or mixins on our Vue instance.
- `router.js` is used to configure and register all `VueRouter` routes/pages and corresponding components.

## Components

All Vue components belong in `js/components`. The `app.vue` component lives all on its own since it's unique. It's the base component that wraps the entire project. This can be a good place to initiate logic that's required for the entire app (user session and auth, fetching global data, etc).

If a parent/child component design is required, a subfolder could be necessary in any of the corresponding folders. For example, if you were working on a `ShoppingCart` component, the structure might look like this:

```
js/components/singles/shopping-cart/index.vue
js/components/singles/shopping-cart/items.vue
js/components/singles/shopping-cart/payment.vue
```

#### Globals (js/components/globals)

A component shared throughout the app and can have multiple instances at any one time (buttons, inputs, etc).

#### Pages (js/components/pages)

A component used as a router/view component, it belongs in this folder (home page, product page, etc).

#### Singles (js/components/singles)

A component that should only ever have a single instance at any one time (main header, main footer, etc).

## Composables

All Vue composistion modules live here. These modules are designed share re-usable code and state throughout the whole codebase.

## Helpers

Simple and reusable helper methods can live here. For example, you might have a `dollars()` helper method, which would format a number in to a US dollar format `dollars(4.2) > "$4.20"`.

## Services

This is a fairly broad category that could contain singletons, HTTP/API abstractions, and third party library instances.