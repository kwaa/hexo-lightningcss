import type { HexoConfig } from 'hexo'
import { transform, browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'
import micromatch from 'micromatch'
import { basename } from 'node:path'

export function hexoLightningCSS(result: string, data: { path: string }) {
  let {
    config: { lightningcss, autoprefixer },
  }: { config: HexoConfig } = this

  if (autoprefixer)
    lightningcss = {
      ...lightningcss,
      exclude: autoprefixer.exclude,
      browserslist: autoprefixer.browsers,
    }

  if (Array.isArray(lightningcss.exclude))
    lightningcss.exclude = lightningcss.exclude.join('')

  if (data.path && lightningcss.exclude)
    if (
      micromatch.isMatch(data.path, lightningcss.exclude, {
        basename: lightningcss.exclude.includes('/') ? false : true,
      })
    )
      return result

  const { code } = transform({
    filename: basename(data.path),
    code: Buffer.from(result),
    ...lightningcss,
    targets: lightningcss.browserslist
      ? browserslistToTargets(browserslist(lightningcss.browserslist))
      : lightningcss.targets,
  })

  return code
}
