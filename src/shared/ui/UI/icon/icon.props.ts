const icons: string[] = [
  'bed',
  'plane',
  'send',
  'back-chevron',
  'next-chevron',
] as const

type Icons = typeof icons[number]

export interface IconProps {
  icon?: Icons,
  type: IconType,
  size?: number,
}

export type IconType = 'outlined' | 'filled' | 'general'

