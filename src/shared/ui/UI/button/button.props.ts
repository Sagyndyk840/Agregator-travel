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
    iconLeft?: string, // test
    iconRight?: string, // test
    icon?: string, // test
    to?: string, // success
    width?: string, // success
}

type BtnType =
    | 'button'
    | 'submit'
    | 'reset';

type BtnSize =
    | 'small'
    | 'medium'
    | 'large'
