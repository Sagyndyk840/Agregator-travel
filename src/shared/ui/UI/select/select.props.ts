
type OptionType = { value: string; id: string|number };


export default interface UISelectProps {
    disabled: boolean, //success
    loading: boolean,
    width?: string,
    icon: string,
    block: boolean,
    // borderColor: string,
    // color: string,
    // textColor: string,
    label: string, // success
    options: OptionType[],
    optionValue: string|number,
    optionLabel: string,
    value: string,
    error: boolean, // success
}
