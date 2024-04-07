import { ChevronDown } from 'lucide-react'
import { Badge } from './ui/badge'
import { Logo } from '../assets/logo'
import { Rock } from '../assets/rock'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <Logo />

          <Badge>BETA</Badge>
        </div>

        <Rock />

        <div className="flex items-center gap-2.5">
          <img
            src="https://github.com/rocketseat.png"
            className="size-5 rounded-full"
            alt=""
          />

          <span className="text-sm font-medium text-zinc-100">Rocketseat</span>

          <Badge variant="primary">PRO</Badge>

          <ChevronDown className="size-4 text-zinc-600" />
        </div>

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-zinc-700"
          />
        </svg>

        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-zinc-100">Ignite</span>

          <ChevronDown className="size-4 text-zinc-600" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-sm font-medium">Diego Fernandes</span>
          <span className="text-xs text-zinc-400">diego@nivo.video</span>
        </div>
        <img
          src="https://github.com/diego3g.png"
          className="size-8 rounded-full"
          alt=""
        />
        <ChevronDown className="size-4 text-zinc-600" />
      </div>
    </div>
  )
}
