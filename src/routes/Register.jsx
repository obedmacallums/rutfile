import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import firebaseErrors from "../utils/firebaseErrors";
import {validateForm} from "../utils/validateForm"
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import { Button, Spinner } from "flowbite-react";


const Register = () => {
  const { registerUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const {required, patternEmail, minLength6, emptyValidate, equalValidate} = validateForm()

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      await registerUser(data.email, data.password);
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
      <Title title="Registro" />
      <form onSubmit={handleSubmit(onSubmit)}>
         <FormInput
        type="email"
        label="Ingrese su Email"
        {...register("email", {
          required,
          pattern: patternEmail,
        })}
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

        <FormInput
        type="password"
        {...register("repassword", {
          validate: equalValidate(getValues("password")),
        })}
        label="Repita su clave"
        error={errors.repassword}      
        >
        <FormError error={errors.repassword}/>
        </FormInput>

        
        { 
        loading ? ( 
          <Button gradientMonochrome="purple" pill={true}>
          <Spinner aria-label="Alternate spinner button example" />
          <span className="pl-3">
            Registrando...
          </span>
        </Button>)
         
         :(
        <Button gradientMonochrome="purple" type="submit" pill={true}>
         Registrar
        </Button>
        )
        }
      </form>
    </>
  );
};

export default Register;
