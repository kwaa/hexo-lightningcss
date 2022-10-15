import type { HexoConfig } from 'hexo'
import { transform, browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'
import { basename } from 'node:path'

export function hexoLightningCSS(result: string, data: { path: string }) {
  const {
    config: { lightningcss },
  }: { config: HexoConfig } = this

  if (data.path && lightningcss.exclude)
    if (
      lightningcss.exclude.some((match) =>
        match instanceof Array
          ? new RegExp(...match).test(data.path)
          : data.path.includes(match)
      )
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
