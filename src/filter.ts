import type { HexoConfig } from 'hexo'
import { transform } from 'lightningcss'
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
  })

  return code
}
