import InputText from "../../components/Input";
import { Button } from "@chakra-ui/react"
import './../../index.css';
import './../css/login.module.css'
import CardChakra from '../../components/Card';

export default function LoginView() {
  return (
    <>
   <div className="h-100 justify-content-c align-items-c cardWidth">
        <CardChakra 
          title="Iniciar Sesion"
          description="Ingrese sus credenciales para acceder"
        >
          <div className="login-form-content">
            <InputText
              invalid={false}
              label={"Usuario"}
              placeholder={"Ingrese su usuario"}
              errorText={"Usuario Invalido"}
            />
            <InputText
              invalid={false}
              label={"Contraseña"}
              placeholder={"Ingrese su contraseña"}
              errorText={"Contraseña Invalida"}
            />
            <Button className="w-100 mt-1" variant="solid">
              Sign in
            </Button>
          </div>
        </CardChakra>
      </div>
    </>
  );
}
