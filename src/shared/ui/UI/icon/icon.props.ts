const icons: string[] = [
  'bed',
  'plane',
  'send',
] as const

type Icons = typeof icons[number]

export interface IconProps {
  icon?: Icons,
  type: IconType
}

export type IconType = 'outlined' | 'filled'

