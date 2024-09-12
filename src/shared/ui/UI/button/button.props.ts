export default interface ButtonProps {
    type: BtnType,
    label: string,
    align: BtnAlign,
    outlined: boolean,
    color:  string,
    textColor: string,
    block: boolean,
    disabled: boolean,
    loading: boolean,
    iconLeft?: string,
    iconRight?: string,
    icon?: string,
    to?: string,
    width?: string,
}

type BtnType =
    | "button"
    | "submit"
    | "reset";

type BtnAlign =
    | "center"
    | "left"
    | "right";
