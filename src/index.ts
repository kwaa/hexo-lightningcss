import type { TransformOptions } from 'lightningcss'
import { hexoLightningCSS } from './filter'

export type HexoLightningCSSConfig = Omit<TransformOptions, 'filename' | 'code'> & {
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
