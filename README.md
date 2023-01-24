# hexo-lightningcss

⚡️ [LightningCSS](https://github.com/parcel-bundler/lightningcss) Plugin for [Hexo](https://github.com/hexojs/hexo)

## Install

```bash
npm i hexo-lightningcss # npm
# pnpm add hexo-lightningcss # pnpm
# yarn add hexo-lightningcss # yarn
```

## Config

```ts
/** @see {@link https://github.com/parcel-bundler/lightningcss/blob/master/node/index.d.ts} */
export type HexoLightningCSSConfig = Omit<
  TransformOptions,
  'filename' | 'code'
> & {
  /**
   * Browserslist.
   * @see {@link https://github.com/browserslist/browserslist/blob/main/index.d.ts}
   */
  browserslist?: string | string[]
  /**
   * Exclude files.
   * @remarks If using an array, run as `new RegExp(arr[0], arr[1])`
   * @defaultValue `['min.css']`
   */
  exclude?: (string | [string, string])[]
}
```

Write into `_config.yml` to override default value.

```yaml
lightningcss:
  browserslist:
    - defaults and supports es6-module
    - maintained node versions
  exclude:
    - min.css
```

### Migrating from [`hexo-autoprefixer`](https://npmjs.com/package/hexo-autoprefixer)

This plugin is compatible with hexo-autoprefixer configuration, no changes are needed.

But if you want, you can also change to the new format:

```diff
- autoprefixer:
+ lightningcss:
    exclude:
      - '*.min.css'
-   browsers:
+   browserslist:
      - 'last 2 versions'
```

Browserlist may need to be put into a configuration file `_config.yml`, not `package.json` or `.browserslistrc`.

## License

Licensed under the [WTFPL](http://www.wtfpl.net), See the [COPYING](COPYING) file for more details.
