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
   * Exclude files.
   * @remarks If using an array, run as `new RegExp(arr[0], arr[1])`
   * @defaultValue `['min.css']`
   */
  readonly exclude?: (string | [string, string])[]
}
```

Write into `_config.yml` to override default value.

```yaml
lightningcss:
  exclude:
    - 'min.css'
```

## License

Licensed under the [WTFPL](http://www.wtfpl.net), See the [COPYING](COPYING) file for more details.
