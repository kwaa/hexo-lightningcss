import type { TransformOptions } from 'lightningcss'
import { hexoLightningCSS } from './filter'

/** @see {@link https://github.com/parcel-bundler/lightningcss/blob/master/node/index.d.ts} */
export type HexoLightningCSSConfig = Omit<
  TransformOptions,
  'filename' | 'code'
> & {
  /**
   * Browserslist.
   * @see {@link https://github.com/browserslist/browserslist/blob/main/index.d.ts}
   */
  readonly browserslist?: string | string[]
  /**
   * Exclude files.
   * @remarks If using an array, run as `new RegExp(arr[0], arr[1])`
   * @defaultValue `['min.css']`
   */
  readonly exclude?: (string | [string, string])[]
}

declare module 'hexo' {
  export interface HexoConfig {
    readonly lightningcss: HexoLightningCSSConfig
  }
}

hexo.config.lightningcss = {
  exclude: ['*.min.css'],
  minify: true,
  sourceMap: false,
  ...hexo.config.lightningcss,
}

hexo.extend.filter.register('after_render:css', hexoLightningCSS)
