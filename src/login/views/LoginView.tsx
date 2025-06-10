import InputText from "../../components/Input";
import { Button } from "@chakra-ui/react"
import './../../index.css';
import './../css/login.module.css'
import CardChakra from '../../components/Card';
import { useState } from "react";

export default function LoginView() {

  const [invalidUser, setInvalidUser] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorTextUser, setErrorTextUser] = useState('Usuario requerido')
  
  /* Funcion normal */
  const validateUser = (text: string) => {
    const trimmedText = text.trim();
    const isValidText = Boolean(trimmedText);
    const isValidEmail = validateEmail(trimmedText);
    setUser(text)
    setInvalidUser(!isValidText || !isValidEmail);
    if (!isValidText) {
      setErrorTextUser('Campo requerido');
      return;
    }
    if (!isValidEmail) {
      setErrorTextUser('Campo inválido');
      return;
    }
    setErrorTextUser('');
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (text: string) => {
    setInvalidPassword(!Boolean(text && text.trim()))
    setPassword(text)
  }

  const signinButton = () => {
    validateUser(user)
    setInvalidPassword(!Boolean(password.trim()))
  }

  /*Usando Efectos */
  //useEffect( () => { setInvalidUser(!Boolean(user && user.trim())) }, [user] )

  return (
    <>
   <div className="h-100 justify-content-c align-items-c cardWidth">
        <CardChakra 
          title="Iniciar Sesion"
          description="Ingrese sus credenciales para acceder"
        >
          <div className="login-form-content">
            <InputText
              invalid={invalidUser}
              label="Usuario"
              placeholder="Ingrese su usuario"
              errorText={errorTextUser}
              typeInput="Text"
              onChange={ (event) => validateUser(event.target.value) }
              value={user}
            />
            <InputText
              invalid={invalidPassword}
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              errorText="Campo requerido"
              typeInput="Password"
              onChange={ (event) => validatePassword(event.target.value) }
              value={password}
            />
            <Button className="w-100 mt-1" variant="solid" onClick={signinButton}>
              Sign in
            </Button>
          </div>
        </CardChakra>
      </div>
    </>
  );
}
