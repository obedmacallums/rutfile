import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import firebaseErrors from "../utils/firebaseErrors";
import {validateForm} from "../utils/validateForm"
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";

const Login = () => {


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
    await loginUser(data.email, data.password);
    navigate("/");
  } catch (error) {
    const { code, message } = firebaseErrors(error);
    setError(code, { message });
    console.log(error.code);

  }
};

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
        type="email"
        placeholder="ingrese su Email"
        {...register("email", {
          required,
          pattern: patternEmail,
        })}
        >
        <FormError error={errors.email}/>
        </FormInput>
        <FormInput
        type="password"
        {...register("password", {
          minLength: minLength6,
          validate: emptyValidate,
        })}
        placeholder="ingrese su password"        
        >
        <FormError error={errors.password}/>
        </FormInput>

        <button type="submit">Iniciar</button>
    </form>
    </>
  );
};

export default Login;
