import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import firebaseErrors from "../utils/firebaseErrors";
import {validateForm} from "../utils/validateForm"
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { Button,  Spinner } from "flowbite-react";
import Title from "../components/Title";

const Login = () => {

  const [loading, setLoading] = useState(false)
  const{loginUser} = useContext(UserContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
     setError,
  } = useForm();
  const {required, patternEmail, minLength6, emptyValidate} = validateForm()

const onSubmit = async (data) => {
  try {
    setLoading(true)
    await loginUser(data.email, data.password);
    navigate("/");
  } catch (error) {
    const { code, message } = firebaseErrors(error);
    setError(code, { message });
    console.log(error.code);

  }finally{
    setLoading(false)

  }
};

  return (
    <>
      <Title title="Iniciar sesión" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
        type="email"
        {...register("email", {
          required,
          pattern: patternEmail,
        })}
        label="Ingrese su email"
        error={errors.email}
        >
        <FormError error={errors.email}/>
        </FormInput>
        <FormInput
        type="password"
        {...register("password", {
          minLength: minLength6,
          validate: emptyValidate,
        })}
        label="Ingrese su clave" 
        error={errors.password}       
        >
        <FormError error={errors.password}/>
        </FormInput>

        { 
        loading ? ( 
          <Button gradientMonochrome="purple" pill={true}>
          <Spinner aria-label="Alternate spinner button example" />
          <span className="pl-3">
            Iniciando...
          </span>
        </Button>)
         
         :(
        <Button gradientMonochrome="purple" type="submit" pill={true}>
         Iniciar
        </Button>
        )
        }
      
    </form>


    </>
  );
};

export default Login;
