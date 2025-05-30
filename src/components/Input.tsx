import { Field, Input } from "@chakra-ui/react"


interface Props {
    invalid: boolean;
    label: string;
    placeholder: string;
    errorText?: string;
}

function InputText({ invalid,label,placeholder,errorText }: Props ) {
    return ( 
        <Field.Root className="mb-1" invalid={invalid}>
        <Field.Label>{label}</Field.Label>
        <Input placeholder={placeholder} />
        <Field.ErrorText>{errorText}</Field.ErrorText>
        </Field.Root>
    );
}

export default InputText;