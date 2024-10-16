import type { IconType } from '@/shared/ui/UI/icon/icon.props'

export default interface UIInputProps {
    disabled: boolean,
    block: boolean,
    filled: boolean,
    outlined: boolean,
    // color: string,
    // textColor: string,
    focusColor: string,
    loading?: boolean,
    iconLeft?: string,
    iconRight?: string,
    iconType: IconType,
    type: UIInputType,
    label: string,
    error: boolean,
}

type UIInputType =
    | 'text'
    | 'password'
    | 'number';
