const icons: string[] = [
  'bed',
  'plane',
  'send',
] as const

type Icons = typeof icons[number]

export default interface IconProps {
  icon: Icons,
  type: 'outlined' | 'filled'
}