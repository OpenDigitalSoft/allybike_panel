import InputText from "../../components/Input";
import { Button, Card, Field, Stack } from "@chakra-ui/react"
import './../../index.css';
import './../css/login.module.css'

export default function LoginView() {
  return (
    <>
      {/* <div className="justify-content-c align-content-c">
      <Card.Root className="" maxW="sm">
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
          <Card.Description>
            Fill in the form below to create an account
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <InputText
                invalid={false}
                label={"User Name"}
                placeholder={"UserName"}
                errorText={"UserName is Invalid"}
              />
            </Field.Root>
            <Field.Root>
              <InputText
                invalid={false}
                label={"Password"}
                placeholder={"Password"}
                errorText={"Password is Invalid"}
              />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Sign in</Button>
        </Card.Footer>
      </Card.Root>
    </div> */}

    <div className="h-100 justify-content-c align-items-c">
      <div>
        <h2 className="mb-1">Iniciar sesión</h2>
         <InputText
            invalid={false}
            label={"Usuario"}
            placeholder={"Usuario"}
            errorText={"Usuario Invalido"}
          />
          <InputText
            invalid={false}
            label={"Contraseña"}
            placeholder={"Contraseña"}
            errorText={"Contraseña Invalido"}
          />
          <Button className="w-100 mt-1" variant="solid">Sign in</Button>
      </div>
    </div>
    </>
  );
}
