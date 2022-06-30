

export const validateForm = () => {

    return {
        required: {
            value: true,
            message: "Campo obligatorio",
        },
        patternEmail: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Formato de email incorrecto",
        },
        minLength6: { value: 6, message: "minimo 6 caracteres" },

        emptyValidate: (v)=>{
            if (v.trim()) return true;
            else return "no seas 🤡 escribe algo";
        },
        equalValidate: (value)=>{
            return {equals: (v) => v === value || "No coinciden las contraseñas",}
        }


    }


}
