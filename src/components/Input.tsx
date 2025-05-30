import { Field, Input } from "@chakra-ui/react"

interface Propiedades {
    invalid: boolean;
    label: string;
    placeholder: string;
    errorText?: string;
}

function InputText({ invalid,label,placeholder,errorText }: Propiedades ) {
    return ( <>
        <Field.Root invalid={invalid}>
        <Field.Label>{label}</Field.Label>
        <Input placeholder={placeholder} />
        <Field.ErrorText>{errorText}</Field.ErrorText>
        </Field.Root>
    </>);
}

export default InputText;