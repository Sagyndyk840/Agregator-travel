import type { IconType } from '@/shared/ui/UI/icon/icon.props'

export default interface ButtonProps {
    type: BtnType,
    label: string,
    size: BtnSize,
    outlined: boolean,
    color:  string,
    textColor: string,
    block: boolean,
    disabled: boolean,
    loading: boolean,
    iconLeft?: string,
    iconRight?: string,
    iconType?: IconType,
    icon?: string,
    to?: object,
    width?: string,
    flat: boolean,
}

type BtnType =
    | 'button'
    | 'submit'
    | 'reset';

type BtnSize =
    | 'small'
    | 'medium'
    | 'large'
