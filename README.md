# @tdesign-vue-next/nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt Module for TDesign Vue Next.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- auto-import tdesign-vue-next components
- auto-import icons within tdesign-icons-vue-next
- auto-import tdesign css variables

## Quick Setup

1. Add `@tdesign-vue-next/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @tdesign-vue-next/nuxt

# Using yarn
yarn add --dev @tdesign-vue-next/nuxt

# Using npm
npm install --save-dev @tdesign-vue-next/nuxt
```

2. Add `@tdesign-vue-next/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@tdesign-vue-next/nuxt'],
  build: {
    transpile: ['tdesign-vue-next']
  }
});
```

That's it! You can now use Nuxt Module for TDesign in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@tdesign-vue-next/nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@tdesign-vue-next/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@tdesign-vue-next/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@tdesign-vue-next/nuxt
[license-src]: https://img.shields.io/npm/l/@tdesign-vue-next/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@tdesign-vue-next/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
