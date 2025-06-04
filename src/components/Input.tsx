import { Field, Input } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input";


type InputType = "Text" | "Password";

interface Props {
    invalid: boolean;
    label: string;
    placeholder: string;
    errorText?: string;
    typeInput: InputType;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value: string;
}

function InputText({ typeInput,invalid,label,placeholder,errorText,onChange,value }: Props ) {
    return ( 
        <Field.Root className="mb-1" invalid={invalid}>
        <Field.Label>{label}</Field.Label>
        {typeInput === "Password" ? (
                <PasswordInput placeholder={placeholder} onChange={onChange} value={value} />
            ) : (
                <Input placeholder={placeholder} onChange={onChange} value={value}/>
            )}
        <Field.ErrorText>{errorText}</Field.ErrorText>
        </Field.Root>
    );
}

export default InputText;