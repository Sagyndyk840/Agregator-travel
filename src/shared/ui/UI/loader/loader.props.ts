export default interface LoaderProps {
  loading: boolean,
  color: string,
  size: Size,
  radius: string
}

type Size =
  | 'small'
  | 'medium'
  | 'large'