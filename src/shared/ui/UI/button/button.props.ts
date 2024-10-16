import type { IconType } from '@/shared/ui/UI/icon/icon.props'

export default interface ButtonProps {
    type: BtnType, // success
    label: string, // success
    size: BtnSize, // success
    outlined: boolean, // success
    color:  string, // success
    textColor: string, // success
    block: boolean, // success
    disabled: boolean, // success
    loading: boolean, // success
    iconLeft?: string, // success
    iconRight?: string, // success
    iconType?: IconType, // success
    icon?: string, // success
    to?: object, // success
    width?: string, // success
    flat: boolean, // success
}

type BtnType =
    | 'button'
    | 'submit'
    | 'reset';

type BtnSize =
    | 'small'
    | 'medium'
    | 'large'
