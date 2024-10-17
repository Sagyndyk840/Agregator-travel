import type { IconType } from '@/shared/ui/UI/icon/icon.props'

export default interface UIFieldProps {
    disabled: boolean,
    block: boolean,
    filled: boolean,
    outlined: boolean,
    // color: string,
    // focusColor: string,
    loading: boolean,
    iconLeft?: string,
    iconRight?: string,
    iconType: IconType,
    type: UIFieldType,
    label: string,
    // error: boolean,
    field: 'input' | 'textarea',
    modelValue: any,
    name: string,
    hint?: string,
    rules?: Array<(value: string) => boolean | string>,

    // Process

    // Rules
    // Password
    // Clear
}

type UIFieldType =
    | 'text'
    | 'password'
    | 'number';
