export default interface UIInputProps {
    disabled: boolean,
    loading: boolean,
    width?: string,
    icon: string,
    block: boolean,
    filled: boolean,
    color: string,
    textColor: string,
    type: UIInputType,
}

type UIInputType =
    | 'text'
    | 'password'
    | 'number';
