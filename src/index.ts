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
  browserslist?: string | string[]
  /**
   * Exclude patterns.
   * @defaultValue `['*.min.css']`
   */
  exclude?: string | string[]
}

type HexoAutoprefixerConfig = {
  exclude?: HexoLightningCSSConfig['exclude']
  browsers?: HexoLightningCSSConfig['browserslist']
}

declare module 'hexo' {
  export interface HexoConfig {
    readonly lightningcss: HexoLightningCSSConfig
    readonly autoprefixer?: HexoAutoprefixerConfig
  }
}

hexo.config.lightningcss = {
  exclude: ['*.min.css'],
  minify: true,
  sourceMap: false,
  ...hexo.config.lightningcss,
}

hexo.extend.filter.register('after_render:css', hexoLightningCSS)
