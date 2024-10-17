import type { IconType } from '@/shared/ui/UI/icon/icon.props'

export default interface UIFieldProps {
    disabled: boolean,
    block: boolean,
    filled: boolean,
    outlined: boolean,
    // color: string,
    // textColor: string,
    // focusColor: string,
    loading?: boolean,
    iconLeft?: string,
    iconRight?: string,
    iconType: IconType,
    type: UIFieldType,
    label: string,
    error: boolean,
    field: 'input' | 'textarea',
    modelValue: any,
    name: string,
}

type UIFieldType =
    | 'text'
    | 'password'
    | 'number';
